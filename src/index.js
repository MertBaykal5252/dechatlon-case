import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Post from './views/Post';
import Users from './views/Users';
import UserDetail from './views/UserDetail';
import Navbar from './Navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <div className="App">
      <div className='content'>
        <Navbar></Navbar>
        <Routes>
          <Route exact path='/' element={< Post />}></Route>
          <Route  path='/users' element={< Users />}></Route>
          <Route  path='/users/:id' element={< UserDetail />}></Route>
        </Routes>
      </div>
    </div>
  </ Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
