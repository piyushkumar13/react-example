import React, {Component} from "react";
import "../../index.css";

class LifecycleChild extends Component {

    constructor(props) {
        super(props);

        this.state = {

            lastName: "Kumar"
        }

        console.log("LifecycleChild : Mount Phase : Constructor is called");
    }


    static getDerivedStateFromProps(props, state) {
        console.log("LifecycleChild : Mount and Update Phase : getDerivedStateFromProps is called with ", props, state);

        return null;
    }

    render() {
        console.log("LifecycleChild : Mount and Update Phase : render is called with state ", this.state)
        return <h1 className="heading"> LifecycleChild Methods</h1>
    }

    componentDidMount() {
        console.log("LifecycleChild : Mount Phase : componentDidMount is called")
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("LifecycleChild : Update Phase : shouldComponentUpdate is called with ", nextProps, nextState, nextContext)
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifecycleChild : Update Phase : getSnapshotBeforeUpdate is called with ", prevProps, prevState)
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        console.log("LifecycleChild : Update Phase : componentDidUpdate is called with ", prevProps, prevState, snapshot)
    }
}

export default LifecycleChild;