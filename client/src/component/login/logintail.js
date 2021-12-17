import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

import 'regenerator-runtime/runtime';

// const baseUrl = 'http://localhost:3000/users';

//request interceptor to add the auth token header to requests
axios.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers['x-auth-token'] = accessToken;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

//response interceptor to refresh token on receiving token expired error
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    let refreshToken = localStorage.getItem('refreshToken');

    if (
      refreshToken &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      const res = await axios
        .post(`${process.env.SERVER_BASE_URL}/refresh_token`, {
          refreshToken: refreshToken,
        });
      if (res.status === 200) {
        localStorage.setItem('accessToken', res.data.accessToken);
        console.log('res.data.accessToken', res.data.accessToken);
        console.log('Access token refreshed!');
        return axios(originalRequest);
      }
    }
    return Promise.reject(error);
  },
);

export default function LoginForm() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const [submitted, setSubmitted] = useState(false);

  const history = useHistory();
  console.log('bless', `${process.env.SERVER_BASE_URL}/login`);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log('SERVER_BASE_URL', process.env.SERVER_BASE_URL);
    axios
      .post(`${process.env.SERVER_BASE_URL}/login`, {
        username: username,
        password: password,
      })
      .then(
        (response) => {
          console.log('response111111223', response.data.findLoginUser);
          if (response) {
            let { accessToken, refreshToken, findLoginUser } = response.data;
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
            history.push({
              pathname: '/',
              findLoginUser,
              // state: {_id: "0001", name: "AZ"}
            });
          }
          return response;
        },
        (error) => {
          console.log(process.env);
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
      );
  };

  return (
    <div className="w-full bg-gradient-to-r from-purple-500 to-pink-500 h-full  flex justify-center items-center py-12 px-20 font-sans">
      <div className="h-full w-full border-transparent flex flex-col lg:flex-row">
        <div className="lg:w-3/5 bg-purple-900  text-white flex flex-col font-bold content-around  md:rounded-l-xl py-6 p-16">
          <div className=" h-1/5 flex items-center  m-4">
            <div className="w-24 h-24 border-8 border-white bg-transparent rounded-full -mx-6"></div>
            <div className="w-20 h-20 border-8 border-white bg-transparent rounded-full -mx-6"></div>
            <span className="font-extralight text-4xl m-8 p-6">LOGO</span>
          </div>
          <div className="flex flex-col h-2/3">
            <h1 className="font-bold text-6xl tracking-wider py-12 ">
              Welcome Page
            </h1>
            <div className="flex font-sans font-light ">
              <div className="w-2/5 h-20"></div>
              <div className=" subpixel-antialiased w-3/5 h-20 text-2xl leading-3 tracking-tight">
                <span className="flex justify-start">Sign in to</span>
                <br />
                <span className="flex justify-start">continue access</span>
              </div>
            </div>
          </div>
          <div className=" p-4 text-xl text-left m-5">
            <span className="">https://form-exam.herokuapp.com/#/login</span>
          </div>
        </div>


        <form name='form' onSubmit={handleSubmit} className="h-full w-full lg:w-2/5 bg-white rounded-none md:rounded-r-xl p-10">
          <div className="h-2/5 w-full flex flex-col ">
            <div className="flex my-6 py-2">
              <h1 className="text-4xl font-bold  py-3">Sign In</h1>
            </div>

              <div
                className={
                  'form-group flex flex-col' + (submitted && !username ? ' bg-red-100' : '')
                }
              >
                <span className="text-left -my-3">Username</span>
                <input
                  type="username"
                  className="form-input border-0 border-b-4 my-3 focus:border-none border-purple-500 w-full"
                  name="username"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                />
                {submitted && !username && (
                  <div className="text-red-600">Username is required</div>
                )}
              </div>

              <div
                className={
                  'form-group flex flex-col' + (submitted && !password ? ' bg-red-100' : '')
                }
              >
                <span className="text-left -my-3">Password</span>
                <input
                  type="password"
                  className="form-input border-0 border-b-4 my-3 border-purple-500 "
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {submitted && !password && (
                  <div className="text-red-600">Password is required</div>
                )}
              </div>

              <button type='submit' className="bg-gradient-to-r from-purple-500 to-pink-500 font-bold my-5 py-3 tracking-widest text-white  ">
                SUBMIT
                <i className="fa fa-chevron-right mx-10 "></i>
              </button>

            {/* <button className="bg-white font-bold my-3 py-3 tracking-widest subpixel-antialiased">
              or Connect with Social Media
            </button> */}

            {/* <button className="bg-gradient-to-r from-blue-500 to-blue-300 font-bold my-3 py-3 tracking-widest text-white text-left">
              <i className="fa fa-twitter mx-6" />
              Sign In With Twitter
            </button> */}

            {/* <button className="bg-gradient-to-r from-blue-600 to-blue-400 font-bold my-3 py-3 tracking-widest text-white text-left">
              <i className="fa fa-facebook mx-6 " />
              Sign In With Facebook
            </button> */}

          <p className='inline'>
          <Link to="/recover/password">Forgot password?</Link>
            </p>  
            <p className='inline'>
              Don't have an account?
              <Link to="/register">Register here</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
