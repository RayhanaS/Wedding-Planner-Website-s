// validation is a midleware , permets de savoir si les informations sont notées correctement ou pas exemple email //

const { body, validationResult } = require('express-validator');

exports.validationSignUp = [
    body('username', 'the name must be 5 caracteres').isEmpty().isLength({min:5}),
    body('password','the password must be 5 caracteres').isEmpty().isLength({min:5}),
    body('email', 'the email must be email form ').isEmpty().isEmail(),
]


exports.validationSignIn = [
    body('password','the password must be 5 caracteres').isEmpty().isLength({min:5}),
    body('email','the email must be email form').isEmpty().isEmail(),
]

// export midleware fonction middleware , next signifie s'il ya aucune erreur t3adda leli ba3dou//
exports.isValid = async (req, res, next) => {
    try {
        const errors = validationResult(req.body);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });  // error.array : format json c'est un format objet dc les erreurs doivent etre en format objet, index et nombre d'erreur //
        }
        next () ;
    } catch (error) {
        res.status(400).send({msg:'error'})
    }

}