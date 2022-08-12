import './SearchError.scss'
import React from 'react';

function SearchError() {

  return (
    <div className="center">
        <div className="error-container">
            <h1>Oops!</h1>
            <p>There are no breweries in the searched city. Check your spelling or maybe search another city.</p>
        </div>
    </div>
  )
}

export default SearchError
