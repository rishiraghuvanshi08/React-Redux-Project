import { combineReducers } from "redux";
import EmployeeReducer from "./EmployeeReducer";
import DisplayReducer from "./DisplayReducer";

const rootReducer = combineReducers({
    employeeState: EmployeeReducer,
    displayOptions: DisplayReducer,
})

export default rootReducer;