// Register.js
import { ADD_USER, DELETE_USER, FETCH_USER, EDIT_USER, BACK_TO_USER } from '../actions/types'
const initState = {
	edit: null
}


const backToUser = (state = initState, action) => {
	switch (action.type){
		case BACK_TO_USER:
		return {
			...state, 
			edit: null
		}
		 break;
			 default:
			 return state 
	}
}

export default backToUser