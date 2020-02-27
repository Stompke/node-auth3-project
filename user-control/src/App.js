import React, { useState, useEffect } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Login from './components/Login';
import Navigation from './components/Navigation';
import Users from './components/Users';
import Register from './components/Register';

function App() {
  const [ loggedIn, setLoggedIn ] = useState(false);

  useEffect(() => {
    if(localStorage.getItem('token')){
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
  },[])

  return (
    <div className="App">
      {/* <div className="App-header"> */}
      {/* <Navigation /> */}
      {loggedIn &&  <Navigation setLoggedIn={setLoggedIn} /> }
      {/* <Route exact path='/login' setLoggedIn={setLoggedIn} component={Login}/> */}
      <Route exact path='/login'  render={() => <Login setLoggedIn={setLoggedIn} />}/>
      <Route exact path='/register'  render={() => <Register setLoggedIn={setLoggedIn}/>}/>
      {/* </div> */}

      <Route path='/users'  component={Users}/>
    </div>
  );
}

export default App;
