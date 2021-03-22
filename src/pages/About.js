import {Navbar, Footer} from '../subscript/universal'

const About = () => {
    return (  
        <div className="About">
             <div id="page-container">
                <div id="content-wrap">
                    <Navbar />
                    <h2>This is the About page</h2>
                </div>
                <Footer />
            </div>
        </div>
    );
}
 
export default About;