import { act } from "react-dom/test-utils";

const value = {
    option: "home",
    id: '',
};

function DisplayReducer(state = value, action) {
    switch (action.type) {
        case "home":{
            return {...state, option: "home"};
        }
        case "add_company":{
            return {...state, option: "add_company"}
        }
        case "update":{
            const id = action.payload;
            console.log(id);
            return {...state, option: "update", id: action.payload}
        }
        case "delete":{
            return {...state, option: "delete"}
        }
        default: return state;
    }
}
export default DisplayReducer;