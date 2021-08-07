import React, {useMemo, useState} from 'react';
import "../../index.css";

const UseMemoExample = () => {

    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementCountOne = () => {
        setCounterOne(counterOne + 1);

        /*Lets add some slowness to this function call */
        let i = 0
        while (i < 2000000000) i++;
    }


    const incrementCountTwo = () => {
        setCounterTwo(counterTwo + 1);
    }

    const isEven = useMemo(() => {
        return counterOne % 2 === 0;
    },[counterOne]); // counterOne is the desired state when there is a change in it, then only isEven should get called.


    /**
     * Due to the slowness introduced in one state will slow down other components to respond since render method re-renders
     * when there is state change and all the methods in the jsx will be computed like isEven here.
     *
     * Here when counterTwo state changes, the components re-renders and isEven will be again called(though on counterOne still it will be call since part of jsx),
     * therefore will slow down button 2 rendering.
     * Here, we can make use of useMemo - basically, it does memoization of the value i.e caching of the value and it will get updated only when the desired counter is changed.
     * useMemo used for optimization. See above how to use useMemo
     * */
    return (
        <>

            <h1 className="heading">Use Memo Hook Example</h1>

            <div className="centerContent">
                <button onClick={incrementCountOne}>Counter One - {counterOne}</button>
                <label>Value is {isEven ? "Even" : "Odd"}</label>
            </div>

            <div className="centerContent">
                <button onClick={incrementCountTwo}>Counter two - {counterTwo}</button>
            </div>

        </>
    );
};

export default UseMemoExample;