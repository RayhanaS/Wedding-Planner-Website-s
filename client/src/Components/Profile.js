import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import ListProfil from './admin/listUsers'
import {getAllUsers} from '../Redux/action/action'
function Profile() {
  
    const currentUser = useSelector (state => state.UserReducer.currentUser)
    const user = JSON.parse(localStorage.getItem('current_user'))

    
    
    if(user?.role == 'admin'){
      return (
        <div>
            <ListProfil />
        </div>
      )
    }else{
      return (
        <div>
           this is a user
        </div>
      )
    }
 
}

export default Profile