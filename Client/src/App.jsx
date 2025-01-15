import Home from './Pages/Home/Home'
import Catalogue from './Pages/Catalogue/Catalogue'
import Contact from './Pages/Catalogue/Catalogue'
import Shop from './Pages/Shop/Shop'
import Arrivals from './Pages/New Arrivals/Arrivals'
import About from './Pages/About/About'
import Details from './Pages/Details/details'



import './App.css'
import Layouts from './Layouts/Layouts'
import { Route, Routes } from 'react-router-dom'

function App() {


  return (
    <>
<Routes>
  <Route path="/" element={<Layouts/>}>
  <Route  index element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path='/shop' element={<Shop/>}/>
  <Route path='/catalogue' element={<Catalogue/>}/>
  <Route path='/newarrivals' element={<Arrivals/>}/>
  <Route  path='/contact' element={<Contact/>}/>
  <Route path='/:id' element={<Details/>}/>


  

  </Route>
</Routes>
    </>
  )
}

export default App
