import './App.css';
import React from 'react';
import Home from './screens/Home';
import Login from './screens/Login';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SignUp from './screens/SignUp';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/signup" element={<SignUp/>}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
