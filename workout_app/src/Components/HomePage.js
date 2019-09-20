import React from 'react';
import '../App.css';
import SignIn from './SignIn/SignIn.js'
import SignUp from './SignUp/SignUp.js'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

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

function HomePage() {
  return (
    <div className="App">
        {welcome()}
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
    </div>
  );
}

export default HomePage;
