import React, {Component} from "react";
import "../../index.css"

class RegularComp extends Component {

    render(){

        console.log("Regular Component rendering");
        return <h1 className="heading">Regular Component {this.props.providedName}</h1>
    }

}

export default RegularComp;