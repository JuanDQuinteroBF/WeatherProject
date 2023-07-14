import {useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

  const [home, setHome] = useState(true);
  const location = useLocation();



  useEffect(() => {
    if(location.pathname !== '/'){
      setHome(false);
    }else{

      setHome(true);
    }
  }, [location])
  console.log(location);
  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Widget Weather
          </Typography>
          {home ? <Link to={"/weather"}>Weather</Link> : <Link to={"/"}>Home</Link>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar