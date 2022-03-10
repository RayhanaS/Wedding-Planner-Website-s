const express = require('express');
const Auth = express.Router();
const {authSignUp,authSignIn,getAllUsers,deleteUser,modifyUser} = require ('../controlers/user.controlers')
const {saveReservation,getAllReservation} = require ('../controlers/reservation.controllers')
const {isValid,validationSignUp,validationSignIn} = require('../Middlewares/validation')
const {isAuth} = require ('../Middlewares/isAuth')
//SIGNUP//

Auth.post ('/signup',validationSignUp,isValid,authSignUp )

/*SIGNIN*/

Auth.post('/signin',validationSignIn,isValid,authSignIn )

//current//
Auth.get('/current',isAuth,(req,res) => {                 //(current : la personne qui vient de s'identifier)// 
   res.send(req.user)
}) 
//getAllUsers
Auth.get('/getAllUsers',getAllUsers) 

//Delete one user by id
Auth.post('/deleteUser/:ID',deleteUser) 

// modifier user by id
Auth.post('/modifyUser/:ID',modifyUser)

Auth.post('/addReservation',saveReservation)

Auth.get('/getAll',getAllReservation)

module.exports = Auth ;   