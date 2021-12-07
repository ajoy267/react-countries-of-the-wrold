import { useState, useEffect } from 'react';
import { getCountries } from './services/countries';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCountries();
      setCountries(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="App">
        <h1>Flags of the World</h1>
      </div>
    </>
  );
}

export default App;
