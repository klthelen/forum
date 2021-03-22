import { useState } from "react";

const SendMessage = () => {
    const[message, setMessage] = useState('');
    const user = "Anonymous";

    const handleSendMessage = (e) => {
        const MU = {message, user};

        fetch('http://localhost:8000/info', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(MU)
        });
    }

    return (
        <div className="SendMessage">
            <h2>Send a message:</h2>
            <form onSubmit={handleSendMessage}>
                <input 
                    type="text"
                    required
                    value = {message}
                    onChange = {(e) => setMessage(e.target.value)}
                />
                <button>Send</button>
            </form>
        </div>
    );
}
 
export default SendMessage;