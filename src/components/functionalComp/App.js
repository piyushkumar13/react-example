import MyHeading from "../classComp/MyHeading";

/* ##################### Functional Component Example ######################################### */

// import MyFavoriteHeading from './MyHeading'
// import MyStaticImgs from "./MyStaticImgs";
//
// function App() {
//
//     return (
//         <>
//             <MyFavoriteHeading/>
//             <MyStaticImgs/>
//         </>
//
//     );
// }
//
// export default App;


/* ##################### Props Example 1 ######################################### */

// import Image from './MyImage';
//
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/250/350";
// const img3 = "https://picsum.photos/300/400";
//
// function App() {
//
//     return (
//         <>
//             <Image imageSrc={img1} description="This is Image 1" altText="Random Image 1"/>
//             <Image imageSrc={img2} description="This is Image 2" altText="Random Image 2"/>
//             <Image imageSrc={img3} description="This is Image 3" altText="Random Image 3"/>
//
//         </>
//
//     );
// }
//
// export default App;


/* ##################### Props Example 2 ######################################### */

// import Image from './MyImage';
// import sampleData from '../../Sampledata'
//
// function App() {
//
//     return (
//         <>
//             <Image imageSrc={sampleData[0].imageSrc} description={sampleData[0].description} altText={sampleData[0].altText}/>
//             <Image imageSrc={sampleData[1].imageSrc} description={sampleData[1].description} altText={sampleData[1].altText}/>
//             <Image imageSrc={sampleData[2].imageSrc} description={sampleData[2].description} altText={sampleData[2].altText}/>
//         </>
//
//     );
// }
//
// export default App;


/* ##################### Props Example 3 ######################################### */

// import Image from './MyImage';
// import sampleData from '../../Sampledata'
//
// function nImage(val){
//
//     return <Image imageSrc={val.imageSrc} description={val.description} altText={val.altText} />
// }
//
// function App() {
//
//     return (
//         <>
//             {sampleData.map(nImage)}
//         </>
//
//     );
// }
//
// export default App;


/* ##################### Props Example 4 ######################################### */

// import Image from './MyImage';
// import sampleData from '../../Sampledata'
//
// function App() {
//
//     return (
//         <>
//             {
//                 sampleData.map((val) => <Image key={val.id} imageSrc={val.imageSrc} description={val.description} altText={val.altText}/>)
//             }
//         </>
//
//     );
// }
//
// export default App;



/* ##################### Props Example 4 ######################################### */

// import Image from './MyImage';
// import MyStaticImgs from "./MyStaticImgs";
// import sampleData from '../../Sampledata'
//
// const imageComp = "dynamic";
// const Images = () => {
//
//     if (imageComp === "static") {
//         return <MyStaticImgs/>
//     }
//     else if (imageComp === "dynamic"){
//         return  sampleData.map((val) => <Image key={val.id} imageSrc={val.imageSrc} description={val.description} altText={val.altText}/>)
//     }
// }
//
// function App() {
//
//     return (
//         <>
//             <Images/>
//             {/*{ imageComp === "static" ? <MyStaticImgs/> : sampleData.map((val) => <Image key={val.id} imageSrc={val.imageSrc} description={val.description} altText={val.altText}/>)}*/}
//         </>
//
//     );
// }
//
// export default App;


/* ##################### Hooks Example ######################################### */

// import HooksExample from "./HooksExample";
//
// function App() {
//
//     return (
//         <>
//             <MyHeading/>
//             <HooksExample/>
//         </>
//
//     );
// }
//
// export default App;


/* ##################### Hooks Example ######################################### */

// import Form from "./Form";
//
// function App() {
//
//     return (
//         <>
//             <MyHeading/>
//             <Form/>
//         </>
//
//     );
// }
//
// export default App;


/* ##################### UseContext Example ######################################### */

/* We cannot use useContext in class component, but there is a workaround : https://stackoverflow.com/a/57469716/5527839*/
// import ComponentA from "./ComponentA";
// import {createContext} from "react";
//
// const UserContext = createContext("Default User");
// const EmployeeContext = createContext("Default Employee")
//
// function App() {
//
//     return (
//         <>
//             <MyHeading/>
//             <ComponentA/>
//         </>
//
//     );
// }
// export {UserContext, EmployeeContext};
// export default App;


/* ##################### useEffect Example ######################################### */

// import HttpGetReqExample from "./HttpGetReqExample";
//
// function App() {
//
//     return (
//         <>
//             <MyHeading/>
//             <HttpGetReqExample/>
//         </>
//
//     );
// }
// export default App;


/* ##################### useReducer Example ######################################### */

// import ReducerCounter from "./ReducerCounter";
//
// function App() {
//
//     return (
//         <>
//             <MyHeading/>
//             <ReducerCounter/>
//         </>
//
//     );
// }
// export default App;


/* ##################### useReducer with object Example ######################################### */

