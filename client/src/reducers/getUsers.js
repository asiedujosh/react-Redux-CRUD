// Register.js
import { ADD_USER, DELETE_USER, FETCH_USER, EDIT_USER } from '../actions/types'
const initState = {
	users: []
}

const getUser = (state = initState, action) => {
	switch (action.type){
		case FETCH_USER:
		    return {
		    	...state,
			 	users: [... action.payload]
			 }
			break;
			default:
			return state
		}
	 
	}

export default getUser