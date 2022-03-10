import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {getAllUsers,userDelete,userModify} from '../../Redux/action/action'
import {Table} from 'react-bootstrap'
import Modals from '../UI/modals'
function ListUsers() {
    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(getAllUsers())
        
      }, [])
     const listUsers = useSelector(state => state.UserReducer.allUsers.users)
      const deleteUser = (ID) => {
        dispatch(userDelete(ID))
        window.location.reload();
      }
     
  return (
    <div className="m-3">
        
        <Table  striped bordered hover>
            <thead>
                <th>Username</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
            </thead>
            {listUsers?.map((user) => 
            <tbody>
                <tr className="">
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                <div className="m-2 d-flex justify-content-sm-around">
                    <div className="btn" onClick={()=> deleteUser(user._id)}> 
                        <i  class="fa-solid fa-trash-can"></i>
                    </div>
                    <div className="btn">
                        <Modals userId={user._id} user={user} />
                    </div>
               
                </div>
                </td>
            </tr>
            </tbody>
            
             )}
        </Table>
       
    </div>
  )
}

export default ListUsers 