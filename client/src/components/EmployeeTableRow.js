import React, { Component } from 'react'
import '../css/App.css'
import { connect } from 'react-redux'
import { fetchAllUsers } from '../actions/index'
import { editUser } from '../actions/index'
import { deleteUser } from '../actions/index'

class EmployeeTableRow extends Component{



		componentDidMount(){
			this.props.fetchAllUsers()
		}

		handleEdit = (id) =>{
			// console.log(id)
			this.props.editUser(id)
		}

		handleDelete = (id) =>{
			this.props.deleteUser(id)
		}

	render(){
		// console.log(this.props)
		const {users} = this.props.users
		let UserList = users.length ? (
				users.map(user => {
					return(
						<tr key = {user._id}>
							<td>{user._id}</td>
							<td>{user.firstName}</td>
							<td>{user.lastName}</td>
							<td>{user.job}</td>
							<td>{user.salary}</td>
							<td col-span-2> 
							<button className = "btn-primary" onClick = {()=>{this.handleEdit(user._id)}}>Edit</button>
							<button className = "btn-danger" onClick = {()=>{this.handleDelete(user._id)}}>Delete</button>
							</td>
			 			</tr>
						)
				})
			) : (
				<tr>
				<td>There is No Info</td>
				</tr>
			)
		return(
			<div className = "row">
			<h3>RECORDS</h3>
				<div className = "col-md-12">
					<table className="table">
					  <thead>
					    <tr>
					      <th scope="col">Id</th>
					      <th scope="col">First Name</th>
					      <th scope="col">Last Name</th>
					      <th scope="col">Occupation</th>
					      <th scope="col">Salary</th>
					      <th scope="col-span-2">Action</th>
					    </tr>
					  </thead>
					  <tbody>
					   		{UserList}
					   </tbody>
					  </table>
				</div>
			</div>
			)
		}
	}
	
const mapStateToProps = (state) =>{
	return {
		users: state.getUsers
	}
}

const mapDispatchToProps = () =>{
	return {
		fetchAllUsers,
		editUser,
		deleteUser
	}
}

export default connect(mapStateToProps, mapDispatchToProps())(EmployeeTableRow)