import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Update = () => {
    const { employee } = useSelector((state) => state.employeeState)
    const id = useSelector((state) => state.displayOptions.id);
    const dispatch = useDispatch();

    const emp = employee.filter((emp) => emp.id === id);
    console.log(emp);

    const [formData, setFormData] = useState({
        id: emp[0].id,
        name: emp[0].name,
        lastName: emp[0].lastName,
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();

        const employeeData = {
            id: formData.id,
            name: formData.name,
            lastName: formData.lastName,
        };
        dispatch({ type: "UPDATE", payload: employeeData })
        dispatch({ type: "home" })
        setFormData({id: '', name: '', lastName: ''});
    }

    return (
        <>
            <div>This is Update.. {emp[0].name} .. {emp[0].id} .. {emp[0].lastName}</div>

            <div>
                <form className="col-5" id="addForm" onSubmit={handleOnSubmit}>
                    <div className="mb-3">
                        <input
                            type="number"
                            id="name"
                            name="name"
                            className="form-control"
                            defaultValue={formData.id}
                            onChange={handleChange}
                            placeholder="First Name"
                            readOnly
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            defaultValue={formData.name}
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
                            defaultValue={formData.lastName}
                            onChange={handleChange}
                            placeholder="Last Name"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="form-control" >Update Employee</button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Update;