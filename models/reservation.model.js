const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema(
    {   
        nameEvent: {type:String , required:true,unique:true},
        brideName: {type:String , required:true}, //(name unique)//
        fianceName: {type:String , required:true},  //(email doit etre unique et required)//
        email: {type:String , required:true},
        phone: {type:Number , required:true},
        date: {type:Date , required:true},
        otherDetails: {type:String},
        createdAt: {type:Date , default:new Date}, //pour savoir la date de creation du compte//
    }
)

module.exports = mongoose.model ('reservation', reservationSchema) ; 