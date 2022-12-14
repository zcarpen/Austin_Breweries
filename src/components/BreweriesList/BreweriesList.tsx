import React, {useState} from 'react'
import {MdSort} from 'react-icons/md'

import './BreweriesList.scss'
import BreweryListItem from './BreweryListItem'
import SearchError from '../SearchError/SearchError'
import { Brewery } from '../../types/brewery'

const BreweriesList = ({listOfBreweries}: {listOfBreweries: Brewery[]}) => {
  const [sorted, setSorted] = useState(false)
  const sortedBreweries: Brewery[] = sorted ? 
    [...listOfBreweries].sort((a: Brewery, b: Brewery) => a?.brewery_type.localeCompare(b?.brewery_type)) : 
    listOfBreweries
  
  return (
    <div className="breweries-list-container">
      <div className="sort" onClick={() => setSorted(!sorted)}>
        <h4>
          Sort By Type
        </h4>
        <MdSort className="icon"/>
      </div>
      <h3>List of Breweries</h3>
      {
        listOfBreweries.length > 0 ? 
        <ul>
          {sortedBreweries.map(brewery => (
            <BreweryListItem 
              key={brewery.id} 
              {...brewery} 
            />
          ))}
        </ul> : 
        <SearchError />
      }
    </div>
  )
}

export default BreweriesList
