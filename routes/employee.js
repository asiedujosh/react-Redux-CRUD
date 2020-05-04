const express = require('express')
const employeeRouter = express.Router()
const cors = require('cors')
const employeeModel = require('../model/employee')
employeeRouter.use(cors())


//Read
employeeRouter.get('/',(req, res, next) =>{
	employeeModel.find({},(err, response) => {
		if(err)
			res.status(500).json({message: {
				msgBody: "Unable to get Employees",
				msgError: true
			}})
		else
			res.status(200).json(response)
	}).catch(next)
})

//Create
employeeRouter.post('/register',(req, res, next)=>{
	employeeModel.create(req.body).then(
		empModel =>{
			res.json({status:empModel.firstName + ' registered!'})
		}).catch(next)
})
	
//Delete
employeeRouter.delete('/:id',(req, res, next)=>{
	employeeModel.findByIdAndDelete(req.params.id, err =>{
		if(err)
			res.status(500).json({message:{
				msgBody: "Unable To Delete Employee",
				msgError: true
			}})
		else
			res.status(200).json({message:{
				msgBody: "Successfully Deleted employee",
				msgError: false
			}})
	}).catch(next)
})

//update
employeeRouter.put('/:id',(req, res, next)=>{
	console.log(req.body);
	employeeModel.findByIdAndUpdate({_id:req.params.id},req.body).then(
		function(empModel){
			employeeModel.findOne({_id:req.params.id}).then(
				(data)=>res.send(data)
				)
		}
	)

		// .then(function(){
		// 	employeeModel.findOne({_id:req.params.id})
		// 	.then(function(empModel){
		// 		res.send(empModel)
		// 		})
		// 	})
		// if(err)
		// 	res.status(500).json({message:{
		// 		msgBody: "Unable To Update Employee",
		// 		msgError: true
		// 	}})
		// else
		// 	res.status(200).json({message:{
		// 		msgBody: "Successfully Updated employee",
		// 		msgError: false
		// 	}})
	})


module.exports = employeeRouter;