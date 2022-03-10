import {SIGNIN,SIGNUP,LOGOUT, CURRENT,GETALLUSERS} from '../Constante/actionTypes'; 

const initialState = {
    user : {} ,
    currentUser : {} ,
    allUsers:[],
    reservations:[]
}

const UserReducer = (state= initialState , action) => {
    switch (action.type) {
        case SIGNIN : return {
            ...state , 
            user : action.payload
        }

        case CURRENT : return {
            ...state , 
            currentUser : action.payload
        }
        case GETALLUSERS : return {
            ...state , 
            allUsers : action.payload
        }
        case 'GETALLRESERVATION' : return {
            ...state , 
            reservations : action.payload.reservations
        }
        case 'ADDRESERVATION' : return {
            ...state , 
            reservations : action.payload.reservations
        }
       default : return state
    }
}

export default  UserReducer