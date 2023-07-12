import React, { useState } from 'react'

const WeatherForm = () => {

    const [city, setCity] = useState<string>();

    function handleChange(e: React.FormEvent<HTMLInputElement>){
        const value = e.currentTarget.value;
        
        if(value !== ""){
            setCity(value);
        }
    }

    return (
    <form >
        <input type='text' onChange={handleChange} />
    </form>
  )
}

export default WeatherForm