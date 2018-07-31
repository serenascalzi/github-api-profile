import React, { Component } from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import store from './store'
import {Provider} from 'react-redux'

import Profile from './Profile'

class App extends Component {
  render() {
    return (
    	<Provider store={store}>
    		<Router>
		      <div>
		        <Switch>
		        	<Route exact path="/" component={Profile} />
		        </Switch>
		      </div>
	      </Router>
      </Provider>
    )
  }
}

export default App
