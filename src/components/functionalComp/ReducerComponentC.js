import React, {useContext} from 'react';
import {counterContext} from "./App";
import "../../index.css";

const ReducerComponentC = () => {

    const count = useContext(counterContext);

    let {counter, countDispatch} = count;

    return (
        <>
            <h1 className="heading">Component C</h1>

            <div className="centerContent">

                <span>Count in ComponentC : {counter}</span> &nbsp;
                <button onClick={() => countDispatch("increment")}>ComponentC Increment</button>

            </div>

            <div className="centerContent">

                <span>Count in ComponentC : {counter}</span> &nbsp;
                <button onClick={() => countDispatch("decrement")}>ComponentC Decrement</button>

            </div>

            <div className="centerContent">

                <span>Count in ComponentC : {counter}</span> &nbsp;
                <button onClick={() => countDispatch("reset")}>ComponentC Decrement</button>

            </div>
        </>
    );
};

export default ReducerComponentC;