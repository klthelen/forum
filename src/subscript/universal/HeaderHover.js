import React from "react";
import ReactDOM from "react-dom";

const white = "/assets/logoWhite.png";
const gold = "/assets/logoGold.png";

const HoverImage = props => {
    function over(e) {
        e.currentTarget.src = props.hoverImage;
    }
    function out(e) {
        e.currentTarget.src = props.normalImage;
    }
    return <img src={props.normalImage} onMouseOver={over} onMouseOut={out} alt="M" className="headerImage" />
};

function HeaderHover() {
    return (
            <HoverImage normalImage={gold} hoverImage={white} />
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<HeaderHover />, rootElement); 
export default HeaderHover;