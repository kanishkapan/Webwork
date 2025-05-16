import CompanyLogos from './components/CompanyLogos'
import FullWidthImage from './components/FullWidthImage'
import HeroSection from './components/Herosection'
import Navbar from './components/Navbar'
import React from 'react'
const App = () => {
  return (
    <div>


      <Navbar/>
      <HeroSection/>
      <CompanyLogos/>
      <FullWidthImage/>
    </div>
  )
}

export default App