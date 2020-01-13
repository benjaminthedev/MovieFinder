import React from 'react'
import Result from './Results'

function Result({result}) {
    return (
        <div className="result">
            <img src={result.Poster} />
            <h3>{result.Title}</h3>
        </div>
    )
}

export className="result" default Result
{result}