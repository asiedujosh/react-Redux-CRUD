import React, { Component } from 'react'
import { connect } from 'react-redux'
import { backToUser } from '../actions/index'
import { finallyEditUser } from '../actions/index'


class UpdateForm extends Component{

	state = {
		id : null,
		firstName : null,
		lastName : null,
		job: null,
		salary: null
	}

	handleChange = (e) =>{
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	handleUpdate = (e) =>{
		e.preventDefault()
		this.props.finallyEditUser(this.state)	
	}

	handleBackToUser = () =>{
		this.props.backToUser()
	}

	componentDidMount(){
		const { edit } = this.props.editUser
		const { users } = this.props.users
		let toEdit = users.find(user => user._id === edit)
		this.setState({
			id: toEdit._id,
			firstName: toEdit.firstName,
			lastName: toEdit.lastName,
			job: toEdit.job,
			salary: toEdit.salary
		})
	}
	
	render(){
		// let id = this.props.idHandle;
		// console.log(id)
	
		return(
				<div className = "row">
				<div className = "col-md-12">
				<form onSubmit = {this.handleUpdate}>
				<h2>Update A User</h2>
				  <div className="form-group">
				    <label htmlFor="firstName">First Name</label>
				    <input type="text" className="form-control" id = "firstName" 
					 value = {this.state.firstName}
				    onChange = {this.handleChange} 
				    />
				  </div>
				  <div className="form-group">
				    <label htmlFor="lastName">Last Name</label>
				    <input type="text" className="form-control" id = "lastName" 
				    value = {this.state.lastName} 
				    onChange = {this.handleChange}
				    />
				  </div>
				  <div className="form-group">
				    <label htmlFor="Occupation">Occupation</label>
				    <input type="text" className="form-control" id = "job" 
				    value = {this.state.job}
				     onChange = {this.handleChange}
				    />
				  </div>
				  <div className="form-group">
				    <label htmlFor="Salary">Salary</label>
				    <input type="text" className="form-control" id = "salary" 
				    value = {this.state.salary}
				    onChange = {this.handleChange}
				    />
				  </div>
				  <button type="submit" className="btn btn-primary" 
				  onSubmit = {this.handleUpdate}>
				  Update
				  </button>
				  <button type="submit" className="btn btn-primary" 
				  onSubmit = {this.handleBackToUser}>
				  New Staff
				  </button>
				</form>
				</div>
				</div>
			)
	
		  }
	   } 


const mapStateToProps = (state) => {
	return {
		editUser : state.editUser,
		users : state.getUsers
		}
	}

const mapDispatchToProps = () =>{
	return {
		finallyEditUser
	}
}
export default connect(mapStateToProps, mapDispatchToProps())(UpdateForm)