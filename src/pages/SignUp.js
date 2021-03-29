import {Navbar, Footer} from '../subscript/universal'

const SignUp = () => {
    return (  
        <div className="About">
             <div id="page-container">
                <div id="content-wrap">
                    <Navbar />
                    <h1>Sign Up</h1>
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
                        {/* <h2></h2> */}
                        <button>Create Account</button>
                    </form>
                </div>
                <Footer />
            </div>
        </div>
    );
}
 
export default SignUp;