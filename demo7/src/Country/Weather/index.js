import React, { useEffect, useState } from 'react'

const Weather = ({ captial }) => {

  const [data, setData] = useState({})

  const fetchWeather = async query => fetch(`http://api.weatherstack.com/current?access_key=ca7d1df9206841d320cea423ce6c0536&query=${encodeURIComponent(query)}`)
    .then(response => response.json())

  useEffect(() => {
    fetchWeather(captial)
      .then(response => setData(response.current))
      .then(() => console.log(data))
  }, [])

  return <>
    <div>
      <p>temperature:{data.temperature}</p>
      <img alt="" src={data.weather_icons} />
      <p>wind:{data.wind_speed} mph deriction SSW</p>
    </div>
  </>

}

export default Weather;