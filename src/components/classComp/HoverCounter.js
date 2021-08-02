import React, {Component} from "react";
import "../../index.css";
import withCounter from "./withCounter";

class HoverCounter extends Component{

    render() {

        const {countVal, incrementCounter} = this.props;

        console.log(this.props);
        console.log("count val ", countVal);
        return (
            <>
                <h1 className="heading"> Hover Counter Higher Order Example</h1>
                <div className="centerContent">
                    <h2 onMouseOver={incrementCounter}>Hovered {countVal} times</h2>
                </div>

            </>
        );
    }
}

export default withCounter(HoverCounter);

