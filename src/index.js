import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './comp/Home';
import Header from './comp/Header'
import Skills from './comp/Skills'
import Hireme from './comp/Hireme'
import Footer from './comp/Footer'

ReactDOM.render(
  <React.StrictMode>
      <Header />
      <Home />
      <Skills />
      <Hireme />
      <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();