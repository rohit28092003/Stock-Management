import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
// import { ClerkProvider } from '@clerk/clerk-react'
import { ClerkProvider, RedirectToSignIn, RedirectToProfile, useUser } from "@clerk/clerk-react";
const PUBLISHABLE_KEY = "pk_test_c3VpdGFibGUtcGFycm90LTk3LmNsZXJrLmFjY291bnRzLmRldiQ"
ReactDOM.render(
  <React.StrictMode>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <App />
    </ClerkProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
