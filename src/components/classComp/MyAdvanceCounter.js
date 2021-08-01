import React, {Component} from "react";
import "../../index.css"

class MyAdvanceCounter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    changeCount() {

        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        }, () => console.log("The value is ", this.state.count))

    }

    incrementByFive() {

        /* React clubs all the consecutive setState calls in lieu of optimization. If we are relying on previous state value
         * We should not just call setState method with an object rather call setState method which accepts a function with previousState value.
         * */

        this.changeCount();
        this.changeCount();
        this.changeCount();
        this.changeCount();
        this.changeCount();
    }


    render() {

        /* Note that we have wrapped the eventhandler function call in the arrow function instead of using this.incrementByFive directly.
         * Because 'this' is not available in eventhandler function. This is javascript concept. Using arrow function to make 'this' keyword
         * available within eventhandler function is one of the way. */

        return (
            <>
                <h1 className="heading"> This Is Advance Counter Example</h1>
                <div className="img_styling">Counter value is {this.state.count} &nbsp;
                    <button onClick={() => this.incrementByFive()}>Click Me!!</button>
                </div>
            </>
        );
    }


}

export default MyAdvanceCounter;