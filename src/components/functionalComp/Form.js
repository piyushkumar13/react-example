import {useState} from "react";
import "../../index.css";

const Form = () => {

    let [formObj, setFormField] = useState({
        name: "",
        emailId: "",
        city: ""
    });

    let {name, emailId, city} = formObj;

    const submitHandler = (event) => {

        event.preventDefault();
        let message = `Your submitted details \nYour name is : ${name} \nYour emailId is : ${emailId} \nYour city is : ${city}`;
        alert(message);
    }

    const changeInputTextHandler = (event) => {
        console.log("Previous state is :::: ", formObj);
        let {name, value} = event.target;

        console.log(name);
        console.log(value);


        setFormField(prevValue => {
            // let newObj = {
            //     ...prevValue,
            //     [name]: value
            // }
            //
            // console.log("New obj",newObj);

                return {
                    ...prevValue,
                    [name]: value
                };
            });

        /* All below code can be optimized to few lines as shown above */
        // if (name === "name"){
        //     setFormField((prevValue) => {
        //         return {
        //             name: value,
        //             emailId: prevValue.emailId,
        //             city: prevValue.city
        //         };
        //     });
        // }
        // else if (name === "emailId"){
        //     setFormField((prevValue) => {
        //         return {
        //             emailId: value,
        //             name: prevValue.name,
        //             city: prevValue.city
        //         };
        //     });
        //
        // }
        //
        // else if(name === "city"){
        //     setFormField((prevValue) => {
        //         return {
        //             city: value,
        //             emailId: prevValue.emailId,
        //             name: prevValue.name
        //         };
        //     });
        // }
    }

    return (
        <>
            <h2 className="heading"> Forms Example</h2>

            <div className="centerContent">
                <form onSubmit={submitHandler} className="formStyling">

                    <div>
                        <label htmlFor="name"> Enter your name : </label>
                        <input id="name" name="name" type="text" value={name}
                               onChange={changeInputTextHandler}/>
                    </div>


                    <div>
                        <label htmlFor="email"> Enter your email : </label>
                        <input id="email" name="emailId" type="email" value={emailId}
                               onChange={changeInputTextHandler}/>
                    </div>

                    <div>
                        <label htmlFor="city"> Enter your city : </label>
                        <input id="city" name="city" type="text" value={city}
                               onChange={changeInputTextHandler}/>
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

export default Form;