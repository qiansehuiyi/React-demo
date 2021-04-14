import React, { useState } from 'react'

const App = () => {

    // const [persons, setPersons] = useState([
    //     { name: 'Arto Hellas' },
    // ])



    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        // { name: 'Ada Lovelace', number: '39-44-5323523' },
        // { name: 'Dan Abramov', number: '12-43-234345' },
        // { name: 'Mary Poppendieck', number: '39-23-6423122' },
    ])
    const [newName, setNewName] = useState((persons.map(({ name }) => name)))
    const [names, setNames] = useState([])
    const [numbers, setNumbers] = useState([])
    const [newNumber, setNewNumber] = useState((persons.map(({ number }) => number)))
    // const [keyword, setKeyword] = useState('')

    function show(event) {
        event.preventDefault()
        if (names.includes(newName)) {
            alert(`${newName} is already added to phonebook`)
            return
        }
        setNames([...names, newName])
        setNumbers([...numbers, newNumber])
        setNewName('')
        setNewNumber('')
    }

    const search = event => {
        const keyword = event.target.value
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <div>
                filter show width:<input type="text" placeholder="请输入关键字" onInput={search} />
            </div>
            <h2>Add a new</h2>
            <form onSubmit={show}>
                <div>
                    name: <input id="content" value={newName} onInput={e => setNewName(e.target.value)} />
                </div>
                <div>
                    number: <input id="num" value={newNumber} onInput={e => setNewNumber(e.target.value)} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {names.map(name => <p key={name}>Name: {name}</p>)}
            {numbers.map(number => <p key={number}>Number: {number}</p>)}
        </div>
    )

}

export default App