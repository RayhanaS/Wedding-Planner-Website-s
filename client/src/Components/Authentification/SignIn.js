import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import {signIn} from '../../Redux/action/action';
import {useHistory,Link} from 'react-router-dom' ;

function SignIn() {
    const dispatch = useDispatch() ;
	let History = useHistory () ;
	const [email , setEmail] = useState('') ;
	const [password , setPassword] = useState('') ;

	const submit =() => { 
      dispatch (signIn ({email,password},History));          // on va tester avec l'axios si le client est connecté ou pas , signin t3ayet post w t3ayet l signin fil api , api va verifier sur le serveur ken le client est connecté ou pas//
	}

  return (
    <div className="sign-in">
    <div class="login-wrap">
    <div class="login-html">
    <input id="tab-1" type="radio" name="tab" class="sign-in" checked/><label for="tab-1" class="tab">Sign In</label>
        <div class="login-form">

        <div class="sign-in-htm">
				<div class="group">
					<label for="user" class="label">Username</label>
					<input id="user" type="text"  onChange={(e) => setEmail(e.target.value)} class="input"/>
				</div>
				<div class="group">
					<label for="pass" class="label">Password</label>
					<input id="pass" type="password"   onChange={(e) => setPassword(e.target.value)} class="input" data-type="password"/>
				</div>
				<div class="group">
					<input id="check" type="checkbox" class="check" checked/>
					<label for="check"><span class="icon"></span> Keep me Signed in</label>
				</div>
                <div class="group">
					
					<Link to="/Register">Create an account</Link>
				</div>
				<div class="group">
					<input  /*type="submit"*/ onClick={submit} class="btn btn-primary" value="Sign In"/>
				</div>
				<div class="hr"></div>
				<div class="foot-lnk">
					<a href="#forgot">Forgot Password?</a>
				</div>
			        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignIn