import React, { useState, useEffect } from 'react'


const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchResults, setSearchResults] = useState([])

  // 从后端获取persons数据
  const fetchPersons = async () =>
    fetch('http://localhost:4000/persons')
      .then(response => response.json())

  // 向后端服务器发送post请求添加数据给服务器
  const postPerson = async person => fetch(
    'http://localhost:4000/persons',
    {
      method: 'POST',
      body: JSON.stringify(person),
      headers: { 'content-type': 'application/json' },
    }
  ).then(response => response.json())

  // 删除指定的 Person
  const deletePerson = async id => fetch(
    `http://localhost:4000/persons/${id}`,
    {
      method: 'delete',
    }
  ).then(response => response.ok)

  //更新指定的 person 的number
  const updatePerson = async ({ id, number }) => fetch(
    `http://localhost:4000/persons/${id}`,
    {
      method: 'PATCH',
      body: JSON.stringify({ number }),
      headers: {
        'content-type': 'application/json'
      }
    }
  ).then(response => response.json())

  //把获取到的数据返回给persons对象
  useEffect(() => {
    fetchPersons()
      .then(persons => setPersons(persons))
  }, []);

  //点击添加按钮完成数据添加到服务器和渲染到页面两个操作
  async function handleSubmit(event) {
    event.preventDefault()
    // 判断输入的newName 是否与服务器中的 name 相同
    const existedPerson = persons.find(person => person.name.toLowerCase().includes(newName.toLowerCase()))
    // 如果是，提示用户是否要更新原来的 number
    if (existedPerson) {
      if (window.confirm(`${newName} is already added to phonebook`)) {
        // 将更新之后的 用户信息 赋给 updatedPerson
        const updatedPerson = await updatePerson({ id: existedPerson.id, number: newNumber })
        // 获取相同用户名的 id
        const index = persons.findIndex(person => person.id === updatedPerson.id)
        // 对原来的persons 数组进行更新操作
        const arr = [persons.slice(0, index), updatedPerson, persons.slice(index + 1)].flat()
        // 更新状态
        setPersons(arr)
      }
      return
    }
    const newPerson = await postPerson({ name: newName, number: newNumber })
    const newPersons = [...persons, newPerson]
    setPersons(newPersons)
    setNewName('')
    setNewNumber('')
  }

  // 反面教材 搜索匹配功能实现
  const handleSearch = ({ target: { value: keyword } }) => {
    if (keyword === '') {
      setSearchResults([])
      return
    }
    const founds = persons.filter(({ name }) => name.toLowerCase().includes(keyword.toLowerCase()))
    setSearchResults(founds)
  }

  async function handleDelete(id) {
    if (window.confirm('您确定要删除这个用户吗？') && await deletePerson(id)) {
      const newPersons = persons.filter(person => person.id !== id)
      setPersons(newPersons)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <h3>filter show width:</h3>
        <input type="text" placeholder="请输入关键字" onInput={handleSearch} />
        <h3>搜索结果</h3>
        {
          searchResults.map(({ name, number }) => <p key={name}>{name} {number}</p>)
        }
      </div>
      <h2>Add a new</h2>
      <form onSubmit={handleSubmit}>
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
          ({ id, name, number }) => <div key={id}>
            <p key={id}>Name: {name}, {number}</p>
            <button onClick={() => handleDelete(id)}>delete</button>
          </div>
        )
      }
    </div>
  )

}

export default App