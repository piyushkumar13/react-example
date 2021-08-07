import React, {Component} from 'react';
import axios from "axios";
import "../../index.css";

class HttpPostReqExample extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputText1: "",
            inputText2: ""
        }
    }

    changeInputTextHandler1 = (event) => {

        this.setState({
            inputText1: event.target.value
        });
    }

    changeInputTextHandler2 = (event) => {

        this.setState({
            inputText2: event.target.value
        });
    }

    submitHandler = (event) => {
        event.preventDefault();

        console.log("Post form state is :: ", this.state);

        axios.post("https://jsonplaceholder.typicode.com/posts", this.state)
            .then((response) => {
                console.log("The response of post req is ::: ", response);
                this.setState({
                    response: response.data
                })
            })
            .catch((error) => {
                console.log("The error of post req is ::: ", error);
            })
    }


    render() {

        const {inputText1, inputText2, response} = this.state;

        return (
            <>
                <h1 className="heading">HTTPPostReqExample</h1>
                <div className="centerContent">
                    <form onSubmit={this.submitHandler} className="formStyling">
                        <div>
                            <label htmlFor="name"> Enter your name : </label>
                            <input id="name" type="text" value={inputText1}
                                   onChange={this.changeInputTextHandler1}/>
                        </div>

                        <div>
                            <label htmlFor="name"> Enter your City : </label>
                            <input id="name" type="text" value={inputText2}
                                   onChange={this.changeInputTextHandler2}/>
                        </div>

                        <div>
                            <button> Submit</button>
                        </div>
                    </form>


                </div>

                <br/>
                <div className="centerContent">
                {response ? <div>Your form is submitted. You details are id : {response.id}, name : {response.inputText1}, city : {response.inputText2}</div>:null}
                </div>
            </>
        );
    }
}

export default HttpPostReqExample;