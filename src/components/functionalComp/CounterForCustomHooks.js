import React from 'react';
import useCounter from "./useCounter";
import "../../index.css";

const CounterForCustomHooks = () => {

    const [counterVal, incrementCount, decrementCount, resetCount] = useCounter(0, 1);

    return (
        <>
            <h1 className="heading">Custom Hooks Example - 2</h1>

            <div className="centerContent">
                Counter is {counterVal}
            </div>

            <div className="centerContent">
                <button onClick={incrementCount}>Increment</button>
            </div>

            <div className="centerContent">
                <button onClick={decrementCount}>Decrement</button>
            </div>

            <div className="centerContent">
                <button onClick={resetCount}>Reset</button>
            </div>

        </>
    );
};

export default CounterForCustomHooks;