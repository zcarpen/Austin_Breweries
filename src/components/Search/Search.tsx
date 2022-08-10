import { useState, FormEvent } from 'react'

import './Search.scss'
import { formatCityState } from '../../helperFunctions/helperFunctions'
import { SProps } from '../../types/searchProps';

function Search({currentSearch, setSearch}: SProps) {
    const [city, state] = formatCityState(currentSearch)
    const [curSearch, setCurSearch] = useState('')
    const [warning, setWarning] = useState(false)
    
    const handleSearch = (e: {target: {value: string}}) => {
      setCurSearch(e.target.value)
    }
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (curSearch.split(',').length !== 2) {
        setWarning(true)
        
        setTimeout(() => {
          setWarning(false)
        }, 2500)
        return;
      }
      const [city, state] = curSearch.split(',')
      setSearch([city.trim().toLowerCase(), state.trim().toLowerCase()])
    }
  
  return (
    <div className="search">
      {warning ? 
        <p>Be sure to use "city, state"</p> :
        <h2 className="location"><span>{`${city}, ${state}`}</span> Breweries</h2>
      }
      <h1 className="title">Find Breweries Near You!</h1>
      <form className="search-bar" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="search-bar-value">Search By City:</label>
        <input id="search-bar-value" placeholder="(City, State)" value={curSearch} onChange={handleSearch}/>
        <button type="submit">Search</button>
        
      </form>
    </div>
  )
}

export default Search
