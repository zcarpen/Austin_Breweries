import { Link } from 'react-router-dom'
import React from 'react';

import './BreweryListItem.scss'
import { formatAddress } from '../../helperFunctions/helperFunctions'
import { Pin, Arrow, LinkIcon, Phone } from '../IconHelper'
import { formatPhone } from '../../helperFunctions/helperFunctions'
import { Brewery } from '../../types/brewery'

function BreweryListItem({
    name,
    brewery_type,
    state,
    street,
    postal_code,
    city,
    website_url, 
    id,
    latitude, 
    longitude, 
    phone
}: Brewery) {
  const address = formatAddress(street, state, postal_code, city)
  const formattedPhone = formatPhone(phone)

  return (
    <li className="list-container">
        <div className="brewery-title-type">
          <h3>{name}</h3>
          <p className={brewery_type}>{brewery_type}</p>
        </div>
        <div className="brewery-details">
          <a 
            className="address" 
            target="_blank" 
            rel="noreferrer"
            href={`https://maps.google.com/?q=1200 ${address}`}
          >
            < Pin />
            <span>{address}</span>
          </a>
          <div className="website-details-container">
            {website_url ? 
              <a target="_blank" href={website_url} rel="noreferrer">
                <LinkIcon/>
                <span>{website_url}</span>
              </a> : 
              <div></div>}
            {latitude && longitude 
              ? 
                <Link to={`/brewery-details/${id}/${city}-${state}`}>More Details 
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
