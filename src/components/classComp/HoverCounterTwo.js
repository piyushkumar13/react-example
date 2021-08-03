import React, {Component} from "react";
import "../../index.css";

class HoverCounterTwo extends Component{

    render() {

        const {count, increment} = this.props;

        console.log(this.props);
        console.log("count val ", count);
        return (
            <>
                <h1 className="heading"> Hover Counter Render Props Example</h1>
                <div className="centerContent">
                    <h2 onMouseOver={increment}>Hovered {count} times</h2>
                </div>

            </>
        );
    }
}

export default HoverCounterTwo;

