import React from 'react';
import "../../index.css";
import useInput from "./useInput";

const FormForCustomHooks = () => {

    const [name, bindName, resetName] = useInput('')
    const [city, bindCity, resetCity] = useInput('')

    const submitHandler = (event) => {
        event.preventDefault();

        let message = `Submitted values are \nname : ${name} \ncity : ${city}`;
        alert(message);
    }

    return (

        <>
            <h2 className="heading"> Custom Hooks Example - 3</h2>

            <div className="centerContent">
                <form onSubmit={submitHandler} className="formStyling">

                    <div>
                        <label htmlFor="name"> Enter your name : </label>
                        {/*How spread works in html tags : https://stackoverflow.com/questions/46113316/spread-operator-in-component-react/46113361*/}
                        <input id="name" name="name" type="text" {...bindName}/>
                    </div>

                    <div>
                        <label htmlFor="city"> Enter your city : </label>
                        <input id="city" name="city" type="text" {...bindCity}/>
                    </div>

                    <br/>
                    <div>
                        <button> Submit</button>
                    </div>

                </form>
            </div>
        </>
    );
};

export default FormForCustomHooks;