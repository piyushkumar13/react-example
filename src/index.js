import React from 'react';
import ReactDOM from 'react-dom';

// ReactDOM.render(<h1> This is first React Application </h1>, document.getElementById("root"));


/* ################### Different ways of rendering html ########################## */

// ReactDOM.render(<h1> This is first React Application </h1>, document.getElementById("root"));
//
// ReactDOM.render(React.createElement("h1", null, "This is first React Application-1"), document.getElementById("root"));
//
// let h1 = document.createElement("h1");
// h1.innerHTML = "This is first React Application-2";
// document.getElementById("root").appendChild(h1);


/* ################ Different Ways of Rendering multiple elements ##################*/

// ReactDOM.render( // This methond will add extra div under root div in index.html file. If you want to avoid this use other three methods
//     <div>
//         <h1> Example of Multiple elements in render method </h1>
//         <p>Way 1</p>
//     </div>,
//     document.getElementById("root"));
//
// ReactDOM.render([
//         <h1> Example of Multiple elements in render method </h1>,
//         <p>Way 2</p>
//     ],
//     document.getElementById("root"));
//
//
// ReactDOM.render(
//     <React.Fragment>
//         <h1> Example of Multiple elements in render method </h1>
//         <p>Way 3</p>
//     </React.Fragment>,
//     document.getElementById("root"));
//
//
// ReactDOM.render(
//     <>
//         <h1> Example of Multiple elements in render method </h1>
//         <p>Way 4</p>
//     </>,
//     document.getElementById("root"));


/* ################# Javascript Expression in JSX ################################## */

// const fistName = "Piyush"
// const lastName = "Kumar"
// ReactDOM.render(
//     <>
//         <h1> Example of Javascript Expressions in JSX </h1>
//         <p>My first name is {fistName}</p>
//         <p>My last name is {lastName}</p>
//         <p>My full name is {fistName + " " + lastName}</p>
//         <p>My full name is {fistName} {lastName}</p>
//         <div>Sum of two numbers is {3 + 4}</div>
//         <div>Date is {new Date().toDateString()}</div>
//         <div>Random number is {Math.random()}</div>
//     </>,
//     document.getElementById("root"));


/* ################# Javascript ES6 template literals in JSX ################################## */

// const fistName = "Piyush"
// const lastName = "Kumar"
// ReactDOM.render(
//     <>
//             <h1> Example of Javascript ES6 template literals in JSX </h1>
//             <p>My full name is {`${fistName} ${lastName}`}</p>
//     </>,
//     document.getElementById("root"));


/* ############### HTML attributes in JSX ##################################################### */

// const img1 = "https://picsum.photos/200/300"
// const img2 = "https://picsum.photos/250/350"
// const img3 = "https://picsum.photos/300/400"
// const link = "https://picsum.photos/300/400"
//
// ReactDOM.render(
//     <>
//         <h1 contentEditable="true"> Example of HTML attributes in JSX </h1>
//         <img src={img1} alt="ramdom image 1"/>
//         <img src={img2} alt="ramdom image 2"/>
//         <a href={link} target="_blank">
//         <img src={img3} alt="ramdom image 3"/>
//         </a>
//     </>,
//     document.getElementById("root"));


/* ############### External CSS in JSX ##################################################### */

// import './index.css';
// const img1 = "https://picsum.photos/200/300"
// const img2 = "https://picsum.photos/250/350"
// const img3 = "https://picsum.photos/300/400"
// const link = "https://picsum.photos/300/400"
//
// ReactDOM.render(
//     <>
//         <h1 className="heading"> Example of CSS in JSX </h1>
//         <div className="img_styling">
//         <img src={img1} alt="ramdom image 1"/>
//         <img src={img2} alt="ramdom image 2"/>
//         <a href={link} target="_blank">
//             <img src={img3} alt="ramdom image 3"/>
//         </a>
//         </div>
//     </>,
//     document.getElementById("root"));


/* ##################### Internal & Inline CSS in JSX ######################################### */

// const img1 = "https://picsum.photos/200/300"
// const img2 = "https://picsum.photos/250/350"
// const img3 = "https://picsum.photos/300/400"
// const link = "https://picsum.photos/300/400"
//
// const heading = {
//     color: 'blueviolet',
//     textAlign: 'center',
//     textTransform: 'capitalize',
//     fontFamily: 'Rye, cursive'
// };
//
// ReactDOM.render(
//     <>
//         <h1 style={heading}> Example of Internal & Inline CSS in JSX </h1>
//         <img src={img1} alt="ramdom image 1"/>
//         <img src={img2} alt="ramdom image 2"/>
//         <a href={link} target="_blank">
//             <img src={img3} alt="ramdom image 3"/>
//         </a>
//     </>,
//     document.getElementById("root"));


/* ##################### Dynamically adding CSS property in JSX ######################################### */

// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/250/350";
// const img3 = "https://picsum.photos/300/400";
// const link = "https://picsum.photos/300/400";
//
// const heading = {
//     color: 'blueviolet',
//     textAlign: 'center',
//     textTransform: 'capitalize',
//     fontFamily: 'Rye, cursive'
// };
//
// // const currentDate = new Date(2021, 7,31,21);
// const currentDate = new Date();
// let hour = currentDate.getHours();
// let message;
// const dateStyle = {};
// if (hour < 12){
//     dateStyle.color = "green";
//     message = "Good Morning !!"
// }
// else if (hour > 12 && hour < 17){
//     dateStyle.color = "orange";
//     message = "Good AfterNoon !!"
//
// }
// else if (hour > 17 && hour < 20){
//     dateStyle.color = "blue";
//     message = "Good Evening !!"
// }
// else {
//     dateStyle.color = "red"
//     message = "Good Night !!"
// }
//
// ReactDOM.render(
//     <>
//         <h1 style={heading}> Example of Dynamic CSS in JSX </h1>
//         <h1 style={heading}> Hi there, <span style={dateStyle}>{message}</span></h1>
//         <img src={img1} alt="ramdom image 1"/>
//         <img src={img2} alt="ramdom image 2"/>
//         <a href={link} target="_blank">
//             <img src={img3} alt="ramdom image 3"/>
//         </a>
//     </>,
//     document.getElementById("root"));


/* ##################### Functional Components Now start referring App.js for more examples ######################## */

// import App from "./components/functionalComp/App";
//
// ReactDOM.render( <App/>, document.getElementById("root"));


/* ##################### Class Components Now start referring App.js for more examples ######################## */

import App from "./components/classComp/App"

ReactDOM.render(<App/>, document.getElementById("root"));
