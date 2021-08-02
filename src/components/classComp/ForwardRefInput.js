import React, {Component} from "react";
import "../../index.css";


const FRInput = React.forwardRef((props, ref) => {

    return (
        <>
            <div className="centerContent">
                <input name="myInputBox1" type="text" ref={ref}/>
            </div>
        </>
    );
});

export default FRInput;


class ForwardRefInput extends Component {

    constructor(props) {
        super(props);

        this.inputRef = React.createRef();
    }


    render() {

        const {innerRef} = this.props;

        return (
            <>
                <div className="centerContent">
                    <input name="myInputBox2" type="text" ref={innerRef}/>
                </div>
            </>
        );

    }
}

export {ForwardRefInput};