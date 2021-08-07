import React from 'react';
import {Link, NavLink} from "react-router-dom";
import "../../index.css";

const Menu = () => {
    return (
        <>
            {/*<div className="navBar">*/}
            {/*    <div>*/}
            {/*        <Link to="/">About Us</Link>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <Link to="/services">Services</Link>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <Link to="/contact">Contact Us</Link>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <Link to="/contact/name">Name</Link>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/* Following is an alternative way but with this we can add highlight css to the selected link */}

            <div className="navBar">
                <div>
                    <NavLink exact activeClassName="highlightLink" className="linkStyle" to="/" >About Us</NavLink>
                </div>
                <div>
                    <NavLink exact activeClassName="highlightLink" to="/services" className="linkStyle">Services</NavLink>
                </div>
                <div>
                    <NavLink exact activeClassName="highlightLink" to="/contact" className="linkStyle">Contact Us</NavLink>
                </div>
                <div>
                    <NavLink exact activeClassName="highlightLink" to="/contact/name/PiyushKumar" className="linkStyle">Name</NavLink>
                </div>
            </div>
        </>
    );
};

export default Menu;