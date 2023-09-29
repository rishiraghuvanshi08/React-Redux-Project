import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Display from "./Display";
import Sidebar from "./Sidebar";

const AddCompany = () => {
    const { employee } = useSelector((state) => state.employeeState);
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        lastName: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const employeeData = {
            id: formData.id,
            name: formData.name,
            lastName: formData.lastName,
        };
        dispatch({ type: 'ADD_EMPLOYEE', payload: employeeData })
        setFormData({ id: '', name: '', lastName: '' });
        dispatch({type: "home"})
    };
    return (
        <>
            <h2 id="displayDiv">Add a New Employee</h2>
            <div id="outerDiv">
                <form className="col-5" id="addForm" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input
                            type="text"
                            id="id"
                            name="id"
                            className="form-control"
                            value={formData.id}
                            onChange={handleChange}
                            placeholder="ID"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="First Name"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            className="form-control"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Last Name"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="form-control" >AddEmp</button>
                    </div>
                </form>
            </div>
        </>
    );
}
export default AddCompany;







// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';

// const AddCompany = () => {
//     const dispatch = useDispatch();


//     const [formData, setFormData] = useState({
//         // Initialize your form fields here
//         empname: '',
//         surname: '',
//         dob: '',
//         // Add other fields as needed
//     });

//     const handleAddEmployee  = (formData) => {
//         return {
//             type: 'ADD_EMPLOYEE',
//             payload: formData,
//         };
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(e);
//         // Dispatch the action to save the form data to Redux
//         dispatch(handleAddEmployee(formData));
//     };

//     return (
//         <>
// <h2 id="displayDiv">Add a New Employee</h2>
// <div id="outerDiv">
//                 <form className="col-5" onSubmit={handleSubmit}>
//                     <div className="mb-3">
//                         <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="First Name"
//                             onChange={handleChange} />
//                     </div>
//                     <div className="mb-3">
//                         <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Last Name"
//                             onChange={handleChange} />
//                     </div>
//                     <div className="mb-3">
//                         <input type="date" className="form-control" id="exampleFormControlInput1"
//                             onChange={handleChange} />
//                     </div>
//                     <div className="mb-3">
//                         <input type="submit" className="form-control" id="exampleFormControlInput1" />
//                     </div>
//                 </form>
//             </div>
//         </>
//     )
// }
// export default AddCompany;