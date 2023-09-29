import { useSelector } from "react-redux";

const Update = () => {
    const { employee } = useSelector((state) => state.employeeState)
    const id = useSelector((state) => state.displayOptions.id);

    const emp = employee.filter((emp) => emp.id === id);
    console.log(emp);

    return(
        <>
            <div id="unique">This is Update.. {emp[0].name} .. {emp[0].id} .. {emp[0].lastName}</div>
        </>
    )
}
export default Update;