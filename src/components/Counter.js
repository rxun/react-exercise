import React, { Component } from 'react'
import './../styles/instructions.css'
import './../App.js'

class Counter extends Component {
  
  constructor(props) {
	  super(props);
	  this.state = {count: this.props.data}
  }
  
  IncrementItem = () => {
	this.setState({ count: this.state.count + 1 });
  }	
	
  DecrementItem = () => {
	this.setState({ count: this.state.count - 1});
  }
  
  
  
  render() {
	
	return (
		<div>
			<h1>Counter</h1>
			<div>{this.state.count}</div> <br />
			<button type="button" onClick={this.IncrementItem}>Increment</button>
			<button type="button" onClick={this.DecrementItem}>Decrement</button>
		</div>
		
	);
	
	
  }
  
  
  
}

export default Counter
