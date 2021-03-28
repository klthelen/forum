import React from "react";
import ReactDOM from "react-dom";
import ImageHover from "./ImageHover"
import DynamicLink from "./DynamicLink"

const Navbar = props => {
    return (
        <div>
            <div id="headerImageContainer">
                <a href="http://mtu.edu/">
                    <ImageHover 
                        height={60}
                        default={"/assets/logoGold.png"} 
                        hover={"/assets/logoWhite.png"}
                        className={"headerImage"}
                        altText={"Michigan Technological University"}
                    />
                </a>
            </div>
            <div id="top-banner">
                <DynamicLink />
            </div>
        </div>
    )
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Navbar />, rootElement); 
export default Navbar;