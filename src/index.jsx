import React from 'react'
import Hero from './pages/Landing/Hero'
import Details from './pages/Landing/Details'
import Highlights from './pages/Landing/Highlights'
import Testimonial from './pages/Landing/Testimonial'
import Listings from './pages/Landing/Listings'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Details/>
        <Highlights/>
        <Listings/>
        <Testimonial/>
        
    </div>
  )
}

export default Home