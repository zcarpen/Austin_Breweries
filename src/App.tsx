import {useEffect, useState, Fragment, useCallback} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import axios from 'axios';

import './App.scss'
import { Brewery } from './types/brewery';
import BreweriesList from './components/BreweriesList/BreweriesList';
import BreweryDetails from './components/BreweryDetails/BreweryDetails';
import Search from './components/Search/Search';
import { formatNewBreweries } from './helperFunctions/helperFunctions';

function App() {
  console.log('First enters into app.tsx')
  debugger;
  const [listOfBreweries, setListOfBreweries] = useState<Brewery[]>([])
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState<string[]>(['austin', 'texas'])

  useEffect(() => {
    console.log('useEffect inside app.tsx is called')
    debugger;
    const fetchBreweries = async() => {
      console.log('fetchbreweries inside useEffect inside app.tsx is called')
      debugger;
      try {
        console.log('inside try statement inside of useEffect inside App.tsx')
        const result = await axios.get(`https://api.openbrewerydb.org/breweries?by_city=${search[0]}&by_state=${search[1]}&per_page=50&sort=asc`);
        console.log('results are returned after axios call')
        const newBreweries = formatNewBreweries(result.data)
        
        setListOfBreweries(newBreweries)
        setIsLoading(false)
        console.log('sets listOfBreweries and isLoading')
        debugger;
      } catch(err) {
        // if time permits, display an error
        setIsLoading(false)
        console.log('error in fetchBreweries')
        debugger;
      }
    }
    console.log('fetchBreweries is called')
    fetchBreweries()
  }, [search])
  
  console.log('first time getting past use effect')
  debugger;
  
  const handleNewSearch = useCallback((search: string) => {
    const [city, state] = search.split(',')
    setSearch([city.toLowerCase(), state.trim().toLowerCase()])
    console.log('setSearch is called')
    debugger;
  }, []);

  if (isLoading) return <div className="app loading">{console.log('loading')}LOADING...</div> //keeps rest of app from loading and renders a message
  console.log('rendering App component')
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
