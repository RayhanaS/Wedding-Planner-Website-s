const jwt = require('jsonwebtoken');
const userSchema = require('../models/user.model');

exports.isAuth = async (req,res,next) => {
    const token = req.header('authorization');  
  
    try {
        if (!token) {
            return res.status (400). send({msg: 'not authorized'});
        }
        const decoded =  jwt.verify(token, process.env.SECRET_OR_KEY) ; 
        console.log(decoded);
          // difference entre token et decode : token c'est le numero et decoded : comparaison //
        if (!decoded) {
            return res.status (400). send({msg: 'not authorized'})
        }
        const user = await userSchema.findById(decoded.id); 
        req.user = user ;
        next () ;                   // next signifie midleware
    } catch (error) {
       res.status(500).send ({msg :'error'})
    }

}