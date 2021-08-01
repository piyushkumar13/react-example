import React, {Component} from "react";


const heading = {
    color: 'blueviolet',
    textAlign: 'center',
    textTransform: 'capitalize',
    fontFamily: 'Rye, cursive'
};


class MyHeading extends Component {

    render() {

        return <h1 style={heading}> Example of Class Component</h1>;

    }
}


export default MyHeading;