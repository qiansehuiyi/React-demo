import React, { useEffect, useState } from 'react';
import axios from 'axios'

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
            name: 'susan',
            number: '688855',
            id: 11
        }).then(function (res) {
            console.log(res)
        }).catch(function (error) {
            console.log(error)
        })
    }

    const handleDelete = async event => {
        axios.post('http://localhost:4000/persons/?id').then(response => response.json())
            .then(response => console.log(response))
    }

    return <>
        {
            persons.map(({ id, name, number }) => <p key={id}>{name} {number}</p>)
        }
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleDelete}>Delete</button>
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
