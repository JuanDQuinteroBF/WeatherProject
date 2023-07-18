import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import { FaBars } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store"
import styles from '../styles/nav.module.css'

import { setOpen } from "../features/asideSlice";

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
          {isOpen ? <button  onClick={handleClick}>
            <FaBars className={styles.buttonSidebar}/>
          </button> :
          <button  onClick={handleClick}>
            <FaBars style={{fontSize: '25px'}}/>
          </button> }
          
          <div>
            {home ? (
              <div className="pl-8 border-l">

                <Link to={"/weather/london"}>Weather</Link>
              </div>
            ) : (
              <div className="pl-8 border-l">

                <Link to={"/"}>Home</Link>
              </div>
            )}
          </div>
      </nav>
      
    </>
  );
};

export default Navbar;
