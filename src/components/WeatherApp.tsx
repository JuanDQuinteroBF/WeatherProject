import React, { useState, useCallback, useEffect } from 'react'
import WeatherForm from './WeatherForm';
import WeatherMainInfo from './WeatherMainInfo';
import styles from '../styles/weatherApp.module.css'
export const BASE_URL = `${import.meta.env.VITE_APP_URL}`


interface ImportMeta {
  VITE_APP_URL?: string;
  VITE_APP_KEY?: string;
}
interface WeatherData {
  current: {
    temp_c: number
  }
  location: {
    name: string
  }
}

interface City {
  city: 'london' | string
}

const WeatherApp = () => {

    const [weather, setWeather] = useState<WeatherData>();
    const city: City = { city: 'london' }; 


    useEffect(()=> {
      document.title = `Weather | ${weather?.location.name ?? ""}`
    }, [weather])
    
  const loadInfo = async ( city: string ):Promise<void | WeatherData>  => {
      try {
        const res = await fetch(`${BASE_URL}&key=${import.meta.env.VITE_APP_KEY}&q=${city}`);        
        if(res.ok){ 
          setWeather(await res.json());
          console.log(data);
          return data;
        } else {
          console.log(res.status);
        }
         
      } catch (error) {
        console.log('error');
        
      }
    };

    useEffect(() => {
      loadInfo()
    }, []);
    
    const handleChangeCity = (city: string | undefined) => {
      setWeather(null);
      loadInfo(city);
    }
    

  return (
    <>
      <div className={styles.weatherContainer}>
        <WeatherForm onChangeCity={handleChangeCity}/>
        <WeatherMainInfo weather={weather}/>
      </div>
    </>
  )
}

export default WeatherApp