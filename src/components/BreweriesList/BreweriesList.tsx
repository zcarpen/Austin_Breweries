import './BreweriesList.scss';
import BreweryListItem from './BreweryListItem';
import {MdSort} from 'react-icons/md';
import {useState} from 'react';
import { Brewery } from '../../types/brewery';

function BreweriesList({listOfBreweries, cityState}) {

  const [sorted, setSorted] = useState(false)
  let sortedBreweries = sorted === true ? [...listOfBreweries].sort((a: Brewery, b: Brewery) => a?.brewery_type.localeCompare(b?.brewery_type)) : listOfBreweries
  
  return (
    <div className="breweries-list-container">
      <div className="sort" onClick={() => setSorted(!sorted)}>
        <h4>
          Sort By Type
        </h4>
        <MdSort className="icon"/>
      </div>
      <h3>List of Breweries</h3>
      <ul>
        {sortedBreweries.map(brewery => <BreweryListItem key={brewery.id} brewery={brewery} cityState={cityState} />)}
      </ul>
    </div>
  )
}

export default BreweriesList
