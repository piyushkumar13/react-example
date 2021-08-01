import React, {Component} from "react";
import "../../index.css"

class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {

            inputText: "",
            subjects: "",
            sports: [],
            house: "Nehru"
        }

        this.submitHandler = this.submitHandler.bind(this);
        this.changeInputTextHandler = this.changeInputTextHandler.bind(this);
        this.changeRadioHandler = this.changeRadioHandler.bind(this);
        this.changeCheckBoxHandler = this.changeCheckBoxHandler.bind(this);
        this.changeSelectHandler = this.changeSelectHandler.bind(this);
    }

    submitHandler(event) {

        const {inputText, subjects, sports, house} = this.state;

        let message = `Form submitted with values : \n inputText : ${inputText} \n Subject : ${subjects} \n Sports : ${sports} \n House : ${house}`
        alert(message)
        event.preventDefault();
        console.log(this.state);
    }

    changeInputTextHandler(event) {

        this.setState({
            inputText: event.target.value
        });
    }

    changeRadioHandler(event) {

        this.setState({
            subjects: event.target.value
        })
    }

    changeCheckBoxHandler(event) {

        this.setState((prevState) => {
            let sports = prevState.sports;
            sports.push(event.target.value);

            return {sports: sports}
        })
    }

    changeSelectHandler(event) {

        this.setState({
            house: event.target.value
        })

    }

    render() {
        return (
            <>

                <h2 className="heading"> Forms Example</h2>

                <div className="centerContent">
                    <form onSubmit={this.submitHandler} className="formStyling">

                        <div>
                            <label htmlFor="name"> Enter your name : </label>
                            <input id="name" type="text" value={this.state.inputText}
                                   onChange={this.changeInputTextHandler}/>
                        </div>


                        <div>
                            <p>Specify your subjects : </p>

                            <input type="radio" id="Science" name="Subjects" value="Science"
                                   onClick={this.changeRadioHandler}/>
                            <label htmlFor="Science">Science</label><br/>

                            <input type="radio" id="Commerce" name="Subjects" value="Commerce"
                                   onClick={this.changeRadioHandler}/>
                            <label htmlFor="Commerce">Commerce</label><br/>

                            <input type="radio" id="Arts" name="Subjects" value="Arts"
                                   onClick={this.changeRadioHandler}/>
                            <label htmlFor="Arts">Arts</label><br/>
                        </div>


                        <div>
                            <p> Select your interested sports : </p>

                            <input type="checkbox" id="cricket" name="cricket" value="cricket"
                                   onChange={this.changeCheckBoxHandler}/>
                            <label htmlFor="cricket">Cricket</label><br/>

                            <input type="checkbox" id="basketball" name="basketball" value="basketball"
                                   onChange={this.changeCheckBoxHandler}/>
                            <label htmlFor="basketball">Basketball</label><br/>

                            <input type="checkbox" id="football" name="football" value="football"
                                   onChange={this.changeCheckBoxHandler}/>
                            <label htmlFor="football">Football</label><br/>
                        </div>


                        <div>
                            <p><label htmlFor="house">Choose your house:</label></p>
                            <select id="house" name="house" value={this.state.house}
                                    onChange={this.changeSelectHandler}>
                                <option value="Nehru">Nehru</option>
                                <option value="Gandhi">Gandhi</option>
                            </select>
                        </div>


                        <br/>
                        <div>
                            <button> Submit</button>
                        </div>

                    </form>
                </div>

            </>

        );
    }

}

export default Form;