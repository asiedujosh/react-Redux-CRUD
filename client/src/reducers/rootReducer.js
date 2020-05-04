import register from './register'
import getUsers from './getUsers'
import editUser from './editUser'
import backToUser from './backToUser'

import {combineReducers} from 'redux'

const rootReducer = combineReducers({
	register: register,
	getUsers: getUsers,
	editUser: editUser,
	backToUser: backToUser

})

export default rootReducer