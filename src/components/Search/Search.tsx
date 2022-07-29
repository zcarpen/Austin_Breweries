import './Search.scss';
import React, { useState } from 'react';
import { formatCityState } from '../../helperFunctions';

function Search({currentSearch, handleNewSearch}: {currentSearch: string[], handleNewSearch: (e: React.FormEvent<HTMLInputElement>, search:string) => void}) {
    const [city, state] = formatCityState(currentSearch)
    const [search, setSearch] = useState('')

    const handleSearch = (e: {target: {value: string}}) => {
        setSearch(e.target.value)
    }

  return (
    <div className="search">
      <h2 className="location"><span className="current-search">{`${city}, ${state}`}</span> Breweries</h2>
      <h1 className="title">Find Breweries Near You!</h1>
      <form className="search-bar" onSubmit={(e) => handleNewSearch(e, search)}>
        <label className="search-label" htmlFor="search-bar-value">Search By City:</label>
        <input className="search-input" id="search-bar-value" value={search} onChange={handleSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  )
}

export default Search
