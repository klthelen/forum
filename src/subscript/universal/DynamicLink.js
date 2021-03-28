import React from "react";
import ReactDOM from "react-dom";
import ImageHover from "./ImageHover";  // Grid hover

const images = {
    white: "/assets/gridWnb.png",
    gold: "/assets/gridGnb.png",
}
// Written link navigation
const Links = props => {
    return (
        <div className="link">
            <a href="/">Home</a>
            <a href="/About">About</a>
            <a href="/FAQ">FAQ</a>
            <a href="/Rules">Rules</a>
        </div>
    )
}

// Grid-style navigation
class Grid extends React.Component {
    container = React.createRef();
    state = {
        open: false,
    };

    // Changes state when button is clicked
    handleButtonClick = () => {
        this.setState(state=> {
            return {
                open: !state.open,
            };
        });
    };

    // Invoked after component has been mounted
    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    // Last function called before component is removed from DOM
    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    // Used to close navigation if it is open and user clicks outside of it
    handleClickOutside = event => {
        if (this.container.current && !this.container.current.contains(event.target)) {
            this.setState({
                open: false,
            });
        }
    };

    render() {
        let grid_class = this.state.open ? "gridNavO" : "gridNavC";     // this.state.open -> grid background is gold; !this.state.open -> grid background is transparent

        return (
            <div> {/* Have to return everything in a container */}
                <div className={grid_class} ref={this.container}>
                    <button type="button" className={"gridBtn"} onClick={this.handleButtonClick}>

                        {/* this.state.open -> grid is white; !this.state.open -> grid is gold, white on hover */}
                        {this.state.open && (<ImageHover height={50} default={images.white} hover={images.white} className={"none"} altText={"Navigation"} />)}
                        {!this.state.open && (<ImageHover height={50} default={images.gold} hover={images.white} className={"none"} altText={"Navigation"} />)}

                    </button>
                    {/* Displays dropdown only when list is open */}
                    {this.state.open && (
                        <div className="dropdown">
                            <ul>
                            <li> <a href="/">Home</a> </li>
                            <li> <a href="/About">About</a> </li>
                            <li> <a href="/FAQ">FAQ</a> </li>
                            <li> <a href="/Rules">Rules</a> </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

// Determines whether to use grid-style or written link based on width of screen 
function DynamicLink () {
    const updateWidth = () => {
        setWidth(window.innerWidth);
    };

    // Checks if user has resized window and updates width as necessary
    React.useEffect(() => {
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    });

    const [width, setWidth] = React.useState(window.innerWidth);
    
    // Chooses whether to show written links or grid links based on window width
    if(width > 600) {
        return (<Links />)
    }
    else { 
        return (<Grid />)
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<DynamicLink />, rootElement); 
export default DynamicLink;