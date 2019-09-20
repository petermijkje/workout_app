import React from 'react';
import './App.css';
import SignIn from './Components/SignIn/SignIn.js'
import SignUp from './Components/SignUp/SignUp.js'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import HomePage from "./Components/HomePage.js"

// import "./routes"


function App() {
  return (
    <div className="App">
        <HomePage />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
    </div>
  );
}

export default App;
