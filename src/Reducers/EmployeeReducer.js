const INITIAL_STATE = {
    employee: [
        { id: '1', name: "Rishi", lastName: "Raghuvanshi" },
        { id: '2', name: "Ayush", lastName: "Raghuvanshi" },
        { id: '3', name: "Abhi", lastName: "Patidar" },
        { id: '4', name: "Chirag", lastName: "Tongia" },
    ],
}

function EmployeeReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_EMPLOYEE': {
            return {
                employee: [...state.employee, action.payload]
            }
        }
        case 'REMOVE_EMPLOYEE':
            const employeeId = action.payload;
            return {
                ...state,
                employee: state.employee.filter((employee) => employee.id !== employeeId),
            };
        default: return state;
    }
}
export default EmployeeReducer;