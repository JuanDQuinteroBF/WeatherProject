import {  Link, useNavigate, useParams } from 'react-router-dom'
import styles from '../../styles/home.module.css'
import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { selectCity, setCity } from '../../features/slice';



const HomeForm = () => {
   
    const dispatch = useDispatch();
    const city = useSelector(selectCity)
    const focusInputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
        focusInputRef.current?.focus();        
      },[])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        navigate(`/weather/${city}`)
    }

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const value = e.currentTarget?.value;
        dispatch(setCity(String(value)))
    }

    
  return (
    <>
        <form onSubmit={handleSubmit} className={styles.homeForm}>
            <input onChange={handleChange} ref={focusInputRef} type="text" name=""  placeholder='Typing place'/>
            <div className={styles.buttonSearch}>
                <Link to={`/weather/${city}`}>Search</Link>
            </div>
        </form>
    </>
  )
}

export default HomeForm