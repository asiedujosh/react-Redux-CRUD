// Register.js
import { ADD_USER, DELETE_USER, FETCH_USER, EDIT_USER } from '../actions/types'
const initState = {
	res: null
}

const register = (state = initState, action) => {
	switch (action.type){
		case ADD_USER:
			 return {
			 	...state,
			 	res: action.payload
			 } 
			 
	}
	return state
}

export default register