import React, {Component} from "react";
import "../../index.css"
import PureComp, {MemoComponent} from "./PureComp";
import RegularComp from "./RegularComp";

class PureCompExample extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "Piyush"
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "Piyush"
            });

        }, 2000)
    }

    render() {

        console.log("******************* Parent Component ***********************")

        return (
            <>
                <h1 className="heading">PureCompExample</h1>
                <PureComp providedName={this.state.name}/>
                <RegularComp providedName={this.state.name}/>
                <MemoComponent providedName={this.state.name}/>
            </>
        );
    }
}

export default PureCompExample;