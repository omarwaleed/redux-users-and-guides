import React, { Component } from 'react'
import { connect } from 'react-redux';

import { addUser } from "../actions/userActions";

class CreateUser extends Component {
	constructor(){
		super();
		this.state = {
			name: ""
		}
	}

	render() {
		return (
			<div>
				<input type="text" value={this.state.name} onChange={(event)=>this.setState({name: event.target.value})} />
				<button onClick={()=>this.props.addUser({...this.state})}>Create User</button>
			</div>
		)
	}
}

export default connect(null, {addUser})(CreateUser);