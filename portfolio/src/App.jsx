import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Homepage from './components/Homepage'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Service from './components/Service'
import Tracking from './components/Tracking';
import Contact from './components/Contact';


function App() {
  return (
    <>
    <Header/>
    <Router>
      <Routes>
<Route exact path= '/' element={<Homepage/>}/>
<Route exact path= '/service' element={<Service/>}/>
<Route exact path= '/tracking' element={<Tracking/>}/>
<Route exact path= '/contact' element={<Contact/>}/>
      </Routes>
      </Router>

    
    <Footer/>

    
    </>
  )
}

export default App