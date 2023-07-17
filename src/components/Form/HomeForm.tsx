import {  useNavigate } from 'react-router-dom'
import styles from '../../styles/home.module.css'
import { useEffect, useRef } from 'react';

interface WeatherForm {
    place?: string,
}

const HomeForm = ({place}: WeatherForm) => {
   
    const navigate = useNavigate();
    const focusInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        focusInputRef.current?.focus();
      },[])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        navigate("/weather") 
    }

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const value = e.currentTarget?.value;
        place = value;
        console.log(place);
        
    }

    console.log(place);
    
  return (
    <>
        <form onSubmit={handleSubmit} className={styles.homeForm}>
            <input onChange={handleChange} ref={focusInputRef} type="text" name="" value={place} placeholder='Typing place'/>
            <div>
                <button className={styles.buttonForm} type='submit'>Search</button>
            </div>
        </form>
    </>
  )
}

export default HomeForm