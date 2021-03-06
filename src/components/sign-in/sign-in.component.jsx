import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import './sign-in.styles.scss'
import { auth } from "../../firebase/firebase.utils";

const SignIn = () => {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail('')
      setPassword('')
    } catch(err) {
      console.error(err)
    } 
  }

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
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
          value={password} 
          handleChange={e => setPassword(e.target.value)}
          label='password'
          required 
        />
        <div className="buttons">
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignin>Sign In With Google</CustomButton>
        </div>
      </form>
    </div>
  )
}

export default SignIn;