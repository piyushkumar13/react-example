import React, {Component} from "react";
import MyHeading from "./MyHeading";

/* ##################### Class Component Example ######################################### */

// import MyImage from "./MyImage";
// import sampleData from "../../Sampledata"
// class App extends Component {
//
//
//     nImage(){
//         return sampleData.map(val => <MyImage key = {val.id} imageSrc = {val.imageSrc} description = {val.description} altText = {val.altText}/>)
//     }
//
//     render() {
//
//         return (
//             <>
//                 <MyHeading/>
//                 {this.nImage()}
//             </>
//         );
//     }
// }
//
//
// export default App;


/* ##################### State Example - 1 ######################################### */
//
// import MyCounter from "./MyCounter";
//
// class App extends Component {
//
//     render() {
//
//         return (
//             <>
//                 <MyHeading/>
//                 <MyCounter/>
//             </>
//         );
//     }
// }
//
//
// export default App;


/* ##################### State Example - 2 ######################################### */

// import MyAdvanceCounter from "./MyAdvanceCounter";
//
// class App extends Component {
//
//     render() {
//
//         return (
//             <>
//                 <MyHeading/>
//                 <MyAdvanceCounter/>
//             </>
//         );
//     }
// }
//
//
// export default App;


/* ##################### Different ways of binding eventhandlers - 2 ######################################### */

// import MyEventHandlerExample from "./MyEventHandlerExample";
//
// class App extends Component {
//
//     render() {
//
//         return (
//             <>
//                 <MyHeading/>
//                 <MyEventHandlerExample
//                     description1="Using Bind within Render Method"
//                     description2="Using Arrow Function within Render Method"
//                     description3="Using Bind within Constructor"
//                     description4="Using Class Property with Arrow Function"
//                 />
//             </>
//         );
//     }
// }
//
//
// export default App;


/* ##################### Passing method and state as props ######################################### */

// import ParentComp from "./ParentComp";
//
// class App extends Component {
//
//     render() {
//         return (
//             <>
//                 <MyHeading/>
//                 <ParentComp/>
//             </>
//         );
//     }
// }
//
// export default App;


/* ##################### Passing method as props ######################################### */

// import ParentComp from "./ParentComp";
//
// class App extends Component {
//
//     render() {
//         return (
//             <>
//                 <MyHeading/>
//                 <ParentComp/>
//             </>
//         );
//     }
// }
//
// export default App;


/* ##################### Forms Example ######################################### */

// import Form from "./Form";
//
// class App extends Component {
//
//     render() {
//         return (
//             <>
//                 <MyHeading/>
//                 <Form/>
//             </>
//         );
//     }
// }
//
// export default App;


/* ##################### Lifecycle Methods Example ######################################### */

// import LifecycleParent from "./LifecycleParent";
//
// class App extends Component {
//
//     render() {
//         return (
//             <>
//                 <MyHeading/>
//                 <LifecycleParent/>
//             </>
//         );
//     }
// }
//
// export default App;


/* ##################### Pure Component vs Regular Component Example ############################### */

// import PureCompExample from "./PureCompExample";
//
// class App extends Component {
//
//     render() {
//         return (
//             <>
//                 <MyHeading/>
//                 <PureCompExample/>
//             </>
//         );
//     }
// }
//
// export default App;


/* ##################### Ref Example ############################### */

// import RefExample from "./RefExample";
//
// class App extends Component {
//
//     render() {
//         return (
//             <>
//                 <MyHeading/>
//                 <RefExample/>
//             </>
//         );
//     }
// }
//
// export default App;


/* ##################### Ref with Class Component Example ############################### */

// import RefForClassComponent from "./RefForClassComponent";
//
// class App extends Component {
//
//     render() {
//         return (
//             <>
//                 <MyHeading/>
//                 <RefForClassComponent/>
//             </>
//         );
//     }
// }
//
// export default App;


/* ##################### ForwardingRef Example ############################### */

// import ForwardingRefExample from "./ForwardingRefExample";
//
// class App extends Component {
//
//     render() {
//         return (
//             <>
//                 <MyHeading/>
//                 <ForwardingRefExample/>
//             </>
//         );
//     }
// }
//
// export default App;


/* ##################### ForwardingRef Example ############################### */

// import ErrorBoundary, {Hero} from "./ErrorBoundary";
//
// class App extends Component {
//
//     render() {
//         return (
//             <>
//                 <MyHeading/>
//                 <ErrorBoundary>
//                     <Hero heroName="Batman"/>
//                 </ErrorBoundary>
//                 <ErrorBoundary>
//                     <Hero heroName="Superman"/>
//                 </ErrorBoundary>
//                 <ErrorBoundary>
//                     <Hero heroName="Joker"/>
//                 </ErrorBoundary>
//             </>
//         );
//     }
// }
//
// export default App;


/* ##################### Higher Order Components Example ############################### */

import ClickedCounter from "./ClickedCounter";
import HoverCounter from "./HoverCounter";

class App extends Component {

    render() {
        return (
            <>
                <MyHeading/>
                <ClickedCounter name="Piyush"/>
                <HoverCounter/>
            </>
        );
    }
}

export default App;