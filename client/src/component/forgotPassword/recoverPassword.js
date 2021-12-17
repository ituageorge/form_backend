import React, { useState } from 'react';
import {
  Link,
} from 'react-router-dom';
import axios from 'axios';
// require('dotenv').config();
import './recoverPassword.css'

// import {history} from '../../_helpers/history';

// const baseUrl = 'http://localhost:3000/users';



 const RecoverPassword = ({message}) => {
    const [ email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    

  const sendPasswordResetEmail = e => {
    e.preventDefault()
    axios.post(`${process.env.SERVER_BASE_URL}/forgot_password/${email}`).then(
      (response) => {
        console.log('response111111', response.data);
        if (response) {

         message = response.data.message
          console.log('message', message)
         
        }
        return message;
        
      },
      (error) => {
        if (error.response) {
          // client received an error response (5xx, 4xx)
          console.log('errorRes', error.response);
        } else if (error.request) {
          // client never received a response, or request never left
          console.log('errorReq', error.request);
        } else {
          // anything else
          console.log('eeeror', error);
        }
      },
    ).catch(err => console.warn("ERROR FROM SERVER RECOVER PASSWORD:", err));
   
    setSubmitted(true);
    setEmail("");
    }
    return (
        <div className= "h-screen w-full flex flex-col items-center justify-center subpixel-antialiased text-2xl bg-gradient-to-r from-purple-500 to-pink-500 font-mono">
        <h3 className='my-3 text-4xl'>Reset your password</h3>
        {submitted ? (
          <div className="text-left my-2 flex flex-col my-auto items-center justify-center max-w-md">
            <p>
              If that account is in our system, we emailed you a link to reset
              your password.
            </p>
            
            <Link to="/login" className="">
              Return to sign in
            </Link>
          </div>
        ) : (
          <div className="text-left my-2 flex flex-col my-auto items-center justify-center bg-green-100">
            <p className='my-2 text-2xl'>
              It happens to the best of us. Enter your email and we'll send you
              reset instructions.
            </p>
            <form name='form' className={"pb-4 flex flex-col items-center justify-center  + (submitted && !email ? ' bg-red-100' : '')"} onSubmit={sendPasswordResetEmail}>
           
            {/* <div
className={
  'form-group flex flex-col'
}
> */}
                <label  className="text-left -my-3" htmlFor="email">Email</label>
                <input
                  type="email"
                  className="max-w-md form-input border-0 border-b-8 p-3 my-3 focus:border-none border-purple-500 "
                  // ref={emailEl}
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                />
                
                {submitted && !email && (
                  <div className="text-red-600">Email is required</div>
                )}
              {/* </div> */}

              <button type='submit' className="bg-gradient-to-r from-purple-500 to-pink-500 font-bold my-5 tracking-widest text-white w-full block">
              Send password reset link to email
              </button>
            </form>
            <Link to="/login">I remember my password</Link>
          </div>
        )}
        </div>
      
    )

}

export default RecoverPassword;

