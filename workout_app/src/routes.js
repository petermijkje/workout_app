import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

//components
import App from './App.js'
import SignIn from "./Components/SignIn/SignIn.js"
import SignUp from "./Components/SignUp/SignUp.js"
import CreateYourProfile from "./Components/SignUp/CreateYourProfile/CreateYourProfile.js"
import EnterGoal from "./Components/SignUp/EnterGoal.js"

export default  (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/SignIn" component={SignIn} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/CreateYourProfile" component={CreateYourProfile} />
          <Route path="/EnterGoal" component={EnterGoal} />
        </Switch>
    </BrowserRouter>
)