import React from 'react';
import './App.css';
import SignIn from './Components/SignIn/SignIn.js'
import SignUp from './Components/SignUp/SignUp.js'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import HomePage from "./Components/HomePage.js"

// import "./routes"

const welcome =() =>{ return (<div><h1 className="welcome__text"> Welcome. </h1>
<nav>
<ul className="navbar__ul">
  <li className="navbar">
    <Link to="/signin">sign in</Link>
  </li>
  <br />
  <br />
  <li className="navbar">
    <Link to="/signup">sign up </Link>
  </li>
</ul>
</nav>
</div>)}

function App() {
  return (
    <div className="App">
        <HomePage />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
      <br />
      <br />
      <br />  
      <br />
      <br />
      <br />  
      <br />
      <br />
      <br />  
      <br />
      <br />
      <br />  
      <br />
      <br />
      <br />  
      <br />
      <br />
      <br />  
      <br />
      <br />
      <br />  
      <br />
      <br />
      <br />  
      <br />
      <br />
      <br />  
      <br />
      <br />
      <br />  
      <br />
      <br />
      <br />
      <br />
      <br />  
      <br />
      <br />
      <br />  
      <br />
      <br />
      <br />  
      <br />
      <br />
      <br />  
      <br />
    </div>
  );
}

export default App;
