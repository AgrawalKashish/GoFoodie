import './App.css';
import React from 'react';
import Home from './screens/Home';
import Login from './screens/Login';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import {Addcart} from './components/addcart';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SignUp from './screens/SignUp';
import MyOrder from './screens/MyOrder';
function App() {
  return (
    <div className="App">
      <Addcart>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/signup" element={<SignUp/>}></Route>
          <Route exact path="/myOrder" element={<MyOrder/>}></Route>
         
        </Routes>
      </Router>
      </Addcart>

    </div>
  );
}

export default App;
