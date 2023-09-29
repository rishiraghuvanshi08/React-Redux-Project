import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
    const { employee } = useSelector((state) => state.employeeState);
    const dispatch = useDispatch();

    const removeEmployee = (id) => ({
        type: 'REMOVE_EMPLOYEE',
        payload:  id ,
    });

    const handleRemoveEmployee = (id) => {
        // Dispatch the removeEmployee action with the employeeId
        dispatch(removeEmployee(id));
        
    };

    return (
        <>
            <h2 id="displayDiv">List Of Employees</h2>
            <div id="display">
                <table id="homeDisplay">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Last Name</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employee.map((emp) => (
                            <tr key={emp.id}>
                                <td>{emp.id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.lastName}</td>
                                <td><button onClick={() => handleRemoveEmployee(emp.id)}>Remove</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Home;