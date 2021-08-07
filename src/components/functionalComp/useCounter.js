import {useState} from "react";

function useCounter(initialValue, jumpByVal){

    const [count, setCount] = useState(initialValue);

    const increment = () => {
        setCount(prevCount => prevCount + jumpByVal);
    }

    const decrement = () => {
        setCount(prevCount => prevCount - jumpByVal);
    }

    const reset = () => {
        setCount(initialValue);
    }

    return [count, increment, decrement, reset];
}

export default useCounter;