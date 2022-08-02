import { Link } from 'react-router-dom'

import './BreweryListItem.scss'
import { formatAddress } from '../../helperFunctions/helperFunctions'
import { BLIProps } from '../../types/breweryListItemProps'
import { Pin, Arrow, LinkIcon, Phone } from '../IconHelper'
import { formatPhone } from '../../helperFunctions/helperFunctions'

function BreweryListItem({brewery, cityState}: BLIProps) {

  const {name, brewery_type, state, street, postal_code, website_url, id, latitude, longitude, phone} = brewery
  const address = formatAddress(street, state, postal_code, cityState)
  const formattedPhone = formatPhone(phone)

  return (
    <li className="list-container flex-vert">
        <div className="brewery-title-type flex">
          <h3>{name}</h3>
          <p className={brewery_type}>{brewery_type}</p>
        </div>
        <div className="brewery-details flex-vert">
          <a 
            className="address" 
            target="_blank" 
            href={`https://maps.google.com/?q=1200 ${address}`}
          >
            < Pin />
            <span>{address}</span>
          </a>
          <div className="website-details-container">
            {website_url ? 
              <a target="_blank" href={website_url}>
                <LinkIcon/>
                <span>{website_url}</span>
              </a> : 
              <div></div>}
            {latitude && longitude 
              ? 
                <Link to={`/brewery-details/${id}/${cityState[0]}-${cityState[1]}`}>More Details 
                  <Arrow/>
                </Link> 
              : 
                <a href={`tel:${formattedPhone}`}>
                  {formattedPhone && <Phone/>}
                  <span>{formattedPhone}</span>  
                </a>}
          </div>
        </div>
    </li>
  )
}

export default BreweryListItem
