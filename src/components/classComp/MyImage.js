import '../../index.css'
import React, {Component} from "react";

class MyImage extends Component {

    render() {

        return (
            <>

                <h1 className="heading">{this.props.description}</h1>


                <div className="img_styling">

                    <img src={this.props.imageSrc} alt={this.props.altText}/>

                </div>

            </>

        );
    }
}

export default MyImage;