import React, { useState } from 'react';
import axios from 'axios';
import Search from './Components/Search'
import './index.css';

function App() {


  const [state, setState] = useState({
    s: "", 
    results: [],
    selected: {}
  });
  const api = 'http://www.omdbapi.com/?i=tt3896198&apikey=65b29ab';

  const search = (e) => {
    if(e.key === "Enter"){
      axios(api + "&s=" + state.s).then((data) => {
        console.log(data);
      })
    }
  }

  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return {...prevState, s: s}
    });
  }  




  return (
    <div>
    <header>
      <h1>Find Your Movie</h1>
    </header>

    <Search handleInput={handleInput} search={search}/>

    <main>

    </main>
    </div>
  );
}

export default App;
