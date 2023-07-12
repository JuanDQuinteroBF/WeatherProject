import React, { useState } from 'react'
import WeatherForm from './WeatherForm';

const WeatherApp = () => {

    const [weather, setWeather] = useState(null);
    

  return (
    <WeatherForm />
  )
}

export default WeatherApp