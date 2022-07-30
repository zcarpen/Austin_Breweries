import axios from 'axios';

export const fetchBreweries = async() => {
  try {
    const result = await axios.get('https://api.openbrewerydb.org/breweries?by_city=austin&by_state=texas&per_page=50&sort=asc');
    return result.data
  } catch(err) {
    console.log(err)
  }
}

export const formatCityState = (search: string[]) => {
  const [city, state] = search;
  
  const capitolizedSearch = [city.split('')[0].toUpperCase() + city.slice(1), state.split('')[0].toUpperCase() + state.slice(1)]

  return capitolizedSearch
}

export const formatAddress = (street: string | null, state: string | null, zip: string | null, cityState: string[]) => {
  const city = cityState[0].split('')[0].toUpperCase() + cityState[0].slice(1);
  const formattedZip = zip ? `, ${ zip.trim().slice(0, 5)}` : '';
  state = state ? state : cityState[1].split('')[0].toUpperCase() + cityState[1].slice(1);
  
  return `${street ? `${street.trim()},` : ''} ${city.trim()}, ${state.trim()}${formattedZip}`
}