import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Child from './Components/Test/Child'
import reportWebVitals from './reportWebVitals';
import AddItem from './Components/LocalStorage/AddItem';

ReactDOM.render(
  <React.StrictMode>
    {/* <Child /> */}
    <AddItem />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
