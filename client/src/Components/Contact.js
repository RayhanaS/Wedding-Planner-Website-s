import React from 'react'
import {Form,Col,Row,Button,FloatingLabel} from 'react-bootstrap';
import  {useState} from "react"
import {useDispatch} from 'react-redux'
import {eventAdd} from '../Redux/action/action'
function Contact() {
    const dispatch = useDispatch()
      let userIsConnected = localStorage.getItem('current_user');

    const [nameEvent,setNameEvent] = useState('')
    const [brideName,setBrideName] = useState('')
    const [fianceName,setFianceName] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const [date,setDate] = useState('')
    const [otherDetails,setOtherDetails] = useState('')

    const addEvent = () => {
        dispatch(eventAdd({nameEvent,brideName,fianceName,email,phone,date,otherDetails}))
        window.location.reload ();
    }
  return (
    <div id="contact">
      {userIsConnected ?
      <div class="test">
      <Button className="lets" variant="primary">
      Let's chat      </Button>
      <div className="tchat">
    <span>    Email me at:
        Rayhanaeyevents@gmail.com
     or fill out the form below to schedule a consultation</span>
     </div> 
  <div class="form"> 
      
      <Form>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
           Event's Name
          </Form.Label>
          <Col sm="10">
          <Form.Control type="text" placeholder="enter Name of event" onChange={e => setNameEvent(e.target.value)} />
          </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
           Bride's Name
          </Form.Label>
          <Col sm="10">
          <Form.Control type="text" placeholder="enter your Name" onChange={e => setBrideName(e.target.value)}/>
          </Col>
      </Form.Group>
  
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
           Fiance name
          </Form.Label>
          <Col sm="10">
          <Form.Control type="text" placeholder="enter your Fiance name" onChange={e => setFianceName(e.target.value)}/>
          </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
           Email
          </Form.Label>
          <Col sm="10">
          <Form.Control type="email" placeholder="Enter your Email adress" onChange={e => setEmail(e.target.value)}/>
          </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
           Phone Number
          </Form.Label>
          <Col sm="10">
          <Form.Control type="mobile" placeholder="Enter your Phone No." onChange={e => setPhone(e.target.value)}/>
          </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
           Date of Event
          </Form.Label>
          <Col sm="10">
          <Form.Control type="date" placeholder="Enter the date of the event" onChange={e => setDate(e.target.value)} />
          </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3"  controlId="formPlaintextPassword">
          <Form.Label column sm="2">
           Other Details
          </Form.Label>
          <Col sm="10">
          <FloatingLabel controlId="floatingTextarea" label="Tell me more" className="mb-3" onChange={e => setOtherDetails(e.target.value)}>
            <Form.Control as="textarea" placeholder="Tell me more" />
        </FloatingLabel>
          </Col>
      </Form.Group>
      
      <Button variant="primary" onClick={()=> addEvent()} >Submit </Button>

      </Form>
      </div>
      </div>
      :
       <span className="connected">you must have an account to make a reservation</span>
       }
      
      
    </div>
  )
}
  

export default Contact