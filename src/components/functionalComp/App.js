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