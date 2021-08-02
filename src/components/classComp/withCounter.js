import React, {Component} from "react";

const withCounter = (WrappedComponent) => {


    class withCounter extends Component {

        constructor(props) {
            super(props);

            this.state = {
                counter: 0
            }
        }

        incrementCounter = () => {

            this.setState((prevState) => {

                return {
                    counter: prevState.counter + 1
                }
            });
        }

        render() {

            return (
                <>
                    <WrappedComponent countVal={this.state.counter} incrementCounter={this.incrementCounter}/>
                </>
            );
        }
    }

    return withCounter;
}

export default withCounter;