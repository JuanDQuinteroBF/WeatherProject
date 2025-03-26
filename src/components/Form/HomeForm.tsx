import { Link, useNavigate } from "react-router-dom";
import styles from "../../styles/home.module.css";
import { useEffect, useRef, useState } from "react";
import { Form, } from "../StyledComponents/Form";
import { Input } from "../StyledComponents/Input";

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
      <Form onSubmit={handleSubmit} className={styles.homeForm}>
        <Input
          onChange={handleChange}
          ref={focusInputRef}
          type="text"
          placeholder="Typing place"
        />
        <div>
          <Link className={styles.buttonSearch} to={`/weather/${city}`}>Search</Link>
        </div>
      </Form>
    </>
  );
};

export default HomeForm;
