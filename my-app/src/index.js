import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import reportWebVitals from './reportWebVitals';

if(!localStorage.getItem('history')) {
  localStorage.setItem('history', JSON.stringify([]));
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
