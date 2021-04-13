import React, { useState } from 'react';

const App = () => {

    // const [persons, setPersons] = useState([
    //     { name: 'Arto Hellas' },
    // ]);
    const [newName, setNewName] = useState('Arto Hellas');
    const [names, setNames] = useState([]);
    const [newNumber, setNewNumber] = useState('13400000000');
    const [numbers, setNumbers] = useState([]);

    function show(event) {
        event.preventDefault();
        setNames([...names, newName]);
        setNumbers([...numbers, newNumber])
        const content = document.getElementById('content')
        const num = document.getElementById('num')
        if (content.value == names) {
            alert(`${newName} is already added to phonebook`)
        }
        content.value = ''
        num.value = ''
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <div>
                filter show width:<input type="text" placeholder="请输入关键字" />
            </div>
            <h2>Add a new</h2>
            <form>
                <div>
                    name: <input id="content" onInput={e => setNewName(e.target.value)} />
                </div>
                <div>
                    number: <input id="num" onInput={e => setNewNumber(e.target.value)} />
                </div>
                <div>
                    <button type="submit" onClick={show}>add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {names.map(name => <p key={name}>Name: {name}</p>)}
            {numbers.map(number => <p key={number}>Number: {number}</p>)}
        </div>
    );

};

export default App;