import React, {Component} from "react";
import "../../index.css";

class ErrorBoundary extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        }
    }

    /**
     * This method is used to update the state after an error is thrown, which then can be used to render fallback UI.
     * */
    static getDerivedStateFromError(error) {

        return {
            hasError: true
        }
    }

    render() {

        if (this.state.hasError) {
            return <h1>Something went wrong</h1>
        }
        return this.props.children; // Didnt get what this is doing
    }

    /**
     * This method is used to log the error information.
     * */
    componentDidCatch(error, errorInfo) {
        console.log(error);
        console.log(errorInfo);
    }
}

export default ErrorBoundary;

function Hero(props) {

    if (props.heroName === "Joker") {
        throw new Error("Not a hero");
    }

    return (
        <>
            <h1>{props.heroName}</h1>
        </>
    );
}

export {Hero};
