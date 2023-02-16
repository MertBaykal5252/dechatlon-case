import './App.css';
import React from 'react';
import Home from './Home';
import { Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div className='content'>
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
