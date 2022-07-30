import axios from 'axios';

export const formatCityState = (search: string[]) => {
  const [city, state] = search;
  
  const capitolizedSearch = [city.split('')[0].toUpperCase() + city.slice(1), state.split('')[0].toUpperCase() + state.slice(1)]

  return capitolizedSearch
}

const capitalizeFirstLetter = (word: string) => word.split('')[0].toUpperCase() + word.slice(1);

export const formatAddress = (street: string | null, state: string | null, zip: string | null, cityState: string[]) => {
  const city = capitalizeFirstLetter(cityState[0]);
  const formattedZip = zip ? `, ${ zip.trim().slice(0, 5)}` : '';

  state = state || capitalizeFirstLetter(cityState[1])
  
  return `${street ? `${street.trim()},` : ''} ${city.trim()}, ${state.trim()}${formattedZip}`
}