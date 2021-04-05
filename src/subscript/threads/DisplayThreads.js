const DisplayThreads = ({info}) => {
    return ( 
        <div className="DisplayThread">
            <h2>My threads:</h2>
            {info.map(N => (
               <div id="previewThread" key={N.id}>
                        <li><a href = {"/Threads/" + N.id}>{N.id + ". " + N.name}</a></li>
               </div>
           ))}
        </div>
     );
}

export default DisplayThreads;