import React from 'react'
import Image3 from '../Image/image3.jpg';
import Image4 from '../Image/image4.jpg';
import Image5 from '../Image/image5.jpg';
import Image6 from '../Image/image6.jpg';
import Image7 from '../Image/image7.jpg';
import Image8 from '../Image/image8.jpg';
import Image9 from '../Image/image9.jpg';
function Portfolio() {
  return (
    <div className="image-mosaic">

    <div id="portfolio" >
            <img className="CARD" src={Image3}/>
            <img className="CARD" src={Image4}/>
            <img className="CARD" src={Image5}/>
            <img  className="CARD"src={Image6}/>
            <img className="CARD" src={Image7}/>
            <img className="CARD" src={Image8}/>
            <img className="CARD" src={Image9}/>
        </div>
    </div>
  )
}

export default Portfolio