import React from 'react'
import './Style/Home.css';
import Carousel from './Componant/Carousel';
import AboutUs from './Componant/AboutUs';
import TestChamber from './Componant/TestChamber';
import SolutionProvider from './Componant/SolutionProvider';
import CustomBuilt from './Componant/CustomBuilt';
import CustomBuilts from './Content/CustomBuilt';
import ContactUs from './Componant/ContactUs';
import AboutUss from './Content/AboutUs'
import TestChambers from './Content/TestChamber';
import SolutionProviderContent from './Content/SolutionProvider';
import Carousels from './Content/Carousel';
import MapContent from '../Our-Partners/Componant/MapContent';
import ContentMapContent from '../Our-Partners/Content/ContentMapContent'
const Home = () => {
  return (
    <div className='Home'>
      <Carousel data={Carousels}/>
      <AboutUs  data={AboutUss}/> 
       <TestChamber  data ={TestChambers}/> 
       <MapContent data={ContentMapContent} />
       <SolutionProvider data={SolutionProviderContent}/>
      <CustomBuilt data ={CustomBuilts} />
      <ContactUs />
    </div>
  )
}

export default Home