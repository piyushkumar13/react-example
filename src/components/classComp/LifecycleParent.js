import React, {Component} from "react";
import "../../index.css";
import LifecycleChild from "./LifecycleChild";

/**
 * Lifecycle methods are divided into four phases :
 *
 * Mounting - Mounting lifecycle methods are called when components are being created and inserted into the DOM.
 *      1. constructor
 *      2. getDerivedStateFromProps
 *      3. render
 *      4. componentDidMount
 *
 * Updating - Updating lifecycle methods are called when components are being re-rendered as a result of changes to either its props or state.
 *      1. getDerivedStateFromProps
 *      2. shouldComponentUpdate
 *      3. render
 *      4. getSnapshotBeforeUpdate
 *      4. componentDidUpdate
 *
 * Unmounting - Unmounting lifecycle methods are called when components are being removed from DOM.
 *      1. componentWillUnmount
 *
 * Error Handling - Error handling lifecycle methods are called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.
 *      1. getDerivedStateFromError
 *      2. componentDidCatch
 * */
class LifecycleParent extends Component {

    /**
     * A special function that will get called whenever a new component is created.
     * Constructor is used for intializing state and binding event handlers.
     * We should not do anything which cause side effects, for example : HTTP requests.
     * */
    constructor(props) {
        super(props);

        this.state = {

            name: "Piyush"
        }

        this.changeState = this.changeState.bind(this);
        console.log("LifecycleParent : Mount Phase : Constructor is called");
    }

    changeState() {
        this.setState({
            city: "Bangalore"
        });
    }

    /**
     * Rarely used method. This method is used when the state of the component depends on changes in props over time.
     * Since this is a static method, you dont have access to "this" keyword.
     * You can set the state in this method, by just returning the object which represents the new state.
     * We should not do anything which cause side effects, for example : AJAX calls - HTTP requests.
     * This method is also called every time when a component is re-rendered in "Update" phase.
     * */
    static getDerivedStateFromProps(props, state) {

        console.log("LifecycleParent : Mount and Update Phase : getDerivedStateFromProps is called with ", props, state);
        return {
            name: "Piyush Kumar"
        };
    }

    /**
     * This just reads props and state and just return JSX.
     * We should not do changing the state of a component or interact with DOM or make AJAX calls.
     * After this method, child component lifecycle methods also get executed.
     * */
    render() {
        console.log("LifecycleParent : Mount and Update Phase : render is called with state ", this.state)
        return (
            <>
                <h1 className="heading"> LifecycleParent Methods</h1>
                <div className="centerContent">
                    <button onClick={this.changeState}>Click Me</button>
                </div>
                <LifecycleChild/>
            </>);
    }

    /**
     * This method invoked immediately after a component and all its children components have been rendered to the DOM.
     * This method is the perfect place to cause side effects. Ex - interact with the DOM or perform any AJAX calls to load data.
     * */
    componentDidMount() {
        console.log("LifecycleParent : Mount Phase : componentDidMount is called")
    }



    /**
     * This method dictates whether the component should re-render or not.
     * By default, all class components will re-render whenever components receive props or their state changes.
     * Basically, "Component" class always returns true.
     * But "PureComponent" implements a shallow comparison on props and state and returns true if any
     * props or states have changed.
     *
     * We should not do anything which cause side effects, for example : AJAX calls - HTTP requests.
     * We should not call the setState method inside this.
     *
     * This method is basically used for performance optimization since it can avoid re-rendering cycles.
     * */
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("LifecycleParent : Update Phase : shouldComponentUpdate is called with ", nextProps, nextState, nextContext)
        return true;
    }

    /**
     * This is a rarely used method.
     * This method is called right before the changes from the virtual DOM are to be reflected in the DOM.
     * This method will return either null or return value. Returned value will be passed as the third parameter to the next method i.e componentDidUpdate.
     * */
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifecycleParent : Update Phase : getSnapshotBeforeUpdate is called with ", prevProps, prevState)
        return null;
    }

    /**
     * This method is called after the render is finished in the re-render cycle.
     * This method is the perfect place to cause side effects. Ex - perform any AJAX calls to load data.
     * But before making the AJAX calls, you need to compare previous prop or state with the new props and then decide whether to make the AJAX call or not.
     * */
    componentDidUpdate(prevProps, prevState, snapshot) {

        console.log("LifecycleParent : Update Phase : componentDidUpdate is called with ", prevProps, prevState, snapshot)

    }
}

export default LifecycleParent;