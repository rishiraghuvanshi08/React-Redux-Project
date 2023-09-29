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
            return {...state, option: "update"}
        }
        case "delete":{
            return {...state, option: "delete"}
        }
        default: return state;
    }
}
export default DisplayReducer;