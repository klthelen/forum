import {useState, useEffect} from 'react'
import {SendMessage, DisplayMessage} from '../subscript/messages'
import {Navbar, Footer} from '../subscript/universal'

const Home = () => {
    const [info, setInfo] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/info')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setInfo(data);
        })
    }, [])

    return (  
        <div className="Home">
            <div id="page-container">
                <div id="content-wrap">
                    <Navbar />
                    <SendMessage />
                    {info && <DisplayMessage info={info}/>}
                </div>
                <Footer />
            </div>
        </div>
    );
}
 
export default Home;