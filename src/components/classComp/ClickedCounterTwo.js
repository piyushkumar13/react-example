import React, {Component} from "react";
import "../../index.css";

class ClickedCounterTwo extends Component{

    render() {

        const {count, increment} = this.props;

        console.log(this.props);
        console.log("count val ", count);
        return (
            <>
                <h1 className="heading"> Clicked Counter Render Props Example</h1>
                <div className="centerContent">
                    <button onClick={increment}>Clicked {count} times</button>
                </div>

            </>
        );
    }
}

export default ClickedCounterTwo;

