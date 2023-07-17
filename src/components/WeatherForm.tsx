import React, { useRef, useState } from "react";
import { City } from "../utils/types";
import styles from "../styles/weatherForm.module.css";

interface DataCity {
  onChangeCity: ({ city }: City) => void;
}

const WeatherForm = ({ onChangeCity }: DataCity) => {
  const [city, setCity] = useState<string>("");

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    const value = e.currentTarget?.value;

    if (value !== "") {
      setCity(value);
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (city === "") {
      const defaultCity: City = {
        city: "london",
      };
      onChangeCity(defaultCity);
    } else {
      const cityObject: City = { city: city };
      onChangeCity(cityObject);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="pt-4">
      <input
        className={styles.inputForm}
        type="text"
        placeholder="Search location"
        onChange={handleChange}
      />
    </form>
  );
};

export default WeatherForm;
