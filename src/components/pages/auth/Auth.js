import React, { useRef,useState,useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../../context/Authcontext';
import './Auth.css'

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

    const switchAuthModeHandler = () =>{
        setIsLogin((prevState)=>(!prevState))
    }

    const {token,updateTheToken} = useContext(AuthContext)

    const onSubmitHandler = async (event) => {
        event.preventDefault();
    
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
    
        // optional: Add validation
    
        setIsLoading(true);
    
        try {
          let url;
          if (isLogin) {
            url =
              'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBBRVODJ6LpjWg2KARPVRTpwsnk0vFXtw8';
          } else {
            url =
              'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBBRVODJ6LpjWg2KARPVRTpwsnk0vFXtw8';
          }
    
          const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
              email: enteredEmail,
              password: enteredPassword,
              returnSecureToken: true,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          });
    
          setIsLoading(false);
    
          if (!response.ok) {
            // const data = await response.json();
            let errorMessage = 'Authentication failed!';
            // if (data && data.error && data.error.message) {
            //   errorMessage = data.error.message;
            // }
    
            throw new Error(errorMessage);
          }
    
          const data = await response.json();
    
          localStorage.setItem('token',data.idToken)
           localStorage.setItem('email',data.email)
           updateTheToken(data.idToken)

          navigate('/store');
        } catch (error) {
          alert(error.message);
        }

    }

  return (
    <div>
        <form onSubmit={onSubmitHandler}>
        <h2><span>{isLogin ? 'Login' : 'Signup'}</span></h2>
        <input type="email" id="email" ref={emailInputRef} required placeholder='Enter your Email' />
        <input type="password" id="password" ref={passwordInputRef} required placeholder='Enter your password'/>
        {!isLoading && (
            <button>{isLogin ? 'Login' : 'Create Account'}</button>
          )}
          {isLoading && <p>Sending request...</p>}
        <br />
        <button className='switch' onClick={switchAuthModeHandler}>{isLogin ? 'Create new account' : 'Login with existing account'}</button>
        </form>
    </div>
  )
}

export default Auth