import './Search.scss';
import { formatCityState } from '../../helperFunctions';

function Search({search}) {
    const [city, state] = formatCityState(search)
  return (
    <div className="search">
      <h2 className="title"><span className="current-search">{`${city}, ${state}`}</span> Breweries</h2>
      Search
    </div>
  )
}

export default Search
