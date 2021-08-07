import React, {Component} from 'react';
import axios from "axios";
import "../../index.css";

class HttpGetReqExample extends Component {

    constructor(props) {
        super(props);

        this.state = {
            response: []
        }
    }

    componentDidMount() {

        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                console.log("Response is ::: ", response);
                this.setState({
                    response: response.data
                })
            })
            .catch(error => {
                console.log("Error is ::: ", error)
            });
    }

    render() {

        const {response} = this.state;

        return (
            <>
                <h1 className="heading">HTTPGetReqExample</h1>
                {response.map(r => {
                    return (
                        <div key={r.id} className="centerContent">
                            <div>{r.title}</div>
                        </div>
                    )
                })}
            </>
        );
    }
}

export default HttpGetReqExample;