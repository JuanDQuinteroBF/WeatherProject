import { useState, useEffect } from "react";
import WeatherForm from "./Form/WeatherForm";
import WeatherMainInfo from "./WeatherMainInfo";
import styles from "../styles/weatherApp.module.css";
import Loading from "./Loading";
export const BASE_URL = `${import.meta.env.VITE_APP_URL}`;
export const APP_KEY = `${import.meta.env.VITE_APP_KEY}`;
import { WeatherData, City } from "../utils/types";

const WeatherApp = () => {
  const [weather, setWeather] = useState<WeatherData | undefined>();
  const [placeNotFound, setPlaceNotFound] = useState<boolean>(false);

  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ""}`;
  }, [weather]);

  const loadInfo = async (city = "london"): Promise<void> => {
    try {
      const res = await fetch(`${BASE_URL}&key=${APP_KEY}&q=${city}`);
      if (res.ok) {
        setWeather(await res.json());
        setPlaceNotFound(false);
      } else {
        console.log(res.status);
        setPlaceNotFound(true);
      }
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    void loadInfo();
  }, []);

  const handleChangeCity = ({ city }: City) => {
    void loadInfo(city);
  };

  return (
    <>
      <div className={styles.weatherContainer}>
        <WeatherForm onChangeCity={handleChangeCity} />
        {placeNotFound ? (
          <h2 className="p-10">No encontrado</h2>
        ) : weather ? (
          <WeatherMainInfo weather={weather} />
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default WeatherApp;
