import "../../index.css";
import {useReducer} from "react";

const ReducerCounterWithObj = () => {

    const initialState = {
        firstCounter: 0,
        secondCounter: 0
    };

    const reducerFn = (state, action) => {

        switch (action.type) {
            case "incrementOne" :

                return {
                    ...state,
                    firstCounter: state.firstCounter + action.jumpBy
                };


            case "decrementOne" :
                return {
                    ...state,
                    firstCounter: state.firstCounter - action.jumpBy
                };


            case "incrementTwo" :
                return {
                    ...state,
                    secondCounter: state.secondCounter + action.jumpBy
                };


            case "decrementTwo" :
                return {
                    ...state,
                    secondCounter: state.secondCounter - action.jumpBy
                };

            case "reset" :
                return initialState;

            default:
                return state;
        }
    }

    const [countObj, dispatch] = useReducer(reducerFn, initialState);


    return (
        <>
            <h1 className="heading">UseReducer With Object as State Example</h1>

            <div className="centerContent">
                <span>CountOne is : {countObj.firstCounter}</span>
                &nbsp; <span>CountTwo is : {countObj.secondCounter}</span>
            </div>

            <div className="centerContent">
                <button onClick={() => dispatch({type: "incrementOne", jumpBy: 5})}>IncrementOne</button>
            </div>


            <div className="centerContent">
                <button onClick={() => dispatch({type: "decrementOne", jumpBy: 5})}>DecrementOne</button>
            </div>


            <div className="centerContent">
                <button onClick={() => dispatch({type: "incrementTwo", jumpBy: 5})}>IncrementTwo</button>
            </div>


            <div className="centerContent">
                <button onClick={() => dispatch({type: "decrementTwo", jumpBy: 5})}>DecrementTwo</button>
            </div>


            <div className="centerContent">
                <button onClick={() => dispatch({type: "reset", jumpBy: 5})}>Reset Count</button>
            </div>
        </>
    );

}

export default ReducerCounterWithObj;