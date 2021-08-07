import React, {useEffect, useState} from 'react';
import "../../index.css";
import axios from "axios";

const HttpGetReqExample = () => {

    let [myObj, setObj] = useState({response: []});

    /**
     * useEffect() - can work as componentDidMount, componentDidUpdate, componentWillUnmount
     * 1. componentDidMount : Empty array [] is required, to make call only once(which replicates componentDidMount),
     *
     * 2. componentDidUpdate : If we dont give the 2nd parameter it will result into infinite loop calling between useEffect() <-> render() here because state is getting change,
     * which will be similar to componentDidUpdate which gets calls after very update of the state. However, this infinite loop can be avoided
     * by comparing the current state with the previous state i.e we need to write logic in componentDidUpdate method i(prevState !== this.state.<whichever object>){...}
     * Similar, functionality can be achieved by just passing the object in [] of useEffect, it will automatically check whether state is changed or not. If
     * state is changed, then only useEffect will be called.
     *
     * 3. componentWillUnmount : if useEffect's function returns a function, that returned function will be called at unmounting phase, which will be similar to componentWillUnmount
     */
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                console.log("Response is ::: ", response);
                setObj({
                    response: response.data
                })
            })
            .catch(error => {
                console.log("Error is ::: ", error)
            });
    }, []);

    const {response} = myObj;

    return (
        <>
            <h1 className="heading">useEffect - HTTPGetReqExample</h1>
            {response.map(r => {
                return (
                    <div key={r.id} className="centerContent">
                        <div>{r.title}</div>
                    </div>
                )
            })}
        </>
    );
};

export default HttpGetReqExample;