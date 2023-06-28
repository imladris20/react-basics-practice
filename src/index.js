import React from 'react';
//The reason why we don't need to use use 'require' and 'browserify' to import React is because it has webpack underneath the hood that does the bundling for us.
import ReactDOM from 'react-dom/client';  // If you see DOM, it means this project is used for website.

// If you see ReactNative, it menas it used for mobile application.

import './index.css';
import App from './App';  // without file extention, it would assume automatically as .js file. So, ""./App" equals to "./App.js".

import Hello from './Hello.js'; //  Hello is my practicing first component.

import reportWebVitals from './reportWebVitals';
import 'tachyons';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hello demo_props={"I am " + "confused."}/>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

