import React, { useEffect, useState } from 'react';
import axios from 'axios'
import List from './components/List'

const App = () => {

    const [persons, setPersons] = useState([]);

    useEffect(() => {
        const fetchPersons = async () => fetch('http://localhost:4000/persons').then(response => response.json());
        fetchPersons()
            .then(persons => setPersons(persons));
    }, []);
    // const person = { name: 'lisi', number: '8899966', id: 10 }
    const handleSubmit = async event => {
        //     await fetch('http://localhost:4000/persons',
        //         {
        //             body: JSON.stringify(person),
        //             headers: {
        //                 'Content-Type': 'application/json;charset=utf-8'
        //             },
        //             method: 'POST'
        //         }
        //     ).then(response => response.json()).catch(error => console.log(error));
        //     console.log(persons)
        axios.post('http://localhost:4000/persons', {
            id: 15,
            name: 'susan',
            number: '688855'
        }).then(function (res) {
            console.log(res)
        }).catch(function (error) {
            console.log(error)
        })
    }
    const [readPostId, writePostId] = useState("");
    const [readStatus, writeStatus] = useState("");
    // => Handlers
    //const updatePostId = (e) => writePostId(e.target.value);
    const deletePost = async (e) => {
        e.preventDefault();
        try {
            await axios.delete(`http://localhost:4000/persons/${readPostId}`);
            writeStatus("Post successfully deleted");
            setTimeout(() => writeStatus(""), 3000);
        } catch (err) {
            writeStatus("Post deletion failed");
        }

    }
    // const handleDelete = async event => {
    //     axios.post(`http://localhost:4000/persons/?${id}`).then(response => response.json())
    //         .then(response => console.log(response))
    // }

    return <>
        <List persons={persons}></List>
        {/* {
            persons.map(({ id, name, number }) => <p key={id}>{name} {number}</p>)
        } */}
        <button onClick={handleSubmit}>Submit</button>
        <div>
            <form onSubmit={deletePost}>
                <input onChange={(e) => writePostId(e.target.value)} value={readPostId} />
                <input type="submit" value="Delete" />
            </form>
            {readStatus && <p>{readStatus}</p>}
        </div>
    </>;

}


// export default class App extends Component {
//     componentDidMount() {
//         //const _this = this;
//         axios.get('http://localhost:4000/persons', {})  //这里是后端接口，注意不要跨域
//             .then(function (response) {
//                 const list = response.data
//                 return list
//                 // _this.setState({ user: response.data.data.name, number: response.data.data })
//             })
//             .catch(function (error) {
//                 console.log(error);
//             })
//         axios.post('http://localhost:4000/persons', {
//             name: 'zhangsan',
//             number: '111111',
//         }).then(function (res) {
//             console.log(res)
//         }).catch(function (error) {
//             console.log(error)
//         })
//     }
//     render() {

//         return (
//             <div>
//                 <div>

//                 </div>
//             </div>
//         )
//     }
// }

export default App;
