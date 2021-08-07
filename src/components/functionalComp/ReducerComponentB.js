import React from 'react';
import ReducerComponentC from "./ReducerComponentC";
import ReducerComponentD from "./ReducerComponentD";
import "../../index.css";

const ReducerComponentB = () => {
    return (
        <>
            <h1 className="heading">Component B</h1>
            <ReducerComponentC/>
            <ReducerComponentD/>
        </>
    );
};

export default ReducerComponentB;