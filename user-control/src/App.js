import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';

import Login from './components/Login';
import Navigation from './components/Navigation';
import Users from './components/Users';
import Register from './components/Register';

function App() {
  return (
    <div className="App">

      <Navigation />
      <Route path='/login'  component={Login}/>
      <Route path='/users'  component={Users}/>
      <Route path='/register'  component={Register}/>
    </div>
  );
}

export default App;
