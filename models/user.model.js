const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        username: {type:String , required:true, unique:true}, //(name unique)//
        email: {type:String , required:true, unique:true},  //(email doit etre unique et required)//
        password: {type:String , required:true},
        createdAt: {type:Date , default:new Date}, //pour savoir la date de creation du compte//
        role : {type:String , default: 'guest'}  //(default : la valeur par defaut )
    }
)

module.exports = mongoose.model ('user', userSchema) ;