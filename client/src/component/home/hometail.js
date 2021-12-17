// import React from 'react';
// import './App.css';
import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import axios from 'axios';

import 'regenerator-runtime/runtime';

import QuestionApp from '../question/questionComponent';

// const {UserManagement} = React.lazy(() => import('./'));

import './index.css';

// const baseUrl = 'http://localhost:3000/users';

// request interceptor to add the auth token header to requests
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
      const res = await axios.post(
        `${process.env.SERVER_BASE_URL}/refresh_token`,
        { refreshToken: refreshToken },
      );
      if (res.status === 200) {
        localStorage.setItem('accessToken', res.data.accessToken);
        console.log('Access token refreshed!');
        return axios(originalRequest);
      }
    }
    return Promise.reject(error);
  },
);

const HomePage = (findLoginUser) => {
  const history = useHistory();
  const location = useLocation();

  const [appState, setAppState] = useState({
    display: 'hide',
    user: null,
    authUser: null,
    profileUserImg: null,
  });

  const getProtected = () => {
    return axios.get(`${process.env.SERVER_BASE_URL}/protected_user`);
  };

  useEffect(() => {
    (async () => {
      setAppState({ ...appState, loading: true });
      let accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        try {
          const res = await getProtected();
          console.log('res.data', res.data);
          console.log('findLoginUser', findLoginUser);
          const img = findLoginUser.location.findLoginUser.profileImg;
          console.log('img', img);

          setAppState({
            ...appState,
            display: 'show',
            // user: findLoginUser.firstName,
            user: res.data.user.username,
            authUser: findLoginUser.location.findLoginUser.username,
            // profileUserImg:authUserImg,
            profileUserImg: img,
            // profileUserImg: base64String,
          });
        } catch (error) {
          console.error(error);
          alert(error.response.data.error);
          setAppState({ ...appState, loading: false });
        }
      }
    })();
  }, []);

  const handleLogout = async () => {
    const logout = (body) => {
      return axios.delete(`${process.env.SERVER_BASE_URL}/logout`, body);
    };

    try {
      // setAppState({ ...appState, loading: true });
      let refreshToken = localStorage.getItem('refreshToken');
      localStorage.removeItem('accessToken');
      // localStorage.removeItem("data");
      localStorage.removeItem('refreshToken');
      history.push('/login');
      window.location.reload();
      await logout(refreshToken);
    } catch (error) {
      console.error(error);
      // setAppState({ ...appState, loading: false });
      alert(error.response.error);
    }
  };
  return (
    <div className="w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 lg:h-screen flex flex-col lg:flex-row justify-center items-center py-12 px-20 font-sans">
      <div className="lg:w-1/4 w-full h-screen flex flex-col bg-purple-900 p-4">
        <div className="p-4 w-full">
          <img src={appState.profileUserImg} alt="my passport" />
        </div>
        <div className="bg-gray-300 p-4 my-6">
          <h1>Hi {`${appState.user}`}!</h1>
          <p>You are logged in {`${appState.authUser}`} !</p>
        </div>
        <div className="w-full ">
        <button className="w-1/4 bg-pink-500 mb-1" onClick={handleLogout}>Log Out</button>
        </div>
      </div>

      <div className="w-full lg:w-3/4">
        <QuestionApp />
        
      </div>
     
    </div>
  );
};

export default HomePage;
