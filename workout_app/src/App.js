import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import './App.css'

//Components
import HomePage from './Components/HomePage.js'
import SignIn from './Components/SignIn/SignIn.js'
import SignUp from './Components/SignUp/SignUp.js'

class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <HomePage />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
export default App
