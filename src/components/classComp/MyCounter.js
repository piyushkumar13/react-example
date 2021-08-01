import React, {Component} from "react";
import "../../index.css"

class MyCounter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    changeCount() {

        this.setState({
            count: this.state.count + 1
        }, () => console.log("The value is ", this.state.count))

    }


    render() {

        /* Note that we have wrapped the eventhandler function call in the arrow function instead of using this.incrementByFive directly.
         * Because 'this' is not available in eventhandler function. This is javascript concept. Using arrow function to make 'this' keyword
         * available within eventhandler function is one of the way. */
        return (
            <>
                <h1 className="heading"> This Is Counter Example</h1>
                <div className="img_styling">Counter value is {this.state.count} &nbsp;
                <button onClick={() => this.changeCount()}>Click Me!!</button>
                </div>
            </>
        );
    }


}

export default MyCounter;