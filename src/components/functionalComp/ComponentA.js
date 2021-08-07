import {EmployeeContext, UserContext} from "./App";
import "../../index.css";
import ComponentB from "./ComponentB";

const ComponentA = () => {

    return (
        <>
            <UserContext.Provider value="Piyush Kumar">
                <EmployeeContext.Provider value="pKumar">
                    <h1 className="heading">Use Context Example - Component A</h1>
                    <ComponentB/>
                </EmployeeContext.Provider>
            </UserContext.Provider>
        </>

    );

};

export default ComponentA;