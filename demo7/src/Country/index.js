import React, { useState } from 'react';
import Weather from './Weather';

const Country = ({ country, isExpand }) => {

  const { name, capital, population, languages, flag } = country;

  const [expand, setExpand] = useState(isExpand)

  return expand
    ? <div>
      <h2>{name}</h2>
      <button onClick={() => setExpand(false)}>Hide detail</button>
      <p>Capital: {capital}</p>
      <p>Population: {population}</p>
      <div>Languages:
            <ul>
          {languages.map(({ name }) => <li key={name}>{name}</li>)}
        </ul>
      </div>
      <div >
        <img alt='' src={flag} style={{ width: 200, height: 200 }}></img>
      </div>
      <Weather captial={capital} />
    </div>
    : <div>
      <h2>{name}</h2>
      <button onClick={() => {
        setExpand(true)
      }}>Show detail</button>
    </div>
}

export default Country
