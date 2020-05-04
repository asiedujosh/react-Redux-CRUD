import React, { Component } from 'react'
import { connect } from 'react-redux'
import InputForm from './InputForm'
import UpdateForm from './updateForm'

class Toggle extends Component {


	render(){
		const { edit } = this.props.editUser
		if(edit !== null){
			return(
			<div>
			<UpdateForm idHandle = {this.edit}/>
			</div>
			)
		} else {
			return(
			<div>
			<InputForm />
			</div>
			)
		}
		
	}
}

const mapStateToProps = (state) => {
	return {
		editUser : state.editUser,
		Users : state.users 
	}
}

export default connect(mapStateToProps)(Toggle)
