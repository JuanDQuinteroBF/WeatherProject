import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaBarsStaggered } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store"
import styles from '../styles/nav.module.css'

import { setOpen } from "../features/asideSlice";
import { Button } from "./StyledComponents/Button";

const Navbar = () => {
  const [home, setHome] = useState(true);
  const location = useLocation();
  const dispatch = useDispatch()
  const isOpen = useSelector((state: RootState)=> state.aside.open)

  const title = "Weather";
  document.title = title;
  useEffect(() => {
    if (location.pathname !== "/") {
      setHome(false);
    } else {
      setHome(true);
    }
  }, [location]);

  const handleClick = () => {
    dispatch(setOpen(Boolean(!isOpen)))
  };

  return (
    <>
      <nav className={styles.nav}>
          {isOpen ? 
          <Button  onClick={handleClick}>
            <FaBarsStaggered className={styles.buttonSidebar}/>
          </Button> :
          <Button  onClick={handleClick}>
            <FaBars style={{fontSize: '25px'}}/>
          </Button> }
          
          <div className={styles.navMid}>
            {home ? (
              <div className={styles.buttonsNav}>

                <Link to={"/weather/london"}>Weather</Link>
              </div>
            ) : (
              <div className={styles.buttonsNav}>

                <Link to={"/"}>Home</Link>
              </div>
            )}
          </div>
      </nav>
      
    </>
  );
};

export default Navbar;
