import { useState } from "react";
import Display from "./Display";
import { useDispatch } from "react-redux";

const Sidebar = (props) => {
    const dispatch = useDispatch();

    return (
        <>
            <div id="sidebar">
                <h2>INNOGENT</h2>
                <ul><button onClick={() => dispatch({type: "home"})}>Home</button></ul>
                <ul><button onClick={() => dispatch({type: "add_company"})}>Add Company</button></ul>
                <ul><button onClick={() => dispatch({type: "update"})}>Update</button></ul>
                <ul><button onClick={() => dispatch({type: "delete"})}>Delete</button></ul>
            </div>
            
            
        </>
    )
}
export default Sidebar;