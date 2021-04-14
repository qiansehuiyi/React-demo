import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {


  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    const fetchPersons = async () =>
      fetch('http://localhost:4000/persons')
        .then(response => response.json())
    fetchPersons()
      .then(persons => setPersons(persons))
  }, []);

  function add(event) {
    event.preventDefault()
    if (persons.map(person => person.name).includes(newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    const newPersons = [...persons, { name: newName, number: newNumber }]
    setPersons(newPersons)
    setNewName('')
    setNewNumber('')
    try {
      axios.post('http://localhost:4000/persons',
        {
          name: { newName },
          number: { newNumber }
        }
      )
      console.log('添加成功')

    } catch (err) {
      console.log('出错啦')
    }
  }

  // 反面教材
  const search = ({ target: { value: keyword } }) => {
    if (keyword === '') {
      setSearchResults([])
      return
    }
    const founds = persons.filter(({ name }) => name.toLowerCase().includes(keyword.toLowerCase()))
    setSearchResults(founds)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <h3>filter show width:</h3>
        <input type="text" placeholder="请输入关键字" onInput={search} />
        <h3>搜索结果</h3>
        {
          searchResults.map(({ name, number }) => <p key={name}>{name} {number}</p>)
        }
      </div>
      <h2>Add a new</h2>
      <form onSubmit={add}>
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
      {
        persons.map(
          ({ name, number }) => <p key={name}>Name: {name}, {number}</p>
        )
      }
    </div>
  )

}

export default App