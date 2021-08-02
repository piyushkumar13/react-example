import React, {Component} from "react";
import "../../index.css";
import FRInput, {ForwardRefInput} from "./ForwardRefInput";

class ForwardingRefExample extends Component {

    constructor(props) {
        super(props);

        this.inputRef1 = React.createRef();
        this.inputRef2 = React.createRef();
    }

    focusHandler1 = () => {
        console.log(this.inputRef1);
        this.inputRef1.current.focus();
    }

    focusHandler2 = () => {
        console.log(this.inputRef2);
        this.inputRef2.current.focus();
    }

    render(){

        return (
            <>
                <h1 className="heading">Forwarding Ref to Functional Component</h1>
                <FRInput ref={this.inputRef1}/>

                <div className="centerContent">
                    <button onClick={this.focusHandler1}>Focus</button>
                </div>



                <h1 className="heading">Forwarding Ref to Class Component</h1>
                <ForwardRefInput innerRef={this.inputRef2}/>

                <div className="centerContent">
                    <button onClick={this.focusHandler2}>Focus</button>
                </div>
            </>
        );
    }
}

export default ForwardingRefExample;