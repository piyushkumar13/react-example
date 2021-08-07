import React, {useState} from 'react';
import "../../index.css";
import useDocumentTitle from "./useDocumentTitle";

const DocumentTitleOne = () => {

    const [count, setCount] = useState(0);

    useDocumentTitle(count); // This can be re-used in multiple components.
    return (
        <>
            <h1 className="heading">Custom Hooks Example - 1</h1>
            <div className="centerContent">
                <button onClick={() => setCount(count + 1)}>Clicked - {count}</button>
            </div>

        </>
    );
};

export default DocumentTitleOne;