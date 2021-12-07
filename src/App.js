import { useState, useEffect } from 'react';
import { getCountries } from './services/countries';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState('');
  const [continent, setContinent] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCountries();
      setCountries(data);
    };
    fetchData();
  }, []);

  function countryFilter() {
    return countries.filter((country) => {
      return (
        country.name.includes(query) && (country.continent === continent || continent === 'All')
      );
    });
  }

  return (
    <>
      <div className="App">
        <h1>Flags of the World</h1>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        {countryFilter().map((country) => (
          <div key={country.id}>
            <div>
              {country.name} : {country.continent}
            </div>
            <div>
              <img src={`https://flagcdn.com/84x63/${country.iso2.toLowerCase()}.png`} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
