import React, {Component} from 'react';
import './css/App.css';
import EmployeeTableRow from './components/EmployeeTableRow.js';
import Message from './components/message';
import EmployeeApi from'./EmployeeApi'
import Toggle from './components/Toggle'

class App extends Component{
	state = {
		message:" "
	};


	

	render(){
	  return (
	    <div className="App">
	      <div className="container-fluid">
	      <div className = "row">
	      <div className = "col-md-8">
	      <EmployeeTableRow />
	      </div>
	      <div className = "col-md-4 needMargin">
	      <Toggle />
	      <Message message = {this.state.message} />
	      </div>
	      </div>
	      </div>
	    </div>
	  );
	}
}
export default App;
