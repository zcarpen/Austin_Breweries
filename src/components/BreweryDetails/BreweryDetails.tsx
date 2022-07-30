import {Link} from 'react-router-dom'
import { formatAddress } from '../../helperFunctions'

function BreweryDetails({listOfBreweries, cityState}) {
  // let params = useParams()
  const queryParams = new URLSearchParams(window.location.search)
  if (listOfBreweries.length === 0) {
    console.log('need to fetch breweries')
    return
  }
  const id = queryParams.get("id")
  const {brewery_type, latitude, longitude, name, phone, postal_code, state, street, website_url} = listOfBreweries.find(brewery => brewery.id === id)

  const address = formatAddress(street, state, postal_code, cityState);
  console.log(address)
  return (
    <div className="details-container">
      <Link to="/">Back to breweries</Link>
      <div>
        <h1>FB</h1>
        
      </div>


    </div>
  )
}

export default BreweryDetails
