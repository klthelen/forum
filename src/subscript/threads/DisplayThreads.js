const DisplayThreads = ({info}) => {
    return ( 
        <div className="DisplayThread">
            <h2>My threads:</h2>
            {info.map(N => (
               <div id="previewThread" key={N.id}>
                        <div className="nameContent"> "{N.name}"</div>
                        <div className="idContent"> (ID: {N.id})</div>
               </div>
           ))}
        </div>
     );
}

export default DisplayThreads;