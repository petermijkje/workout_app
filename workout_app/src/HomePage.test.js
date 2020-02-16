import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom'
import App from './App'
import { MockedProvider } from '@apollo/react-testing'
import SignIn from './Components/SignIn/SignIn.js'
import SignUp from './Components/SignUp/SignUp.js'
import HomePage from './Components/HomePage.js'

import { configure, shallow } from 'enzyme'

describe('testing the App Component', () => {
  let wrapper
  it('should only render Sign In Component', () => {
    const div = document.createElement('homepage__div')
    ReactDOM.render(
      <MockedProvider>
        <SignIn />
      </MockedProvider>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
