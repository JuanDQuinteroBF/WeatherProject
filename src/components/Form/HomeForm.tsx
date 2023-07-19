import { Link, useNavigate } from "react-router-dom";
import styles from "../../styles/home.module.css";
import { useEffect, useRef, useState } from "react";


const HomeForm = () => {
  const focusInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [city, setCity] = useState("london");

  useEffect(() => {
    focusInputRef.current?.focus();    
  }, []);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget?.value;
    setCity(value);
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();    
    navigate(`/weather/${city}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.homeForm}>
        <input
          onChange={handleChange}
          ref={focusInputRef}
          type="text"
          name=""
          placeholder="Typing place"
        />
        <div className={styles.buttonSearch}>
          <Link to={`/weather/${city}`}>Search</Link>
        </div>
      </form>
    </>
  );
};

export default HomeForm;
