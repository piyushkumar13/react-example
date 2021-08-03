import React, {Component} from 'react';
import "../../index.css"
import {UserConsumer} from "./userContext"

class ComponentC extends Component {

    render() {
        return (
            <>
                <UserConsumer>
                    {
                        (name) => {
                            return <h1 className="heading">Component C - {name}</h1>
                        }
                    }
                </UserConsumer>

            </>
        );
    }
}

export default ComponentC;