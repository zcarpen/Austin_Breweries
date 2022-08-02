import axios from 'axios';
import { Brewery } from '../types/brewery';

export const capitalizeFirstLetter = (word: string) => word.split('')[0].toUpperCase() + word.slice(1).toLowerCase();

// takes an array of words [city, state] and returns [City, State]
export const formatCityState = (search: string[]) => {
  const [city, state] = search;
  
  const capitolizedSearch = [capitalizeFirstLetter(city), capitalizeFirstLetter(state)]

  return capitolizedSearch
}

export const formatAddress = (street: string | null, state: string | null, zip: string | null, cityState: string[]) => {
  const city = capitalizeFirstLetter(cityState[0]);
  const formattedZip = zip ? `, ${ zip.trim().slice(0, 5)}` : '';

  state = state || capitalizeFirstLetter(cityState[1])
  
  return `${street ? `${street.trim()}, ` : ''}${city.trim()}, ${state.trim()}${formattedZip}`
}

export const formatPhone = (phone: string | null) => {
  if (!phone) return ''

  let sanitizedPhone = phone.replace(/\D+/g, '') //sanitizes phone number of special characters besides digits

  if (sanitizedPhone.length > 10) {
    sanitizedPhone = sanitizedPhone.slice(1)
  }

  return `(${sanitizedPhone.slice(0,3)}) ${sanitizedPhone.slice(3,6)}-${sanitizedPhone.slice(6)}`
}

//this function is used to reformat the list of breweries to only contain the information needed to run the application
export const formatNewBreweries = (breweries: Brewery[]) => {
  return breweries.reduce((breweries: Brewery[], brewery: Brewery) => {
    const {
      street,
      postal_code,
      state,
      country,
      phone,
      name,
      website_url,
      latitude,
      longitude,
      brewery_type,
      id,
    } = brewery
    
    return [...breweries, {
      street, 
      postal_code, 
      state, 
      country, 
      phone, 
      name, 
      website_url, 
      latitude, 
      longitude, 
      brewery_type, 
      id
    }]
  }, [])
}