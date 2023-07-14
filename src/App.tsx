import { useState } from 'react'
import WeatherApp from './components/WeatherApp'
import '@fontsource/roboto/400.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';


function App() {

  return (
    <div className='w-screen h-screen'>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/weather' element={<WeatherApp />} />
    </Routes>
    </div>
  )
}

export default App
