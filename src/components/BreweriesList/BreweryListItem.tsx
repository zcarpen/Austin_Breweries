import { Link } from 'react-router-dom';

import './BreweryListItem.scss';
import { formatAddress } from '../../helperFunctions/helperFunctions';

import { BsArrowRight } from 'react-icons/bs'
import { FiExternalLink } from 'react-icons/fi'
import { MdLocationPin } from 'react-icons/md'
import { BsTelephone } from 'react-icons/bs'
import { formatPhone } from '../../helperFunctions/helperFunctions';

function BreweryListItem({brewery, cityState}) {

  const {name, brewery_type, state, street, postal_code, website_url, id, latitude, longitude, phone} = brewery;
  const address = formatAddress(street, state, postal_code, cityState);
  const formattedPhone = formatPhone(phone);

  return (
    <li className="list-container flex-vert">
        <div className="brewery-title-type flex">
          <h3>{name}</h3>
          <p className={brewery_type}>{brewery_type}</p>
        </div>
        <div className="brewery-details flex-vert">
          <a className="address">
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
            {latitude && longitude 
              ? 
                <Link to={`/brewery-details?id=${id}&cityState=${cityState[0]}-${cityState[1]}`}>More Details 
                  <BsArrowRight className="icon" />
                </Link> 
              : 
                <a>
                  {formattedPhone && <BsTelephone className='icon'/>}
                  <span>{formattedPhone}</span>  
                </a>}
          </div>
        </div>
    </li>
  )
}

export default BreweryListItem
