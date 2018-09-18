import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Move the input and submit button into its own component called InitialCountForm that is a child of the App component
// Maintain that the functionality of being able to set the initial count of the counter works
// Potentially useful: React Component Lifecycle, specifically componentWillReceiveProps. Tangentially relevant: React Cheat Sheet
// Useful: Moving State Up In The Tree

class InitialCountForm extends Component {
  
  constructor(props) {
	  super(props);
	  this.state = {initialCount: 0}
	  
	  this.handleChange = this.handleChange.bind(this);
	  this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
	  this.setState({ initialCount: event.target.value });
  }
  
  handleSubmit(event) {
	  event.preventDefault();
	  this.props.callback(this.state.initialCount);
  }
  
  protoTypes = {
	  callback : PropTypes.func,
  }
  
  
  render() {
    // const {initalCount} = this.state;
	return (
		<div>
		<form onSubmit = {this.handleSubmit}>
			<label>
				Set an initial count: 
				<input type="number" name="countInput" id="countInput"
				onChange = {this.handleChange} />
			</label>
			<input type="submit" value="Submit" />
		</form>
		<span>InitialCountForm = {this.state.initialCount}</span>
		</div>
		
    )
  }
}

export default InitialCountForm
