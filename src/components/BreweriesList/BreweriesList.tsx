import {useState} from 'react'

import './BreweriesList.scss'
import BreweryListItem from './BreweryListItem'
import SearchError from '../SearchError/SearchError'
import { BLProps } from '../../types/breweryListProps'
import { Brewery } from '../../types/brewery'

import {MdSort} from 'react-icons/md'




const BreweriesList = ({listOfBreweries, cityState}: BLProps) => {

  const [sorted, setSorted] = useState(false)
  let sortedBreweries: Brewery[] = sorted === true ? [...listOfBreweries].sort((a: Brewery, b: Brewery) => a?.brewery_type.localeCompare(b?.brewery_type)) : listOfBreweries
  
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
              brewery={brewery} 
              cityState={cityState} 
            />
          ))}
        </ul> : 
        <SearchError />
      }
    </div>
  )
}

export default BreweriesList
