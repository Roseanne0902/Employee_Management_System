import React, { useState, useEffect } from "react";
import { listEmployees } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";
import { deleteEmployee } from "../services/EmployeeService";

const ListEmployeeComponent = () => {
  //   const dummyData = [
  //     {
  //       id: 1,
  //       firstName: "Han",
  //       lastName: "Pam",
  //       email: "Hangucci@gmail.com",
  //     },
  //     {
  //       id: 2,
  //       firstName: "Min",
  //       lastName: "Jiu",
  //       email: "Minci@gmail.com",
  //     },
  //     {
  //       id: 3,
  //       firstName: "Dan",
  //       lastName: "DAneng",
  //       email: "Dane@gmail.com",
  //     },
  //   ];
  const [employees, setEmployees] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    getAllEmployees();
  }, []);
  function getAllEmployees() {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  //console.log("emplist", employees);
  function addNewEmployee() {
    navigator("/add-employee");
  }

  function updateEmployee(id) {
    navigator(`/edit-employee/${id}`);
  }

  function deleteEmployeeId(id) {
    deleteEmployee(id)
      .then((response) => {
        console.log(response);
        getAllEmployees();
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="container">
      <h2 className="text-center">List of Employees</h2>
      <button className="btn btn-primary mb-2" onClick={addNewEmployee}>
        Add Employee
      </button>
      <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee FirstName</th>
            <th>Employee LastName</th>
            <th>Employee Email Id</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => updateEmployee(employee.id)}
                >
                  Update
                </button>

                <button
                  className="btn btn-danger"
                  onClick={() => deleteEmployeeId(employee.id)}
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
