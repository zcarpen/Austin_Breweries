import './App.scss'
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Brewery } from './types/brewery';
import BreweriesList from './components/BreweriesList/BreweriesList';
import BreweryDetails from './components/BreweryDetails/BreweryDetails';
import Search from './components/Search/Search';

function App() {
  const [listOfBreweries, setListOfBreweries] = useState<Brewery[]>([])
  const [search, setSearch] = useState<[string, string]>(['austin', 'texas'])

  useEffect(() => {
    const fetchBreweries = async() => {
      try {
        const result = await axios.get(`https://api.openbrewerydb.org/breweries?by_city=${search[0]}&by_state=${search[1]}&per_page=50&sort=asc`);

        const newBreweries = result.data.reduce((breweries: Brewery[], brewery) => {
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
        setListOfBreweries(newBreweries)
      } catch(err) {
        console.log(err)
      }
    }
    fetchBreweries()
  }, [search])

  const handleNewSearch = (e: React.FormEvent<HTMLInputElement>, search: string) => {
    e.preventDefault();
    let [city, state] = search.split(',')
    console.log(city, state)
    setSearch([city.toLowerCase(), state.trim().toLowerCase()])
  }

  return (
    <div className="app">
      <Search currentSearch={search} handleNewSearch={handleNewSearch}/>
      <div className="brewery-info">
        <BreweriesList listOfBreweries={listOfBreweries} cityState={search}/>
      </div>
    </div>
  )
}

export default App
