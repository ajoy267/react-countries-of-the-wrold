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
          placeholder="Search Here"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <select value={continent} onChange={(e) => setContinent(e.target.value)}>
          <option value="All">All</option>
          <option value="Oceania">Oceania</option>
          <option value="Europe">Europe</option>
          <option value="North America">North America</option>
          <option value="Asia">Asia</option>
          <option value="Africa">Africa</option>
          <option value="South America">South America</option>
          <option value="Antarctica">Antarctica</option>
        </select>
        <div className="flags">
          {countryFilter().map((country) => (
            <div key={country.id}>
              <div>{country.name}</div>
              <div>
                <img src={`https://flagcdn.com/84x63/${country.iso2.toLowerCase()}.png`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
