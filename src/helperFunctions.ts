import axios from 'axios';

export const fetchBreweries = async() => {
    try {
      const result = await axios.get('https://api.openbrewerydb.org/breweries?by_city=austin&by_state=texas&per_page=50&sort=asc');
      return result.data
    } catch(err) {
      console.log(err)
    }
  }