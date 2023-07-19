import { useState, useEffect } from "react";
import WeatherForm from "./Form/WeatherForm";
import WeatherMainInfo from "./WeatherMainInfo";
import styles from "../styles/weatherApp.module.css";
import Loading from "./Loading";
export const BASE_URL = `${import.meta.env.VITE_APP_URL}`;
export const APP_KEY = `${import.meta.env.VITE_APP_KEY}`;
import { WeatherData, City } from "../utils/types";
import { useNavigate, useParams } from "react-router-dom";

const WeatherApp = () => {
  const [weather, setWeather] = useState<WeatherData>();
  const [placeNotFound, setPlaceNotFound] = useState(false);
  const {weatherName} = useParams();
  const navigate = useNavigate()

  const username = "eljoviano";

  async function fetchData(city = weatherName) {
    try {
      console.log(city);
      
      const response = await fetch(`${BASE_URL}&key=${APP_KEY}&q=${city as string}`);
      if (response.ok) {
        setPlaceNotFound(false);
        const res = (await response.json()) as WeatherData;
        setWeather(res);
        console.log(res);
        
      } else {
        setPlaceNotFound(true);
      }
    } catch (error) {
      console.log("Error", error);
    }
  }

  useEffect(() => {
    fetchData().finally(() => console.log(""));
    //fetchDataa().finally(() => console.log(""));
  }, []);

  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ""}`;
  }, [weather]);

  const handleChangeCity = ({ city }: City) => {
    
    fetchData(city).finally(() => console.log("Finally"));
  };
  if(placeNotFound){
    navigate('/weather/NotFound')    
  }

  const isCityFound = () => {
    
    if (placeNotFound) return <h2 className="p-10 text-2xl text-black">No encontrado</h2>;
    else if (weather) return <WeatherMainInfo weather={weather} />;
    else return <Loading />;
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.weatherContainer}>
          <WeatherForm onChangeCity={handleChangeCity} weatherName={weather?.location.name}/>
          {isCityFound()}
        </div>
      </div>
    </>
  );
};

export default WeatherApp;