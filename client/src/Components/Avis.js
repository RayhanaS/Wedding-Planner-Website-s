import React from 'react'
import CardUI from "./UI/card"

function Avis() { 
return (
    <div id="avis">
        <div>
      <div class="header-avis">
        <h1 id="texte-couleur">Rayhana Events</h1>
              <span id="texte-couleur" >
              <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i> 3 Reviews
              <br/>
              5.0 out of 5.0 </span>
      </div>
      <div className="Card-avis">
     <CardUI  title="Miryam.S Married on 06/26/2021"  
        readmore="Rayhana Events is great! There are so many unpredictable things that happen day-of,
          but Rayhana Events made sure that all of the vendors were doing what they needed to be doing on schedule.
            It was so nice to know that on the day of, I could hand off all of the planning and stress to Rayhana Events and enjoy the day of my wedding. My parents noted afterwards that Rayhana Events kept the show running smoothly behind the scenes, as well. 
            She pulled off a great event! Thank you, Rayhana Events!"/>
      </div>
      <div className="Card-avis">
        <CardUI  title="Zeineb A. · Married on 10/17/2020" 
        readmore=  "Would recommend Rayhana Events made sure we had a flawless and stress-free wedding day. She is amazing at her job and a joy to work with I would definitely recommend her to anyone looking for a day-of coordinator."/>
      </div>
      <div className="Card-avis">
        <CardUI title="Amira H. Married on 09/27/2020" 
        readmore="Rayhana Events was incredibly helpful and responsive from start to finish. 
      My husband and I had to make multiple changes due to COVID and Rayhana Events stepped up to help in anyway possible. 
      Even though our day wasn’t exactly as originally envisioned, the day was still perfect and ran incredibly smoothly ! 
      Definitely recommend her for your wedding!" />
      </div>
        </div>      
</div>
  )
}

export default Avis