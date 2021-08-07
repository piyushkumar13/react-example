import React from 'react';
import {useHistory, useLocation, useParams} from "react-router";

// const ContactName = (props) => {
//     console.log("Contact Name prop is ::: ", props);
//
//     return (
//         <>
//             <h1 className="heading">Contact Name - {props.match.params.name}</h1>
//         </>
//     );
// };

/* Alternative way using hooks - useParam() */
const ContactName = () => {

    const {name} = useParams();
    const location = useLocation();
    const history = useHistory();

    console.log("The location is ::: ", location);
    console.log("The history is ::: ", history);

    const goToHomePage = () => {
        history.push("/");
    }

    const backPage = () => {
        history.goBack();
    }

    return (
        <>
            <h1 className="heading">Contact Name - {name}</h1>

            <div className="centerContent">

                    The location is ::: {location.pathname}
            </div>

            <div className="centerContent">
                <button onClick={goToHomePage}>Go to home page</button>
                <button onClick={backPage}>Back</button>

            </div>
        </>
    );
};

export default ContactName;