import './BreweryListItem.scss';

const typeColors = {
    micro: '#d11141',
    contract: '#00b159',
    regional: '#00aedb',
    planning: '#f37735',
    brewpub: '#ffc425'
}

function BreweryListItem({brewery}) {
  return (
    <li className="list-item">
        <h3 className="list-item-title">{brewery.name}</h3>
        <p className="list-item-type" style={{backgroundColor: `${typeColors[brewery.brewery_type]}`}}>{brewery.brewery_type}</p>
    </li>
  )
}

export default BreweryListItem
