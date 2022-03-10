const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userSchema = require('../models/user.model');

// SignUp // 
exports.authSignUp = async (req,res) => {
    const {email,password,username ,role} = req.body;
    try {
        const find = await  userSchema.findOne({email:email});  //(il va chercher selon l'email si l'user existe deja ou non)//
        if (find) {
            res.status(400).send({msg :"User already exist"})    // ( condition : si tu as trouvé l'email un message s'affiche : user exist ) , 400 erreur client , 500 serveur , 200 sucess//
        }
        const user = new userSchema(req.body)                     // dans le cas ou il n'a pas trouvé de compte//
        const salt = 10;                                             //permet de faire 10 tour sur le mdp et de changer à chaque foi un caractère//
        const passwordHashed = bcrypt.hashSync(password,salt); 
        const userID= {id:user._id}
        const token = jwt.sign( userID , process.env.SECRET_OR_KEY); 
        user.password = passwordHashed ; 
        await user.save ();                                  //creation du compte//
        res.status (200).send({msg:"registred successfully", token });                              
    } catch (error) {
        res.status(500).send({msg:"error"})
        
    }
}

// SignIn // 

exports.authSignIn = async (req, res) => {
    const {email,password} = req.body;
try {
  const find = await userSchema.findOne({email:email});
  if (!find){
      res.status(400).send({msg:'user not exist'})
  }
  const match =  bcrypt.compareSync(password, find.password)   // on va comparer entre le mdp qui l'a ecrit et le hash dans la base de donnée*/
  if (!match){ 
      res.status(400).send({msg:'bad credentials'})
  }
  const userID= {id:find._id} 
  const token = jwt.sign( userID , process.env.SECRET_OR_KEY); 
  res.status (200).send({msg:'Loggin successfully' , token})
} catch (error) {
  res.status(500).send({msg:'bad credentials'})
}
}
//getAllUsers
exports.getAllUsers = async (req, res) => {
    
try {

  const users = await userSchema.find();
  if (!users){
      res.status(400).send({msg:'users not exist'})
  }
  res.status (200).send({msg:'successfully' , users})
} catch (error) {
  res.status(400).send({msg:'users not exist'})
}
}
// delete user by id
exports.deleteUser = async (req, res) => {
    const {ID} = req.params;
    try {
      const users = await userSchema.findByIdAndDelete(ID);
      if (!users){
          res.status(400).send({msg:'users not deleted'})
      }
      res.status (200).send({msg:'user deleted successfully'})
    } catch (error) {
      res.status(400).send({msg:'users not deleted'})
    }
}

// modifier user by id
exports.modifyUser = async (req, res) => {
    const {ID} = req.params;
    console.log('modifying user',req.body)
    try {
      const users = await userSchema.findByIdAndUpdate(ID,{$set: req.body});
      if (!users){
          res.status(400).send({msg:'users not updated'})
      }
      res.status (200).send({msg:'user updated successfully'})
    } catch (error) {
      res.status(400).send({msg:'users not updated'})
    }
}