import React, { useState } from 'react'
  import NavigationBar from '../components/navigationBar/NavigationBar'
import HeroSection from '../components/heroSection/HeroSection'
import Footer from '../components/footer/Footer'

import { API } from '../backend'

const Homepage = () => {

  console.log("API is", API)

  // const [show, setShow] = useState(false)
  // const handleClose = () => setShow(false)
  // const handleShow = () => setShow(true) 

    return (
        <>
        <NavigationBar /> 
       <HeroSection />
       <Footer />
       </>
    );
  }
  
  export default Homepage;
  