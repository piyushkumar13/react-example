import React from 'react';
import ReducerComponentB from "./ReducerComponentB";
import "../../index.css";

const ReducerComponentA = () => {
    return (
        <>

            <h1 className="heading">Component A</h1>
            <ReducerComponentB/>
        </>
    );
};

export default ReducerComponentA;