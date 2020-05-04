import React from 'react';
import '../css/App.css';
import EmployeeTableRow from './EmployeeTableRow'

const Results = () =>{
		return(
			<div className = "row">
			<h3>RECORDS</h3>
				<div className = "col-md-12">
					<table className="table">
					  <thead>
					    <tr>
					      <th scope="col">Id</th>
					      <th scope="col">First Name</th>
					      <th scope="col">Last Name</th>
					      <th scope="col">Occupation</th>
					      <th scope="col">Salary</th>
					      <th scope="col-span-2">Action</th>
					    </tr>
					  </thead>
					  <tbody>
					   <EmployeeTableRow />
					   </tbody>
					  </table>
				</div>
			</div>
			);
		}

export default Results
