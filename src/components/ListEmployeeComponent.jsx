import React, {useEffect, useState} from "react";
import { deleteEmployee, listEmployees } from "../services/EmployeeService";
import {useNavigate} from 'react-router-dom'

const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([])
    const navigator = useNavigate();

    useEffect(() => {
        getAllEmployees();
    }, [])

    function getAllEmployees() {
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    /**/
    const dummyData = [
        {
            "id" : 1,
            "firstName" : "A1",
            "lastName" : "L1",
            "email" : "al1@nc.com"
        },
        {
            "id" : 2,
            "firstName" : "A2",
            "lastName" : "L2",
            "email" : "al2@nc.com"
        },
        {
            "id" : 3,
            "firstName" : "A3",
            "lastName" : "L3",
            "email" : "al3@nc.com"
        }
    ]

    function addNewEmployee(){
        navigator('/add-employee');
    }

    function updateEmployee(id){
        navigator(`/edit-employee/${id}`);
    }

    function removeEmployee(id){
        deleteEmployee(id).then((respone) => {
            console.info('Record is deleted for id : ', id);
            getAllEmployees();
        }).catch(error => {
            console.error(error);
        })
        //navigator(`/delete-employee/${id}`);
    }

    return (
        <div className="Container">
            <h2 className="text-center">List of Employees</h2>
            <button className="btn btn-primary mb-2" onClick={addNewEmployee}>Add Employee</button>
            <table className="table table-stripped table-bordered">
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        //dummyData.map(employee =>
                        employees.map(employee =>
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <button className="btn btn-info" onClick={() => updateEmployee(employee.id)}>Update</button>
                                    <button className="btn btn-danger ms-1" onClick={() => removeEmployee(employee.id)}>Delete</button>
                                </td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
        
}

export default ListEmployeeComponent