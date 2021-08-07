import "../../index.css";
import {useReducer} from "react";

const ReducerCounterMultiple = () => {

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

    const [countOne, dispatchOne] = useReducer(reducerFn, initialState);
    const [countTwo, dispatchTwo] = useReducer(reducerFn, initialState);


    return (
        <>

            <h1 className="heading">Multiple UseReducers Example</h1>

            <div className="centerContent">
                <span>Count is : {countOne}</span>
                &nbsp; <span>Count is : {countTwo}</span>
            </div>

            <div className="centerContent">
                <button onClick={() => dispatchOne("increment")}>IncrementOne</button>
            </div>


            <div className="centerContent">
                <button onClick={() => dispatchOne("decrement")}>DecrementOne</button>
            </div>


            <div className="centerContent">
                <button onClick={() => dispatchOne("reset")}>ResetOne</button>
            </div>




            <div className="centerContent">
                <button onClick={() => dispatchTwo("increment")}>IncrementTwo</button>
            </div>


            <div className="centerContent">
                <button onClick={() => dispatchTwo("decrement")}>DecrementTwo</button>
            </div>


            <div className="centerContent">
                <button onClick={() => dispatchTwo("reset")}>ResetTwo</button>
            </div>
        </>
    );

}

export default ReducerCounterMultiple;