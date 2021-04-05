import React from "react";
import ReactDOM from "react-dom";
import ImageHover from "./ImageHover";  // Grid hover


const images = {
    white: "/assets/gridWnb.png",
    gold: "/assets/gridGnb.png",
}

// Written link navigation
const Links = props => {

    // Creates links that change if user is currently on their page
    // Use this if you need to add links (see return for example usage)
    function createLink(validID, ahref, title) {
        // Make sure each page has: <Navbar pageID={uniquenumber} />
        // Match the unique page number to "validID" when you call createLink in the return
        if(props.pageID === validID) {
            return(<span className="link-span--active"> <a href={ahref}>{title}</a></span>)
        }
        else {
            return(<span className="link-span"> <a href={ahref}>{title}</a></span>)
        }
    }

    // Creates unique login link that changes if user is currently on the login page
    // Don't use with other links or they will look like the login link
    function createLogIn() {
        if(props.pageID === 10) {
            return(<span className="link-span-login--active"><a href="/login">Log in</a></span>)
        }
        else {
            return(<span className="link-span-login"><a href="/login">Log in</a></span>)
        }
    }

    return (
        <div className="linkContainer">
            <div className="link">
                {createLink(0, "/", "Home")}
                {createLink(1, "/threads", "Threads")}
                {createLink(2, "/about", "About")}
                {createLink(3, "/faq", "FAQ")}
                {createLink(4, "/rules", "Rules")}
                <span> </span>  {/* Adds spacing before Log in */}
                {createLogIn()}
            </div>
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
                            <a href="/"> <li className="li-main"> Home </li> </a>
                            <a href="/Threads"> <li className="li-main"> Threads </li> </a> 
                            <a href="/About"> <li className="li-main"> About </li> </a>
                            <a href="/FAQ"> <li className="li-main"> FAQ </li> </a>
                            <a href="/Rules"> <li className="li-main"> Rules</li> </a>
                            <a href="/Login"> <li className="li-login"> Log in </li> </a>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

// Determines whether to use grid-style or written link based on width of screen 
function DynamicLink(props) {
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
    if(width > 700) {
        return (<Links pageID={props.pageID} />)
    }
    else { 
        return (<Grid />)
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<DynamicLink />, rootElement); 
export default DynamicLink;