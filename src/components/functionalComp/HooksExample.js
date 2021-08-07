import React, {useState} from 'react';
import "../../index.css";


const HooksExample = () => {

    let [count, setCount] = useState(0);
    let [time, setTime] = useState();

    time = new Date().toLocaleTimeString();

    const handleClick = () => {

        console.log("Count is ::: " + count)

        setCount(++count);
    }

    setInterval(() => {
        time = new Date().toLocaleTimeString();
        setTime(time);
    }, 1000)

    return (
        <>
            <h1 className="heading">State in Functional Component Example</h1>


            <div className="centerContent">

                Time is ::: {time}

            </div>

            <br/>

            <div className="centerContent">

                <button onClick={handleClick}> Clicked {count}</button>

            </div>

        </>
    );
};

export default HooksExample;