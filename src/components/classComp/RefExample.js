import React, {Component} from "react";
import "../../index.css";

/**
 * Refs make it possible to access DOM nodes directly within react. Then, you can do anything with the react DOM nodes.
 * Refs can be implemented in two ways :
 * 1. Using React.createRef()
 * 2. Using callback refs - this is older way
 * */
class RefExample extends Component {


    constructor(props) {
        super(props);

        this.inputRef = React.createRef();

        this.cbRef = null;
        this.setCbRef = (element) => {
            this.cbRef = element;
        }
    }

    componentDidMount() {
        console.log(this.inputRef);

        this.inputRef.current.focus();

        // Uncomment below to see callback ref in action but comment above line which uses React.createRef
        // console.log(this.cbRef);
        // if (this.cbRef){
        //     this.cbRef.focus();
        // }

    }


    render() {

        return (
            <>

                <h1 className="heading">Refs example</h1>

                <h2 className="heading">1. Using React.createRef</h2>
                <div className="centerContent">
                    <input id="myText1" name="myText1" type="text" ref={this.inputRef}/>
                </div>


                <h2 className="heading">2. Using Callback</h2>
                <div className="centerContent">
                    <input id="myText2" name="myText2" type="text" ref={this.setCbRef}/>
                </div>
            </>

        );
    }
}

export default RefExample;