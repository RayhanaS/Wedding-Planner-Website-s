import {SIGNIN,SIGNUP,LOGOUT,CURRENT,GETALLUSERS} from '../Constante/actionTypes'; 
import axios from 'axios' ;


/*SIGNIN*/

export const signIn = (userData,History) => async (dispatch) => {
    try {
        const user = await axios.post ('http://localhost:5000/api/signin',userData)
        dispatch ({
             type:SIGNIN ,
             payload: user.data
        })
        dispatch (currentUser (user.data.token,History))
    } catch (error) {
        console.log(error);
    }
}

export const signUp = (userData,History) => async (dispatch) => {
    try {
        const user = await axios.post ('http://localhost:5000/api/signup',userData)
        dispatch ({
             type:SIGNUP ,
             payload: user.data
        })
        dispatch (currentUser (user.data.token,History))
    } catch (error) {
        console.log(error);
    }
}
/*current*/
export const currentUser = (token,History) => async (dispatch) => {
     const config = {
        headers: {
            authorization : token 
        }
    }
    try {
        
        const user = await axios.get('http://localhost:5000/api/current',config)
        
        dispatch ({
            type : CURRENT,
            payload: user.data
        })
        localStorage.setItem('current_user', JSON.stringify (user.data));  //convertir format json en format string//
        if(user.data.role == 'admin'){
            History.push('/Profile')
        }else{
            History.push('/')
        } 
        
	  window.location.reload();   
    } catch (error) {
        console.log(error);
    }
}
//GETALLUSERS
export const getAllUsers = (token) => async (dispatch) => {
    const config = {
        headers: {
            authorization : token 
        }
    }
    try{
        const users = await axios.get('http://localhost:5000/api/getAllUsers',config)
        dispatch ({
            type : GETALLUSERS,
            payload: users.data
        })
    }catch (error) {
        console.log(error);
    }
}
export const userDelete = (ID) => async (dispatch) => {
    try{
        const users = await axios.post(`http://localhost:5000/api/deleteUser/${ID}`)
       
    }catch (error) {
        console.log(error);
    } 
}

export const userModify = (ID,userData) => async (dispatch) => {
    try{
        const users = await axios.post(`http://localhost:5000/api/modifyUser/${ID}`,userData)
        
    }catch (error) {
        console.log(error);
    }
}

export const getAllReservations = () => async (dispatch) => {
    try{
        const reservations = await axios.get(`http://localhost:5000/api/getAll`)
        dispatch ({
            type : 'GETALLRESERVATION',
            payload: reservations.data
        })
    }catch (error) {
        console.log(error);
    }
}

export const eventAdd = (userData,History) => async (dispatch) => {
    try {
        const reservation = await axios.post('http://localhost:5000/api/addReservation',userData)
        dispatch ({
             type:'ADDRESERVATION' ,
             payload: reservation.data
        })
        
    } catch (error) {
        console.log(error); 
    }
} 