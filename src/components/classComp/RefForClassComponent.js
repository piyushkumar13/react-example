import React, {Component} from "react";
import "../../index.css";
import RefInput from "./RefInput";

class RefForClassComponent extends Component {

    constructor(props) {
        super(props);

        this.compRef = React.createRef();
    }

    clickHandler = () => {
        this.compRef.current.focusInput();
    };

    render() {

        return (

            <>

                <h1 className="heading">Refs with Class Component Example</h1>
                <RefInput ref={this.compRef}/>
                <br/>
                <div className="centerContent">
                    <button onClick={this.clickHandler}>Focus</button>

                </div>
            </>

        );

    }
}

export default RefForClassComponent;