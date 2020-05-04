import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createUser} from '../actions/index'


class InputForm extends Component{

	state = {
		employees : {
		firstName: null,
		lastName: null,
		salary: null,
		job: null
		}
	}

	

	handleChange = (e) =>{
		this.setState({
			...this.state.employee,
			[e.target.id]: e.target.value
		})
	}

	Reset = () => {
		document.getElementById("firstName").value =""
		 	document.getElementById("lastName").value =""
		 	document.getElementById("salary").value =""
		 	document.getElementById("job").value =""
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.createUser(this.state)
		 .then(
		 	this.Reset()
		 	)
	}

	
		render(){
			 // const { registeredMsg } = this.props
			 // console.log(registeredMsg)
		return(
			<div className = "row">
				<div className = "col-md-12">
				<form onSubmit = {this.handleSubmit}>
				<h2>Register A User</h2>
				  <div className="form-group">
				    <label htmlFor="firstName">First Name</label>
				    <input type="text" className="form-control" id = "firstName" onChange = {this.handleChange}/>
				  </div>
				  <div className="form-group">
				    <label htmlFor="lastName">Last Name</label>
				    <input type="text" className="form-control" id = "lastName" onChange = {this.handleChange}/>
				  </div>
				  <div className="form-group">
				    <label htmlFor="Occupation">Occupation</label>
				    <input type="text" className="form-control" id = "job" onChange = {this.handleChange}/>
				  </div>
				  <div className="form-group">
				    <label htmlFor="Salary">Salary</label>
				    <input type="text" className="form-control" id = "salary" onChange = {this.handleChange}/>
				  </div>
				  <button type="submit" className="btn btn-primary" onSubmit = {this.handleSubmit}>Submit</button>
				</form>
				</div>
			</div>
			)
		}
	}


	const mapDispatchToProps = () => {
		return {
			createUser
		}
	}

	


export default connect(null, mapDispatchToProps())(InputForm)
