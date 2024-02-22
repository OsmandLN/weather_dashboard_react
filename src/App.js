import logo from './logo.svg';
import './App.css';
import WeatherCardBody from './components/WeatherCard/WeatherCardBody';
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [CurrentWeather, setCurrentWeather] = useState({
    // cityName: "",
    // temperature: "",
    // weatherStatus: "",
    // humidity: 0
  })

  useEffect(() => {
    fetchCurrentWeather()
  }, [])

  const URL = `https://opendata.cwa.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=CWB-61431FA0-9546-4DA7-A3FF-68D879357C6A&limit=5&stationId=467410`

  function fetchCurrentWeather() {
    axios.get(URL)
      .then((response) => {
        // console.log(response.data.records.location[0])

        const weatherData = response.data.records.location[0]
        // console.log(typeof weatherData)
        // console.log(typeof weatherData.weatherElement)
        // console.log(weatherData.locationName)
        // console.log(weatherData.locationName)
        // console.log(weatherData.weatherElement[4])
        setCurrentWeather({
          cityName: weatherData.locationName,
          temperature: weatherData.weatherElement[3].elementValue,
          weatherStatus: weatherData.weatherElement[20].elementValue,
          humidity: Number(weatherData.weatherElement[4].elementValue) * 100
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <div className="Card-container">
        <WeatherCardBody CurrentWeather={CurrentWeather} />
      </div>
    </div>
  );
}

export default App;
