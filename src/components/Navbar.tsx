import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [home, setHome] = useState(true);
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

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
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="h-full">
        <div className="absolute flex w-full justify-between items-center px-10 bg-blue-500 h-20 text-white font-normal">
          <button  onClick={handleClick}>
            Sidebar
          </button>
          <div>
            {home ? (
              <Link to={"/weather"}>Weather</Link>
            ) : (
              <Link to={"/"}>Home</Link>
            )}

          </div>
        </div>
        {isOpen && <Sidebar />}

      </nav>

    </>
  );
};

export default Navbar;
