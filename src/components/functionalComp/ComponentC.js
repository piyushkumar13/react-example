import {useContext} from "react";
import "../../index.css";
import {EmployeeContext, UserContext} from "./App";

const ComponentC = () => {

    let userContext = useContext(UserContext);
    let empContext = useContext(EmployeeContext);

    return (
        <>
            <h1 className="heading">Use Context Example - Component C</h1>
            <div className="centerContent">
                User Name is : <b>{userContext}</b> &nbsp; Employee Name is : <b>{empContext}</b>
            </div>
        </>
    );
};

export default ComponentC;