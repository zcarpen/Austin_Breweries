import {useEffect, useState, Fragment} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import axios from 'axios';

import './App.scss'
import { Brewery } from './types/brewery';
import BreweriesList from './components/BreweriesList/BreweriesList';
import BreweryDetails from './components/BreweryDetails/BreweryDetails';
import Search from './components/Search/Search';
import { formatNewBreweries } from './helperFunctions/helperFunctions';

function App() {
  const [listOfBreweries, setListOfBreweries] = useState<Brewery[]>([])
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState<string[]>(['austin', 'texas'])

  useEffect(() => {
    const fetchBreweries = async() => {
      try {
        const result = await axios.get(`https://api.openbrewerydb.org/breweries?by_city=${search[0]}&by_state=${search[1]}&per_page=50&sort=asc`);
        const newBreweries = formatNewBreweries(result.data)

        setListOfBreweries(newBreweries)
        setIsLoading(false)
      } catch(err) {
        console.log(err)
      }
    }
    fetchBreweries()
  }, [search])

  const handleNewSearch = (search: string) => {
    const [city, state] = search.split(',')
    setSearch([city.toLowerCase(), state.trim().toLowerCase()])
  }

  // useEffect(() => {

  // // const handleDetailLoad = (search: string | undefined) => {
  //   const [city, state] = search?.split(',')
  //   setSearch([city.toLowerCase(), state.trim().toLowerCase()])
  //   // }
    
  // }, [])

  if (isLoading) return <div className="app loading">LOADING...</div>
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={
            <Fragment>
              <Search currentSearch={search} handleNewSearch={handleNewSearch} />
              <BreweriesList listOfBreweries={listOfBreweries} cityState={search}/>
            </Fragment>
          }></Route>
          <Route path="/brewery-details/:id/:cityStateParams" element={<BreweryDetails listOfBreweries={listOfBreweries} cityState={search} setSearch={setSearch}/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
