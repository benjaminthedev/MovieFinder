import React, { useState } from 'react';
import axios from 'axios';
import Search from './Components/Search'
import Results from './Components/Results';
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
      axios(api + "&s=" + state.s).then(({data}) => {
        let results = data.search;
        
        setState(prevState => {
          return{ ...prevState, results: results}
        })
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

    <main>
      <Search 
        handleInput={handleInput} 
        search={search}
      />
      <Results />
    </main>
    </div>
  );
}

export default App;
