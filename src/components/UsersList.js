import React, { Component } from 'react'
import { connect } from 'react-redux';
import { removeUser, promoteUser } from '../actions/userActions'

class UsersList extends Component {
	render() {
		return (
			<div>
				<h2>Users</h2>
				<ol>
					{
						this.props.users.map((user)=>(
							<li style={{display: 'flex'}} key={'user-'+user.id}>
								<div>{user.id}</div>
								<div>{user.name}</div>
								<button onClick={()=>this.props.removeUser(user.id)}>Remove</button>
								<button onClick={()=>this.props.promoteUser(user)}>Promote</button>
							</li>
						))
					}
				</ol>
			</div>
		)
	}
}

const mapStateToProps = (store)=>{
	return {
		users: store.users
	}
}

export default connect(mapStateToProps, { removeUser, promoteUser })(UsersList);
