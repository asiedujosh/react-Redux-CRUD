import { ADD_USER, DELETE_USER, FETCH_USER, EDIT_USER, BACK_TO_USER } from './types'
import axios from 'axios'

const apiUrl = 'localhost:5000/employee';

export const createUserSuccess = (data) => {
	return {
		type: ADD_USER,
		payload: data
	}
}

export const createUser = ({firstName, lastName, salary, job}) =>{
	return (dispatch) => {
		return axios.post('/employee/register', {firstName, lastName, salary, job})
			.then(response => {
				dispatch(createUserSuccess(response.data))
			})
			.then(
				()=> {dispatch(fetchAllUsers())}
				)
			.catch(error => {
				throw(error)
			})
	}
}


export const fetchUsers = (users) => {
	return {
		type: FETCH_USER,
		payload: users
	}
}

export const fetchAllUsers = () => {
	return (dispatch) => {
		return fetch('/employee')
			.then(res => res.json())
			.then(data => {dispatch(fetchUsers(data))
			})
			.catch(error => {
				throw(error)
			})
	}
}

export const editUser = (id) => {
	return {
		type: EDIT_USER,
		payload: id
	}
}

export const backToUser = () => {
	return {
		type: BACK_TO_USER
	}
}



export const finallyEditUser = ({id, firstName, lastName, salary, job}) => {
	return (dispatch) => {
		return axios.put(`/employee/${id}`, {firstName, lastName, salary, job})
		.then(()=> {dispatch(fetchAllUsers())})
		.then(()=> {dispatch(editUser(null))})
	}
}


export const deleteUser = (id) => {
	return (dispatch) => {
		return axios.delete(`/employee/${id}`)
		.then(()=> {dispatch(fetchAllUsers())})
	}
}