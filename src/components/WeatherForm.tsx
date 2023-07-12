import React, { useState } from 'react'

interface DataCity{
    onChangeCity: (city: string | undefined)=>void
}

const WeatherForm = ({onChangeCity}: DataCity) => {

    const [city, setCity] = useState<string>();

    function handleChange(e: React.FormEvent<HTMLInputElement>){
        const value = e.currentTarget.value;
        
        if(value !== ""){
            setCity(value);
        }
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();

        onChangeCity(city);        
    }

    return (
    <form onSubmit={handleSubmit}>
        <input className='p-2 rounded-md text-sm' type='text' placeholder='Buscar ubicacion' onChange={handleChange} />
    </form>
  )
}

export default WeatherForm