/**
 * useReducer() and useState() are same only. useState() is built on top of useReducer().
 * You can say that useState() is a syntatic sugar of useReducer(). However, useReducer() is more of
 * low-level. But, both useReducer() or useState() both are used for state management.
 * */

// import ReducerCounterWithObj from "./ReducerCounterWithObj";
//
// function App() {
//
//     return (
//         <>
//             <MyHeading/>
//             <ReducerCounterWithObj/>
//         </>
//
//     );
// }
// export default App;


/* ##################### Multiple useReducer Example ######################################### */

// import ReducerCounterMultiple from "./ReducerCounterMultiple";
//
// function App() {
//
//     return (
//         <>
//             <MyHeading/>
//             <ReducerCounterMultiple/>
//         </>
//
//     );
// }
// export default App;


/* ##################### UseReducer with UseContext Example ######################################### */

// import React, {useReducer} from "react";
// import ReducerComponentA from "./ReducerComponentA";
// import "../../index.css";
//
// const counterContext = React.createContext();
//
// const initialState = 0;
//
// const reducerFn = (state, action) => {
//
//     switch (action) {
//         case "increment" :
//             return state + 1;
//
//
//         case "decrement" :
//             return state - 1;
//
//         case "reset" :
//             return initialState;
//
//         default:
//             return state;
//     }
// }
//
// function App() {
//
//     const [count, dispatch] = useReducer(reducerFn, initialState);
//
//     return (
//         <>
//             <MyHeading/>
//             <div className="centerContent">
//                 Global count is ::: {count}
//             </div>
//             <counterContext.Provider value={{counter: count, countDispatch: dispatch}}>
//                 <ReducerComponentA/>
//             </counterContext.Provider>
//         </>
//
//     );
// }
//
// export default App;
// export {counterContext};


/* ##################### useRef Hooks Example ######################################### */

// import RefHooksExample from "./RefHooksExample";
//
// function App() {
//
//     return (
//         <>
//             <MyHeading/>
//             <RefHooksExample/>
//         </>
//
//     );
// }
// export default App;


/* ##################### useMemo Example ######################################### */

// import UseMemoExample from "./UseMemoExample";
//
// function App() {
//
//     return (
//         <>
//             <MyHeading/>
//             <UseMemoExample/>
//         </>
//
//     );
// }
// export default App;


/* ##################### Custom Hooks Example ######################################### */

/**
 * Custom hooks are alternative for Higher Order Components(HOC) and render props.
 * Custom hooks are used to contain the common logic, which can then be re-used among multiple components.
 * It can be only used for functional components.
 * To create custom hooks, just create normal javascript function with name prefixed with "use".
 * */

// import DocumentTitleOne from "./DocumentTitleOne";
// import CounterForCustomHooks from "./CounterForCustomHooks";
// import FormForCustomHooks from "./FormForCustomHooks";
//
// function App() {
//
//     return (
//         <>
//             <MyHeading/>
//             <DocumentTitleOne/>
//             <CounterForCustomHooks/>
//             <FormForCustomHooks/>
//         </>
//
//     );
// }
// export default App;

/* ##################### Routing Example ######################################### */

// import "../../index.css";
// import {Switch, Route} from "react-router-dom";
// import AboutUs from "./AboutUs";
// import Services from "./Services";
// import ContactUs from "./ContactUs";
// import NotFound from "./NotFound";
//
// function App() {
//
//     const Name = () => {
//         return (
//             <>
//                 <h1 className="heading">Contact Name</h1>
//
//             </>
//         );
//     }
//
//     return (
//         <>
//             <MyHeading/>
//             <Switch>
//                 <Route exact path="/" component={AboutUs}/>
//                 <Route path="/services" component={Services}/>
//                 <Route exact path="/contact" component={ContactUs}/>
//                 <Route path="/contact/name" component={Name}/>
//                 <Route component={NotFound}/>
//             </Switch>
//         </>
//     );
// }
//
// export default App;


/* ##################### NavBar Routing Example ######################################### */

// import "../../index.css";
// import {Switch, Route, Redirect} from "react-router-dom";
// import AboutUs from "./AboutUs";
// import Services from "./Services";
// import ContactUs from "./ContactUs";
// import NotFound from "./NotFound";
// import Menu from "./Menu";
// import ContactName from "./ContactName";
//
// function App() {
//
//     return (
//         <>
//             <MyHeading/>
//             <Menu/>
//             <Switch>
//                 <Route exact path="/" component={() => <AboutUs name="Piyush Kumar"/>}/>
//                 <Route path="/services" component={Services}/>
//                 <Route exact path="/contact" component={ContactUs}/>
//                 <Route path="/contact/name/:name" component={ContactName}/>
//                 {/*<Route component={NotFound}/>*/}
//                 <Redirect to="/"/>
//             </Switch>
//         </>
//     );
// }
//
// export default App;
