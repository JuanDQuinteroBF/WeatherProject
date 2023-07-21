import styles from "../../styles/weatherInfo.module.css";

import { WeatherData } from "../../utils/types";

interface WidgetData {
  weather: WeatherData;
}

const WeatherMainInfo = ({ weather }: WidgetData) => {
  return (
    <>
      <div className={styles.container}>
        <h2>{weather.location.name}</h2>
        <h3 className="text-lg">{weather?.location.country}</h3>
        <div className={styles.weatherInfo}>
          <img src={`http:${weather?.current.condition.icon}`} alt="" />
          <div className={styles.temp}>
            <span>{weather?.current.condition.text}</span>
            <b>{weather?.current.temp_c}°</b>
          </div>
        </div>
        <div className="p-2 rounded-xl">
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d159594.3949215045!2d${weather?.location.lon}!3d${weather?.location.lat}8!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1689273347635!5m2!1ses!2sco`}
            width="500"
            height="300"
            style={{ border: 50 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default WeatherMainInfo;
