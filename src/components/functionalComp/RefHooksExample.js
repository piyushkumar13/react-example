import React, {useEffect, useRef} from 'react';
import "../../index.css";

const RefHooksExample = () => {

    const inputRef = useRef(null);

    useEffect(()=>{
        inputRef.current.focus();
    });

    return (
        <>
            <h1 className="heading">Ref Hooks Example</h1>
            <div className="centerContent">
                <input type="text" ref={inputRef}/>
            </div>
        </>
    );
};

export default RefHooksExample;