import './App.scss'
import axios from 'axios';
import {useEffect, useState} from 'react'
import BreweriesList from './components/BreweriesList/BreweriesList';
import BreweryDetails from './components/BreweryDetails/BreweryDetails';
import Search from './components/Search/Search';


function App() {
  const [listOfBreweries, setListOfBreweries] = useState([])
  const [search, setSearch] = useState(['austin', 'texas'])

  useEffect(() => {
    const fetchBreweries = async() => {
      try {
        const result = await axios.get(`https://api.openbrewerydb.org/breweries?by_city=${search[0]}&by_state=${search[1]}&per_page=50&sort=asc`);
        setListOfBreweries(result.data)
      } catch(err) {
        console.log(err)
      }
    }
    fetchBreweries()
  }, [])

  return (
    <div className="app">
      <Search search={search}/>
      <div className="brewery-info">
        <BreweriesList />
        <BreweryDetails />
      </div>
    </div>
  )
}

export default App
