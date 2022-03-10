const reservationSchema = require('../models/reservation.model');
exports.saveReservation = async (req,res) => {
    const {nameEvent,brideName,fianceName ,email,phone,date,otherDetails} = req.body;
    
    try {
        const find = await  reservationSchema.findOne({nameEvent:nameEvent});
        if(find){
            res.status(400).send({msg :"This reservation is not valid"})  
        }
        
        const reservation = new reservationSchema(req.body) 
        console.log(reservation)
        await reservation.save();
        res.status (200).send({msg:"registred successfully", reservation });  
    } catch (error) {
        res.status(400).send({msg:error})
    }
}
exports.getAllReservation = async (req,res) => {
    try {
        const reservations = await  reservationSchema.find();
        if(!reservations){
            res.status(400).send({msg :"There is no reservation"})  
        }
        res.status(200).send({msg:"registred successfully", reservations }); 
    } catch (error) {
        res.status(400).send({msg:"error"})
    }
}