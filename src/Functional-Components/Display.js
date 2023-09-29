import { useSelector } from "react-redux";
import AddCompany from "./AddCompany";
import Delete from "./Delete";
import Home from "./Home"
import Update from "./Update";
import 'bootstrap/dist/css/bootstrap.min.css';

const Display = () => {
    const {option} = useSelector((state) => state.displayOptions)
    console.log(option)
    return(
        <>
            <div>
                {option === "home" ? <Home /> : null}
                {option === "add_company" ? <AddCompany /> : null}
                {option === "update" ? <Update /> : null}
                {option === "delete" ? <Delete /> : null}
            </div>
        </>
    )
}
export default Display;