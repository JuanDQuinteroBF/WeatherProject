
import '@fontsource/roboto/400.css';
import Layout from './layouts/Layout';
import { Route, Routes, useParams } from 'react-router-dom';
import Home from './components/Home';
import WeatherApp from './components/WeatherApp';


const App = () => {


  return (
    <div>
        <Layout>
          <div className='relative flex'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/weather/:weatherName' element={<WeatherApp />} />
            </Routes>
          </div>
        </Layout>
    </div>
  )
}

export default App
