import React, { Component } from 'react'
import { Instructions } from './components'
import { Counter } from './components'
import { InitialCountForm } from './components'
import './styles/app.css'

// Pass the initialCount state as a prop into the Counter component, and use this value as the initial count in the Counter. Make sure to watch out for types when doing this, since user input is a String and we want to send in a Number.
// Bonus: show UI feedback if user input is invalid (a simple message will do)
// Note: If your button refreshes the page, throw in a button type: <button type="button" ...

class App extends Component {
  
  constructor() {
	  super();
	  this.state = {
		  initialCount : 4
	  }
  }
  
  formChild1(params) {
	  this.setState({
		  initialCount : params
	  })
  }
  
  render() {
	return (
      <div className="app">
        <h1>Hello World!</h1>
        <Instructions 
			shouldDisplayImage={true}
			items={['red','orange','yellow','green','blue','indigo','no']}/>
		
      
		<p>Parent</p>
		<span>App = {this.state.initialCount}</span>
		<InitialCountForm callback={this.formChild1.bind(this)} />
		<Counter data = {this.state.initialCount} />
	  </div>
	  
    )
  }
}

export default App
