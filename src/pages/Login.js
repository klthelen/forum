// import {useState, useEffect} from 'react' // Not currently used?
import React from "react"
import {Navbar, Footer} from '../subscript/universal'

const Login = props => {
    const updateWidth = () => {
        setWidth(window.innerWidth);
    };

    // Checks if user has resized window and updates width as necessary
    React.useEffect(() => {
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    });

    const [width, setWidth] = React.useState(window.innerWidth);

    // Changes based on window width
    let loginClass = "login-container-main";
    if (width < 500) {
        loginClass = "login-container-mini";
    }

    return (  
        <div>
             <div id="page-container">
                <div id="content-wrap">
                    <Navbar pageID={10}/>
                    <div id={loginClass}>
                        <div className="login-header-container">
                            <div className="login-header"> Log In </div>
                            <div className="signup-link"> No account? <a href="/signup">Sign up instead.</a></div>
                        </div>
                        
                        {/* Inputs start */}
                        <form className="login-form"> 
                            
                            <div className="input-field-container">
                                <input
                                className="input-field"
                                type = "email"
                                placeholder = "Email"
                                required
                                //value {email}
                                //onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="login-divider" />

                            <div className="input-field-container">
                                <input
                                className="input-field"
                                type = "password"
                                placeholder = "Password"
                                required
                                //value {password}
                                //onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <button className="login-button">Log in</button>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Login;