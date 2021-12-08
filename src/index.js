import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component';
// import Expenses from "./routes/expenses";
// import Invoices from "./routes/invoices";
// import Invoice from "./routes/invoice";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);


ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
