
import React, { useEffect, useState } from 'react';

const App = () => {

  const [country, setCountry] = useState([]);

  useEffect(() => {
    const fetchPersons = async () => fetch('https://restcountries.eu/rest/v2/all').then(response => response.json());
    fetchPersons()
      .then(country => setCountry(country));
  }, []);

  return <>
    <div>
      search country:<input />
    </div>
    {
      country.map(({ name }) => <p key={name}>{name} </p>)
    }
  </>

}


export default App;
