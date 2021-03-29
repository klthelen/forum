// import {useState, useEffect} from 'react' // Not currently used?
import {Navbar, Footer} from '../subscript/universal'

const Login = () => {
    return (  
        <div className="Login">
             <div id="page-container">
                <div id="content-wrap">
                    <Navbar />
                    <h1>Login</h1>
                    <h2>Email</h2>
                    <form > 
                        <input
                        type = "email"
                        required
                        //value {email}
                        //onChange={(e) => setEmail(e.target.value)}
                        />
                        <h2>Password</h2>
                        <input
                        type = "password"
                        required
                        //value {password}
                        //onChange={(e) => setPassword(e.target.value)}
                        />
                        {/* <h2></h2> */ }
                        <button>Login</button>
                    </form>
                    {/*
                    <h2></h2>
                    <h2></h2>
                    */}
                    <a href="/SignUp">Create An Account</a>
                </div>
                <Footer />
            </div>
        </div>
    );
}
 
export default Login;