import React, { useEffect, useState } from 'react';
import axios from 'axios'
import List from './components/List'

const App = () => {

    const [persons, setPersons] = useState([]);
    const [postId, setPostId] = useState("");
    const [status, setStatus] = useState("");

    const fetchPersons = async () =>
        fetch('http://localhost:4000/persons')
            .then(response => response.json());

    useEffect(() => {
        fetchPersons()
            .then(persons => setPersons(persons));
    }, [status]);

    const handleSubmit = async event => {
        try {
            await axios.post('http://localhost:4000/persons', {
                name: 'Tom',
                number: '1340000'
            })
            setStatus("添加成功");
            setTimeout(() => setStatus(""), 1000);
            console.log('添加成功')
        } catch (err) {
            console.log('出错啦')
        }
    }

    // => Handlers
    //const updatePostId = (e) => writePostId(e.target.value);
    const deletePost = async (e) => {
        e.preventDefault();
        try {
            await axios.delete(`http://localhost:4000/persons/${postId}`);
            setStatus("Post successfully deleted");
            setTimeout(() => setStatus(""), 1000);
        } catch (err) {
            setStatus("Post deletion failed");
        }

    }


    return <>
        <List persons={persons}></List>
        <button onClick={handleSubmit}>Submit</button>
        <div>
            <form onSubmit={deletePost}>
                <input onChange={(e) => setPostId(e.target.value)} value={postId} />
                <input type="submit" value="Delete" />
            </form>
            {status && <p>{status}</p>}
        </div>
    </>;

}




export default App;
