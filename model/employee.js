const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employeeSchema = new Schema({
	firstName : {
		type: String,
		required: [true, 'First Name is required']
	},
	lastName : {
		type: String,
		required: [true, 'Last Name is required']
	},
	job : {
		type: String,
		required: [true, 'Job is required']
	},
	salary : {
		type: Number,
		required: [true, 'Salary is required']
	}
})

const empModel = mongoose.model('employee',employeeSchema);
module.exports = empModel;