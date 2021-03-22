const DisplayMessage = ({info}) => {
    return ( 
        <div className="DisplayMessage">
            <h2>My messages:</h2>
            {info.map(MU => (
               <div id="previewMessage" key={MU.id}>
                        <div className="messageContent"> "{MU.message}"</div>
                        <div className="userInfo"> - {MU.user}</div>
                        <div className="idContent"> (ID: {MU.id})</div>
               </div>
           ))}
        </div>
     );
}

export default DisplayMessage;