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

export const formatPhone = (phone: string) => {
  if (!phone) return ''

  let sanitizedPhone = phone.replace(/\D+/g, '')

  if (sanitizedPhone.length > 10) {
    sanitizedPhone = sanitizedPhone.slice(1)
  }

  return `(${sanitizedPhone.slice(0,3)}) ${sanitizedPhone.slice(3,6)} - ${sanitizedPhone.slice(6)}`
}