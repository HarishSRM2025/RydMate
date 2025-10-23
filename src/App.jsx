import { useState } from 'react'
import Navbar1 from './components/Homepagecomponent/Navbar1'
import Navbar2 from './components/Homepagecomponent/Navbar2'
import Carousel from './components/Homepagecomponent/Carousel'
import FeaturesSection from './components/Homepagecomponent/FeaturesSection'
import WhoWeAre from './components/Homepagecomponent/Whoweare'
import Carfleet1 from './components/Homepagecomponent/Carfleet1'
// import OurServices from './components/Homepagecomponent/OurServices'
import DealsOnBooking from './components/Homepagecomponent/DealsOnBooking'
import Testimonials from './components/Homepagecomponent/Testimonials'
import Footer from './components/Homepagecomponent/Footer'
// import Blog from './components/Homepagecomponent/Blog'
import BlogSection from './components/Homepagecomponent/BlogSection'
import Service from './components/Homepagecomponent/Service'

function App() {
 <style>
  .body{
    
  }
 </style>

  return (
    <>
     <Navbar1 />
     <Navbar2 />
     <Carousel />
     <FeaturesSection />
     <WhoWeAre />
     <Carfleet1 /><br /><br />
     <Service />
     <DealsOnBooking /><br /><br />
     <Testimonials /><br />
     <BlogSection />
     <Footer />
     
    
    </>
  )
}

export default App
