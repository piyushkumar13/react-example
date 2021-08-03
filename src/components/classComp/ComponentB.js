import React, {Component} from 'react';
import "../../index.css"
import ComponentC from "./ComponentC";
import UserContext from "./userContext";

/**
 * Using contextType is an alternative approach instead of using UserProvider and UserConsumer.
 * But, it has two limitations i.e
 * It only works with class componenets.
 * You can subscribe to ony single context using contextType.
 * */
class ComponentB extends Component {

    /* Alternative way 2 */
    static contextType = UserContext;


    render() {
        return (
            <>
                <h1 className="heading">Component B {this.context}</h1>
                <ComponentC/>
            </>
        );
    }
}

/* Alternative way 1 */
// ComponentB.contextType = UserContext;

export default ComponentB;