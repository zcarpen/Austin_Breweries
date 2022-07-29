import './BreweriesList.scss';
import BreweryListItem from './BreweryListItem';

function BreweriesList({listOfBreweries}) {
  return (
    <div className="breweries-list-container">
      <h3 className="list-title">List of Breweries</h3>
      <ul className="list">
        {listOfBreweries.map(brewery => <BreweryListItem key={brewery.id} brewery={brewery} />)}
      </ul>
    </div>
  )
}

export default BreweriesList
