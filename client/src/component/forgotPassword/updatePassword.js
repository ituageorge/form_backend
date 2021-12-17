import React, { useState } from 'react';
import {
  useLocation,
  Link,
} from 'react-router-dom';
import axios from 'axios';
//require('dotenv').config();
// import PropTypes from "prop-types"
import './recoverPassword.css';

// import {history} from '../../_helpers/history';

// const baseUrl = 'http://localhost:3000/users';

 const UpdatePassword = () => {
    const location = useLocation();
    const [ password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [ submitted, setSubmitted] = useState(false);


  const updateThePassword = e => {
    e.preventDefault()

   const userId = new URLSearchParams(location.search).get('userId');
   const accessToken = new URLSearchParams(location.search).get('accessToken');
console.log('userIdddd', userId);
console.log('accessssToken', accessToken);

if(password !== confirmPassword){
  setPassword('')
  setConfirmPassword('')
  return alert('Please cross-check and ensure your password is same as confirmPassword');

} else {
    axios
      .post(
        `${process.env.SERVER_BASE_URL}/reset_password/receive_new_password/${userId}/${accessToken}`,
        { password }
      )
      .then(res => res)
      .catch(err => console.warn("ERROR FROM SERVER UPDATING PASSWORD:", err));
      setSubmitted(true);
  }
    // this.setState({ submitted: !this.state.submitted })
  }

    return (
          <div className=" h-screen w-full flex flex-col items-center subpixel-antialiased text-2xl justify-center bg-gradient-to-r from-purple-500 to-pink-500">
        <h3 className='pb-6'>Update your password</h3>
        {submitted ? (
          <div className="flex  text-left my-6">
            <p>Your password has been saved.</p>
            <Link to="/login" className="p-6">
              Sign back in
            </Link>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <form name='form' className='pb-4 flex flex-col items-center justify-center'
              onSubmit={updateThePassword}
              // style={{ paddingBottom: "1.5rem" }}
            >
              <input
                // onChange={this.handleChange("password")}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="New password"
                type="password"
                // className="ghostInput"
                className="form-input border-0 border-b-4 py-2 my-3 border-purple-500 "
              />
              <input
                // onChange={this.handleChange("confirmPassword")}
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                placeholder="Confirm password"
                type="password"
                className="form-input border-0 border-b-4 py-3 my-3 border-purple-500 "
                name='confirm password'
                // className="ghostInput"
              />

              {/* <button className="btn-primary password-reset-btn">
              Update password
              </button> */}

              <button type='submit' className="bg-gradient-to-r from-purple-500 to-pink-500 font-bold text-xl my-5 py-3 tracking-widest text-white  ">
              Update password
</button>
            </form>

            
          </div>
        )}
        </div>
    )
}



export default UpdatePassword



