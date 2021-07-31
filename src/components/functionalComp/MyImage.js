import '../../index.css'

function MyImage(props) {

    return (
        <>
            <h1 className="heading">{props.description}</h1>

            <div className="img_styling">

                <img src={props.imageSrc} alt={props.altText}/>

            </div>
        </>
    );
}

export default MyImage;