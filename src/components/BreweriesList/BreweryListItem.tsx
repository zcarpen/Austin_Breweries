import './BreweryListItem.scss';
import { formatAddress } from '../../helperFunctions';
import {BsArrowRight} from 'react-icons/bs'
import {FiExternalLink} from 'react-icons/fi'
import {MdLocationPin} from 'react-icons/md'

const typeColors = {
    micro: '#d11141',
    contract: '#00b159',
    regional: '#00aedb',
    planning: '#f37735',
    brewpub: '#ffc425',
    other: '#333',
}

function BreweryListItem({brewery, cityState}) {
  let {name, brewery_type, state, street, postal_code, website_url} = brewery;
  const address = formatAddress(street, state, postal_code, cityState);

  return (
    <li className="list-container">
        <div className="brewery-title-type">
          <h3 className="brewery-title">{name}</h3>
          <p className="brewery-type" style={{backgroundColor: `${typeColors[brewery_type] === undefined ? typeColors['other'] : typeColors[brewery_type]}`}}>{brewery_type}</p>
        </div>
        <div className="brewery-details">
          <a className="container" >
            <MdLocationPin className='icon'/>
            <span className="underline">
              {address}
            </span>
          </a>
          <div className="website-details-container">
            {website_url ? 
              <a 
                className="container" 
                target="_blank" 
                href={website_url}
              >
                <FiExternalLink className='icon'/>
                <span className="underline">
                  {website_url}
                </span>
              </a> : 
              <a></a>}
            <a className="container">More Details 
              <BsArrowRight className="icon" />
            </a>
          </div>
        </div>
    </li>
  )
}

export default BreweryListItem
