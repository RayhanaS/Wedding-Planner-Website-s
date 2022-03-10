
import React,{useState} from 'react'
import {Modal,Button,Form} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {userModify} from '../../Redux/action/action'
function MyVerticallyCenteredModal(props) {
    const dispatch = useDispatch()
   
     const [username,setUsername] = useState(props.user.username)
     const [email,setEmail] = useState(props.user.email)
     const [role,setRole] = useState(props.user.role)
     const modifyUser = () => {
       
      dispatch(userModify(props.userId,{username,email,role}))
      props.onHide()
      window.location.reload();
   } 
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" defaultValue={props.user.username} placeholder="Enter username"  onChange={e => setUsername(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" defaultValue={props.user.email} placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicRole">
                <Form.Label>Role</Form.Label>
                <Form.Select aria-label="Default select example"  onChange={e => setRole(e.target.value)}> 
                    <option>Select Role</option>
                        {props.user.role == 'admin' ? <option selected value="admin">Admin</option> : <option value="admin">Admin</option> }
                        {props.user.role == 'user' ? <option selected value="user">user</option> : <option value="user">user</option> }
                </Form.Select>
            </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button  onClick={()=> modifyUser()}>Save</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function Modals({userId,user}) {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
      <div onClick={() => setModalShow(true)}>
        <i class="fa-solid fa-gear"></i> 
      </div>
        
    
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          userId={userId}
          user={user}
        />
      </>
    );
  }
  
  export default Modals;