import {Link} from 'react-router-dom'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import {Fragment} from 'react'
import { FiExternalLink } from 'react-icons/fi'
import { MdLocationPin } from 'react-icons/md'
import { BsTelephone } from 'react-icons/bs'
import {FcContacts} from 'react-icons/fc'
import { formatAddress } from '../../helperFunctions'
import './BreweryDetails.scss'

function BreweryDetails({listOfBreweries, cityState}) {
  // let params = useParams()
  const queryParams = new URLSearchParams(window.location.search)
  if (listOfBreweries.length === 0) {
    console.log('need to fetch breweries')
    return
  }
  const id = queryParams.get("id")
  const {brewery_type, latitude, longitude, name, phone, postal_code, state, street, website_url} = listOfBreweries.find(brewery => brewery.id === id)
  const position = [latitude, longitude];
  const address = formatAddress(street, state, postal_code, cityState);
  console.log(address)

  return (
    <Fragment>
      <div className="card">
        <Link className="back" to="/">Back to breweries</Link>
        <div className={`brewery-type ${brewery_type}`} >{brewery_type}</div>
        <div className="general-info">
          <div className="icon-container">
            <FcContacts className="contact-icon"/>
          </div>
          <div className="contact-details">
            <h1>{name}</h1>
            {address && 
              <a>
                <MdLocationPin/>
                <span>{address}</span>
              </a>
            }
            {phone && 
              <a>
                <BsTelephone/>
                <span>{phone}</span>
              </a>
            }
            {
            website_url && 
              <a target="_blank" href={website_url}>
                <FiExternalLink/>
                <span>{website_url}</span>
              </a>
              }
          </div>
        </div>
        <div className="map-container">
          <MapContainer style={{height: "100%", width: "100%"}} center={position} zoom={13} scrollWheelZoom={false}>
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
        </div>
      </div>
    </Fragment>
  )
}

export default BreweryDetails
