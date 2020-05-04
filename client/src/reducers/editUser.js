// Register.js
import { ADD_USER, DELETE_USER, FETCH_USER, EDIT_USER, BACK_TO_USER } from '../actions/types'
const initState = {
	edit: null
}

const editUser = (state = initState, action) => {
	switch (action.type){
		case EDIT_USER:
			 return {
			 	...state,
			 	edit: action.payload
			 }
			 break;
			 default:
			 return state 
			 
	}
	
}

export default editUser
