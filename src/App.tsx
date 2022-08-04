import {useEffect, useState, Fragment, useCallback} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.scss'
import { Brewery } from './types/brewery';
import BreweriesList from './components/BreweriesList/BreweriesList';
import BreweryDetails from './components/BreweryDetails/BreweryDetails';
import Search from './components/Search/Search';
import { fetchBreweries } from './helperFunctions/helperFunctions';


function App() {
  const [listOfBreweries, setListOfBreweries] = useState<Brewery[]>([])
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState<string[]>(['austin', 'texas'])

  const breweriesFetcher = useCallback(async () => {
    fetchBreweries(search, setListOfBreweries, setIsLoading)
  }, [search])

  useEffect(() => {
    breweriesFetcher()
  }, [search])

  if (isLoading) return <div className="app loading">LOADING...</div> //keeps rest of app from loading and renders a message
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={
            <Fragment>
              <Search currentSearch={search} setSearch={setSearch} />
              <BreweriesList listOfBreweries={listOfBreweries} cityState={search}/>
            </Fragment>
          }/>
          <Route 
            path="/brewery-details/:id/:cityStateParams" 
            element={<BreweryDetails 
              listOfBreweries={listOfBreweries} 
              cityState={search} 
              setSearch={setSearch}
            />}
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
