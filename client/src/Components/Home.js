import React from 'react';
import About from '../Components/About';
import Portfolio from '../Components/Portfolio';
import Services from '../Components/Services' ;
import Contact from '../Components/Contact';
import Avis from '../Components/Avis';
import Footer from './Footer';
function Header() {
 
  return (
    <div id='home'>
      <div className='section-1'>
        <div className='text-header'>
        <span classename='header' >
          RAYHANA Events
       <br/>
           CERTIFIED WEDDING PLANNER
       <br/>
            EST: 2022</span>
        </div>
      </div>
          
        <main>
          <About/>
          <Portfolio/>
          <Services/>
          <Contact/>
          <Avis/>
        </main>
</div>
  )
}



export default Header