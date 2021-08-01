import React, {Component} from "react";
import "../../index.css"


class ChildComp extends Component{

    constructor(props) {
        super(props);

    }


    render() {
        return (
            <>

                <div className="centerContent">
                    <button onClick={this.props.greetHandler}> Click Me !!</button>
                </div>
                <p className="centerContent"> Message is {this.props.message}</p>

            </>
        );
    }
}

export default ChildComp;