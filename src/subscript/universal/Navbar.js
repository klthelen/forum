import React from "react";
import ReactDOM from "react-dom";
import HeaderHover from "./HeaderHover"

const Navbar = props => {
    return (
        <div>
            <div id="headerImageContainer">
                <a href="http://mtu.edu/">
                    <HeaderHover />
                </a>
            </div>
            <div id="top-banner">
            <div className="link">
                <a href="/">Home</a>
                <a href="/About">About</a>
                <a href="/FAQ">FAQ</a>
                <a href="/Rules">Rules</a>
            </div>
        </div>
    </div>
    )
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Navbar />, rootElement); 
export default Navbar;