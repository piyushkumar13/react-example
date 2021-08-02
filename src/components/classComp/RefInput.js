import React, {Component} from "react";
import "../../index.css";

class RefInput extends Component {

    constructor(props) {
        super(props);

        this.inputRef = React.createRef();
    }

    focusInput() {
        this.inputRef.current.focus();
    }

    render() {

        return (
            <>
                <div className="centerContent">
                    <input type="text" ref={this.inputRef}/>
                </div>
            </>
        );

    }
}

export default RefInput;