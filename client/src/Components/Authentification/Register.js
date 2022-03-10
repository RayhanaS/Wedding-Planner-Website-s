import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import {signIn,signUp} from '../../Redux/action/action';
import {useHistory} from 'react-router-dom' ;

function Register() {
	const dispatch = useDispatch() ;
	let History = useHistory () ;

    const [username , setUsername] = useState('') ;
	const [password , setPassword] = useState('') ;
	const [email , setEmail] = useState('') ;
	const [repeatPassword , setRepeatPassword] = useState('') ;
	const [error , setError] = useState('') ;

	const SignUp = () => {
		if(password == repeatPassword){
			dispatch(signUp({username,password,email},History))
		}else{
			setError('password not matched');
		}
	} 
  return (
    <div className="sign-up">
     <div class="login-wrap">
	<div class="login-html">
		<input id="tab-2" type="radio" name="tab" class="sign-up" checked/><label for="tab-2" class="tab">Sign Up</label>
		<div class="login-form">
			
			{/*signup*/}
			<div class="sign-up-htm">
				<div class="group">
					<label for="user" class="label">Username</label>
					<input id="user" type="text" class="input" onChange={(e)=>setUsername(e.target.value)}/>
				</div>
				<div class="group">
					<label for="pass" class="label">Email Address</label>
					<input id="pass" type="text" class="input" data-type="text" onChange={(e)=>setEmail(e.target.value)}/>
				</div>
				<div class="group">
					<label for="pass" class="label"> Password</label>
					<input id="pass" type="password" class="input" data-type="password" onChange={(e)=>setPassword(e.target.value)}/>
					<span className="error">{error}</span>
				</div>
				<div class="group">
					<label for="pass" class="label"> Repeat Password</label>
					<input id="pass" type="password" class="input" onChange={(e)=>setRepeatPassword(e.target.value)}/>
					<span className="error">{error}</span>
				</div>
				<div class="group">
					<input onClick={SignUp} class="button" value="Sign Up"/>
				</div>
			</div>
		</div>
	</div>
</div>
    </div> 
  )
}

export default Register