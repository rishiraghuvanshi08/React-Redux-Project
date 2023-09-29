import { createStore } from "redux";
import rootReducer from "../Reducers/rootReducer";

const enhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const Store = createStore(rootReducer, enhancers);