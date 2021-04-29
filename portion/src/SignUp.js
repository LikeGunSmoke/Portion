import React from 'react';

const SignUp = () => {
  return (
    <div id='signUpContainer'>
      <h1 id='logo' className='signUpLogo'>Portion</h1>
      <form id='signUpForm'>
        <input
        id='signUpEmail'
        type='text'
        placeholder='email'
        ></input>
        <input
        id='signUpUser'
        type='text'
        placeholder='username'
        ></input>
        <input
        id='signUpPass'
        type='text'
        placeholder='password'
        ></input>
        <input
        id='signUpConfirm'
        type='text'
        placeholder='confirm password'
        ></input>
      </form>
      <button
      id='signUpSubmit'
      type='submit'
      value='Submit'
      >Submit</button>
    </div>
  )
}


export default SignUp;