import "../../index.css";
import {useReducer} from "react";

const ReducerCounter = () => {

    const initialState = 0;

    const reducerFn = (state, action) => {

        switch (action) {
            case "increment" :
                return state + 1;


            case "decrement" :
                return state - 1;

            case "reset" :
                return initialState;

            default:
                return state;
        }
    }

    const [count, dispatch] = useReducer(reducerFn, initialState);


    return (
        <>

            <h1 className="heading">UseReducer Simple Example</h1>

            <div className="centerContent">
                <span>Count is : {count}</span>
            </div>

            <div className="centerContent">
                <button onClick={() => dispatch("increment")}>Increment Count</button>
            </div>


            <div className="centerContent">
                <button onClick={() => dispatch("decrement")}>Decrement Coun</button>
            </div>


            <div className="centerContent">
                <button onClick={() => dispatch("reset")}>Reset Count</button>
            </div>
        </>
    );

}

export default ReducerCounter;