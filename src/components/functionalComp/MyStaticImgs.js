const img1 = "https://picsum.photos/200/300"
const img2 = "https://picsum.photos/250/350"
const img3 = "https://picsum.photos/300/400"
const link = "https://picsum.photos/300/400"


function MyStaticImgs() {

    return (
        <>
            <img src={img1} alt="ramdom image 1"/>
            <img src={img2} alt="ramdom image 2"/>
            <a href={link} target="_blank">
                <img src={img3} alt="ramdom image 3"/>
            </a>

        </>

    );
}

export default MyStaticImgs;