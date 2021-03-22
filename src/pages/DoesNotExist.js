import {Navbar, Footer} from '../subscript/universal'

const DoesNotExist = () => {
    return (  
        <div className="FAQ">
             <div id="page-container">
                <div id="content-wrap">
                    <Navbar />
                    <h2>This page does not exist</h2>
                </div>
                <Footer />
            </div>
        </div>
    );
}
 
export default DoesNotExist;