import styles from '../styles/weatherInfo.module.css'

import { WeatherData } from '../utils/types';

interface Data {
  data: WeatherData;
}

const WeatherMainInfo = ({ weather }) => {
  return (
    <>
        <div className={styles.container}>
            <h2>{weather?.location.name}</h2>
            <h3 className="text-lg">{weather?.location.country}</h3>
            <div className='flex flex-row gap-12 items-center'>
                <img src={`http:${weather?.current.condition.icon}`} alt="" />
                <div className='flex items-center flex-col'>
                  <span>{weather?.current.condition.text}</span>
                  <h2> <b>{weather?.current.temp_c}°</b></h2>
                </div>

            </div>
            <div className='p-2'>
              <iframe title="mapa" src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31730.807356561105!2d${weather?.location.lon}!3d${weather?.location.lat}65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1689194408226!5m2!1ses!2sco`} width="500" height="300" loading="lazy" ></iframe>
            </div>
        </div>
    </>
  )
}

export default WeatherMainInfo;