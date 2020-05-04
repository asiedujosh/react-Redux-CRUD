import React, { Component } from 'react'
import { connect } from 'react-redux'


class Message extends Component{
 render(){
	const { res } = this.props.message
	const Mess = res !== null ? (
			<h2>{res.status}</h2>
		):(
			<h2>Pls register</h2>
		)

	return(
		<div>
			<span>
			<h4>Hello World</h4>
			{Mess}
			</span>
		</div>
		)
	}

}
  	
			
const mapStateToProps = (state) =>{
	return {
		message: state.register
	}
}


export default connect(mapStateToProps)(Message)