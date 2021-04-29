import React, { useState } from 'react';
import Main from './Main.js';
import SignUp from './SignUp.js';


const App = () => {

  const [access, setAccess] = useState(false);
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');
  const [signUp, setSignUp] = useState(false);


  if (signUp) {
    return (
      <SignUp />
    )
  }

  return (
    !access ?
    <div id='loginContainer' >
      <h1 id='logo' className='loginLogo'>Portion</h1>
      <div id='loginDisplay'></div>
      <form id='loginForm'>
        <input
        id='usernameInput'
        type='text'
        value={username}
        placeholder='Username'
        onChange={(e) => setUsername(e.target.value)}
        />
        <input
        id='passwordInput'
        type='text'
        value={pass}
        placeholder='Password'
        onChange={(e) => setPass(e.target.value)}
        />
        <button
        id='submitBtn'
        type='submit'
        value='Submit'
        onClick={() => setAccess(true)}
        >Submit</button>
        <button
        id='signUpBtn'
        type='submit'
        value='Submit'
        onClick={() => setSignUp(true)}
        >Not a member yet? Sign up!</button>
      </form>
    </div>
    :
    <Main />
  )
}

export default App;
