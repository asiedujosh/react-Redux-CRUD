const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(
	bodyParser.urlencoded({
		extended: false
	}))

//routes
const employee = require('./routes/employee')
app.use('/employee',employee)

//Error handling
app.use(function(err, req, res, next){
	res.status(422).send({error:err.message})
})

//connect to the database
mongoose.connect('mongodb://localhost:27017/mernstack',{
	useNewUrlParser: true,
	useFindAndModify: false
},(err) => {
	if(err){
		process.exit(1)
		console.log("Unable to connect to the database")
	}
	else
		console.log("Successfully connected to the database")
});

const port = process.env.PORT || 5000;
app.listen(port, ()=>{
	console.log("App is running on Port " + port)
})