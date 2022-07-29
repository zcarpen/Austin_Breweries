import './App.css'
// import styled from 'styled-components';
import { fetchBreweries } from './helperFunctions'
import {useEffect, useState} from 'react'


function App() {
  const [selectedBrewery, setSelectedBrewery] = useState(null)
  const [listOfBreweries, setListOfBreweries] = useState([])

  useEffect(() => {
    debugger;
    const breweries = fetchBreweries();
    console.log(breweries)
  }, [])

  return (
    <h1>App</h1>
  )
}

export default App
