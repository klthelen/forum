import {useState, useEffect} from 'react';

import SendMessage from './SendMessage';
import DisplayMessage from './DisplayMessage';
import HeaderHover from './HomeScripts/HeaderHover'

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

                    {/* MTU Logo Hover*/}
                    <div id="headerImageContainer">
                        <a href="http://mtu.edu/">
                            <HeaderHover />
                        </a>
                    </div>

                    <div id="top-banner"> 
                        <div className="link">
                            <a href="/">About</a>
                            <a href="/">FAQ</a>
                            <a href="/">Rules</a>
                        </div>
                    </div>
                    
                    <SendMessage />
                    {info && <DisplayMessage info={info}/>}
                </div>

                {/* Footer */}
                <div id="container"></div>
                <footer id="footer">
                    <div className="footer">
                        <table>
                            <tbody>
                                <tr>
                                    <td />
                                    <td>
                                        <img className="footerImg" src="HuskyIcon_TwoColor.png" alt="M" />
                                    </td>
                                    <td />
                                </tr>
                            </tbody>
                        </table>
                    </div>
                 </footer>
            </div>
        </div>
    );
}
 
export default Home;