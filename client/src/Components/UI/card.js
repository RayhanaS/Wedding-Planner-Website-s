import React from 'react'
import {Card} from "react-bootstrap"

import ReadMore from '../readMore'
function CardUI({title,readmore}) {
  return ( 
    <div>
        <Card  >
      <h5>{title}</h5>
      <div className="star"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i> 5.0  </div>
      <br/> 
      <span>
      <ReadMore>
        {readmore}
      </ReadMore>
      </span>
      </Card>
    </div>
  )
}

export default CardUI