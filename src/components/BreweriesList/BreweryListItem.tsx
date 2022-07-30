import './BreweryListItem.scss';
import { Link } from 'react-router-dom';
import { formatAddress } from '../../helperFunctions';
import {BsArrowRight} from 'react-icons/bs'
import {FiExternalLink} from 'react-icons/fi'
import {MdLocationPin} from 'react-icons/md'

const typeColors = {
    micro: '#d11141',
    contract: '#00b159',
    regional: '#00aedb',
    planning: '#f37735',
    brewpub: '#ffc425', //change this
    other: '#333',
}

function BreweryListItem({brewery, cityState}) {
  const {name, brewery_type, state, street, postal_code, website_url, id} = brewery;
  const address = formatAddress(street, state, postal_code, cityState);

  return (
    <li className="list-container flex-vert">
        <div className="brewery-title-type flex">
          <h3>{name}</h3>
          <p className={brewery_type}>{brewery_type}</p>
        </div>
        <div className="brewery-details flex-vert">
          <a>
            <MdLocationPin className='icon'/>
            <span>{address}</span>
          </a>
          <div className="website-details-container">
            {website_url ? 
              <a target="_blank" href={website_url}>
                <FiExternalLink className='icon'/>
                <span>{website_url}</span>
              </a> : 
              <div></div>}
            <Link to={`/brewery-details?id=${id}`}>More Details 
              <BsArrowRight className="icon" />
            </Link>
          </div>
        </div>
    </li>
  )
}

export default BreweryListItem
