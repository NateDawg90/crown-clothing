import React from "react";
import FormInput from "../form-input/form-input.component";
import './sign-up.styles.scss'
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { useState } from "react/cjs/react.development";
import CustomButton from "../custom-button/custom-button.component";
const SignUp = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords don't match")
      return
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      createUserProfileDocument(user, { displayName })
      setDisplayName('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')
    }catch(err) {
      console.error(err)
    }
  }

  return (
    <div className="sign-up">

      <h2 className="title">I do not have an account</h2>

      <span className="">Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={e => setDisplayName(e.target.value)}
          label='Display Name'
          required
        />
        <FormInput
          type='text'
          name='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          label='Confirm Password'
          required
        />
        <CustomButton type='submit' >SIGN UP</CustomButton>>
      </form>
    </div>
  )
}

export default SignUp;