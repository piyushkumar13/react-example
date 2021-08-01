import React, {Component} from "react";
import "../../index.css";

class MyEventHandlerExample extends Component {

    constructor(props) {
        super(props);

        this.state = {
            message1: "Hello!! ",
            message2: "Hello!! ",
            message3: "Hello!! ",
            message4: "Hello!! "
        }

        this.changeMessageWay3 = this.changeMessageWay3.bind(this);
    }

    changeMessageWay1() {
        this.setState({
            message1: this.state.message1 + this.props.description1
        });
    }

    changeMessageWay2() {
        this.setState({
            message2: this.state.message2 + this.props.description2
        });
    }

    changeMessageWay3() {
        this.setState({
            message3: this.state.message3 + this.props.description3
        });
    }

    changeMessageWay4 = () => {
        this.setState({
            message4: this.state.message4 + this.props.description4
        });
    }


    render() {

        return (

            <>
                <h1 className="heading"> Different Ways of Binding EventHandlers</h1>
                <h2 className="heading"> 1. {this.props.description1}</h2>
                <div className="centerContent">

                    This is not recommended way since render method gets called on each state change <br/>
                    i.e whenever setState gets called and this render method will cost the generation of brand new <br/>
                    eventhandler method on each render method call.
                </div>
                <br/>
                <div className="centerContent">
                    <button onClick={this.changeMessageWay1.bind(this)}> Click Me</button> &nbsp;
                    Message is &nbsp; <b>{this.state.message1}</b>
                </div>



                <h2 className="heading"> 2. {this.props.description2} </h2>
                <div className="centerContent">

                    This is also not recommended way since it is similar to way 1.
                </div>
                <br/>
                <div className="centerContent">
                    <button onClick={() => this.changeMessageWay2()}> Click Me</button> &nbsp;
                    Message is &nbsp; <b>{this.state.message2}</b>
                </div>



                <h2 className="heading"> 3. {this.props.description3} </h2>
                <div className="centerContent">

                    This is the recommended way since happens once in the constructor.
                </div>
                <br/>
                <div className="centerContent">
                    <button onClick={this.changeMessageWay3}> Click Me</button> &nbsp;
                    Message is &nbsp; <b>{this.state.message3}</b>
                </div>



                <h2 className="heading"> 4. {this.props.description4} </h2>
                <div className="centerContent">

                    This is also a good way.
                </div>
                <br/>
                <div className="centerContent">
                    <button onClick={this.changeMessageWay4}> Click Me</button> &nbsp;
                    Message is &nbsp; <b>{this.state.message4}</b>
                </div>

            </>

        );

    }

}

export default MyEventHandlerExample;