// Needs to be fixed

import {useState, useEffect} from 'react'
// import {SendMessage, DisplayMessage} from '../subscript/messages' // Not in use
import CreateThreads from '../subscript/threads/CreateThreads'
import DisplayThreads from '../subscript/threads/DisplayThreads'
import {Navbar, Footer} from '../subscript/universal'

const Threads = () => {
    const [info, setInfo] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/threads')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setInfo(data);
        })
    }, [])

    return (  
        <div className="Threads">
            <div id="page-container">
                <div id="content-wrap">
                    <Navbar />
                    <CreateThreads />
                    {info && <DisplayThreads info={info}/>}
                </div>
                <Footer />
            </div>
        </div>
    );
}
 
export default Threads;