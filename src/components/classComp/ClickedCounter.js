import React, {Component} from "react";
import "../../index.css";
import withCounter from "./withCounter";

/**
 * Higher order component is a pattern that can be used to specify some common functionalities with can be added to the regular components.
 * Basically, its like a decorator pattern.
 * With this method, you dont need to reimplement the same thing in each and every component which requires that functionality.
 * */
class ClickedCounter extends Component{

    render() {

        const {countVal, incrementCounter} = this.props;

        console.log(this.props);
        console.log("count val ", countVal);
        return (
            <>
                <h1 className="heading"> Clicked Counter Higher Order Example</h1>
                <div className="centerContent">
                    <button onClick={incrementCounter}>Clicked {countVal} times</button>
                </div>

            </>
        );
    }
}

/**
 *  We can also pass other parameters to this function call like incrementValue and make the withCounter function to accept that value
 *  and that value can be used to specify by what increment value we need to increment.
 * */
export default withCounter(ClickedCounter);

