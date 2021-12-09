import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import './sign-in.styles.scss'

const SignIn = () => {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setEmail('')
    setPassword('')
  }

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput 
          name="email" 
          label='email'
          value={email} 
          handleChange={e => setEmail(e.target.value)}
          required 
        />
        <FormInput 
          name="password" 
          type='password' 
          value={email} 
          handleChange={e => setPassword(e.target.value)}
          label='password'
          required 
        />
        <div className="buttons">
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton  onClick={signInWithGoogle} isGoogleSignin>Sign In With Google</CustomButton>
        </div>
      </form>
    </div>
  )
}

export default SignIn;