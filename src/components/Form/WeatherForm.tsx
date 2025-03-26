import React, { useEffect, useState } from "react";
import { City  } from "../../utils/types";
import styles from "../../styles/weatherForm.module.css";
import { useNavigate } from "react-router-dom";
import { Form } from "../StyledComponents/Form";
import { Input } from "../StyledComponents/Input";

interface DataCity {
  onChangeCity: ({ city }: City) => void;
  weatherName?: string 
}

  const WeatherForm = ({ onChangeCity, weatherName }: DataCity) => {
  const [city, setCity] = useState<string>("");
  const navigate = useNavigate();

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
  useEffect(() => {
    navigate(`/weather/${weatherName as string}`)
  }, [weatherName]);

  return (
    <Form onSubmit={handleSubmit} className="pt-4">
      <Input
        className={styles.inputForm}
        type="text"
        placeholder="Search another location"
        onChange={handleChange}
      />
    </Form>
  );
};

export default WeatherForm;
