import {Link, useParams} from 'react-router-dom'
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import {Fragment, useEffect} from 'react'
import {FcContacts} from 'react-icons/fc'

import { formatAddress, formatPhone } from '../../helperFunctions/helperFunctions'
import { LinkIcon, Pin, Phone } from '../IconHelper'
import './BreweryDetails.scss'
import { BDProps } from '../../types/breweryDetailsProps'
import { LatLngExpression } from 'leaflet'
import { Brewery } from '../../types/brewery'





function BreweryDetails({listOfBreweries, cityState, setSearch}: BDProps) {
  const {id} = useParams() as {id: string}
  const [id2, curParams] = id.split('=').slice(1);
  const newId = id2.split('&')[0]
  let cityStateParams = curParams.split('-');
  console.log(newId)
  console.log(cityStateParams)

  useEffect(() => {
    if (cityStateParams[0] !== 'austin') {
      setSearch(cityStateParams)  
    }
  } ,[])

  if (!listOfBreweries?.find(brewery => brewery.id === newId)) return <></>
  const {brewery_type, latitude, longitude, name, phone, postal_code, state, street, website_url} = listOfBreweries?.find(brewery => brewery.id === newId) as Brewery

  const position: LatLngExpression = [Number(latitude), Number(longitude)];
  const address = formatAddress(street, state, postal_code, cityState);
  const formattedPhone = formatPhone(phone);

  return (
    <Fragment>
      <div className="card">
        <Link className="back" to="/">Back to breweries</Link>
        <p className={`brewery-type ${brewery_type}`} >{brewery_type}</p>
        <div className="general-info">
          <div className="icon-container">
            <FcContacts className="contact-icon"/>
          </div>
          <div className="contact-details">
            <h1 className="ellipsis">{name}</h1>
            {address && 
              <a className="ellipsis" target="_blank" href={`https://maps.google.com/?q=1200 ${address}`}>
                <Pin/>
                <span>{address}</span>
              </a>
            }
            {phone && 
              <a className="ellipsis" href={`tel:${formattedPhone}`}>
                <Phone/>
                <span>{formattedPhone}</span>
              </a>
            }
            {
            website_url && 
              <a className="ellipsis" target="_blank" href={website_url}>
                <LinkIcon/>
                <span>{website_url}</span>
              </a>
              }
          </div>
        </div>
        {latitude && longitude && <div className="map-container">
          <MapContainer style={{height: "100%", width: "100%"}} center={position} zoom={10} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                {name}<br /> {address}
              </Popup>
            </Marker>
          </MapContainer>
        </div>}
      </div>
    </Fragment>
  )
}

export default BreweryDetails
