import React, { useEffect, useState } from 'react';
import Country from './Country'

const App = () => {

  const [countries, setCountries] = useState([])
  const [filterdCountries, setFilterdCountries] = useState([])

  const fetchCountries = async () => fetch('https://restcountries.eu/rest/v2/all').then(response => response.json())

  useEffect(() => {
    fetchCountries()
      .then(countries => {
        setCountries(countries)
        setFilterdCountries(countries)
      });
  }, []);

  const searchCountries = ({ target: { value: keyword } }) => {
    const results = countries.filter(
      country => country.name.toLowerCase().includes(keyword.toLowerCase())
    )
    setFilterdCountries(results)
  }

  return <>
    <div>
      <label>Search Countries</label>
      <input onInput={searchCountries} />
    </div>
    {
      filterdCountries.length > 10
        ? <p>搜索结果过多，请输入具体的搜索关键字</p>
        : filterdCountries.map(
          country => <Country key={country.name + filterdCountries.length} country={country} isExpand={filterdCountries.length === 1} />
        )
    }
  </>

}


export default App;
