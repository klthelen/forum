import { useState } from "react";

const CreateThreads = () => {
    const[name, setName] = useState('');

    const handleCreateThread = (e) => {
        const N = {name};

        fetch('http://localhost:8000/threads', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(N)
        });
    }

    return (
        <div className="CreateThread">
            <h2>Create a thread:</h2>
            <form onSubmit={handleCreateThread}>
                <input 
                    type="text"
                    required
                    value = {name}
                    onChange = {(e) => setName(e.target.value)}
                />
                <button>Create</button>
            </form>
        </div>
    );
}
 
export default CreateThreads;