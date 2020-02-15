import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom'
import App from './App'
import { MockedProvider } from '@apollo/react-testing'
import SignIn from './Components/SignIn/SignIn.js'
import HomePage from './Components/HomePage.js'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16.1'

configure({ adapter: new Adapter() })
it('renders without crashing', () => {
  const div = document.createElement('App')
  ReactDOM.render(
    <MockedProvider>
      <App />
    </MockedProvider>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders children when passed in', () => {
  const wrapper = shallow(
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  )
  expect(wrapper.contains(<HomePage />)).to.equal(true)
})
