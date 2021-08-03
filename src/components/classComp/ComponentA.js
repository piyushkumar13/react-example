import React, {Component} from 'react';
import "../../index.css"
import ComponentB from "./ComponentB";
import {UserProvider} from "./userContext";

class ComponentA extends Component {
    render() {
        return (
            <>
                <h1 className="heading">Component A</h1>

                <UserProvider value="Piyush">
                    <ComponentB/>
                </UserProvider>

            </>
        );
    }
}

export default ComponentA;