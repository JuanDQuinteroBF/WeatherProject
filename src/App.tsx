
import '@fontsource/roboto/400.css';
import Layout from './layouts/Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import WeatherApp from './components/Weather/WeatherApp';


const App = () => {

  // const Palindrome = (word: string) => {
  //   let isPalindrome = false;
  //   const newArray = word.split('').join()
  //   console.log(newArray);
  //   const otroArray = word.split('').reverse().join()
  //   console.log(otroArray);
    
  //   if(otroArray === newArray){
  //       isPalindrome = true;
  //   }
  //   return isPalindrome
  // }

  // console.log(Palindrome('adan'));
  

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
