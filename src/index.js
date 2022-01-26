import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';

import { AuthErrorEventBus} from './context/authContext';
import { AuthProvider } from './context/authContext';
import { BrowserRouter } from 'react-router-dom';

import HttpClient from './network/httpClient';
import TokenStorage from './tokenStorage/tokenStorage';
import AuthService from './service/authService';
import Socket from './network/socket';

const baseURL = process.env.REACT_APP_BASE_URL;
const tokenStorage = new TokenStorage();
const httpClient = new HttpClient(baseURL, tokenStorage);
const authErrorEventBus = new AuthErrorEventBus
const authService = new AuthService(httpClient, tokenStorage);
const socketClient = new Socket(baseURL, () => tokenStorage.getToken());

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider
        authService={authService}
        authErrorEventBus={authErrorEventBus}>
        <App />
      </AuthProvider>  
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

