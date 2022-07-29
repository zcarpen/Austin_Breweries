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