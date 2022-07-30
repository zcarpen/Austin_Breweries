import './Search.scss';
import React, { useState } from 'react';
import { formatCityState } from '../../helperFunctions';

function Search({currentSearch, handleNewSearch}: {currentSearch: string[], handleNewSearch: (e: React.FormEvent<HTMLFormElement>, search:string) => void}) {
    const [city, state] = formatCityState(currentSearch)
    const [search, setSearch] = useState('')

    const handleSearch = (e: {target: {value: string}}) => {
        setSearch(e.target.value)
    }

  return (
    <div className="search">
      <h2 className="location"><span>{`${city}, ${state}`}</span> Breweries</h2>
      <h1 className="title">Find Breweries Near You!</h1>
      <form className="search-bar" onSubmit={(e) => handleNewSearch(e, search)}>
        <label htmlFor="search-bar-value">Search By City:</label>
        <input id="search-bar-value" value={search} onChange={handleSearch}/>
        <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default Search
