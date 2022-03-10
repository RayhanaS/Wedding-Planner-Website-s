import React from 'react'
import photo from "../Image/image1.jpg";
import {Card} from 'react-bootstrap';
 
function about() {
  return (
    
    <div id="about" >
      <div className="sectionabout">
        <img className="pic"  src= {photo} />
        <br/>
        <Card className="cardabout">
          <span className="about">
              <h4 className="event"> About RAYHANA Events </h4>
            <hr/>
              At Rayhana Events, we've had years of experience working with vendors and venues in the Charlottesville area.  We are known for being a calm and confident presence on your wedding day.

              Our team provides month-of coordination services to clients. Our number one priority is to ensure your day goes as smooth and stress-free as possible by figuring out the logistics of your day, creating and implementing a detailed itinerary, reaching out to your vendors well in advance, and taking care of the behind the scene details that often pop up last minute.  

             Just leave directing the ceremony and overseeing the reception up to your professional wedding coordinator and her assistant.  We treat every wedding as if it were our own and strive to ensure that everyone, especially the bride and groom, has an exceptional, unforgettable time.

              We look forward to hearing from you to begin planning your incredible day!  </span> </Card>
              </div>
          
    </div>
  )
}

export default about