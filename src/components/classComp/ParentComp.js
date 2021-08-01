import React, {Component} from "react";
import ChildComp from "./ChildComp";

class ParentComp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            message : "Piyush Kumar"
        }

        this.greetMethod = this.greetMethod.bind(this);

    }

    greetMethod(){

        alert("Hello " + this.state.message)
    }


    render() {

        return (
            <>
                <ChildComp greetHandler={this.greetMethod} message={this.state.message}/>
            </>

        );
    }

}

export default ParentComp;