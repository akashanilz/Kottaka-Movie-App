import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import firebase from './firebase/config';
import App from './App';
import Context from './Store/Context'
import reportWebVitals from './reportWebVitals';
import { FirebaseContext } from './Store/Context';

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase }}>
    <Context>
    <App />
    </Context>
  </FirebaseContext.Provider>

 
  ,document.getElementById('root')
);
