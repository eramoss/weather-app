import React, { useState } from 'react';
import Card from './components/card';
import fetchData from './services/API';
import initialData from './halpers/initialData';

function App() {
  const [city, setCity] = useState('');
  const [data, setData] = useState(initialData);

  const handlesubmit = (event) => {
    event.preventDefault();
    fetchData(city).then((response) => {
      setData(response);
    });
  };

  return (
    <main className="flex flex-col w-full h-screen items-center sm:justfy-center p-4">
      <form onSubmit={handlesubmit} className=" fixed bottom-0 w-full flex p-4 sm:relative justify-center">
        <input
          type="text"
          placeholder="cidade"
          className="p-3 rounded-lg outline-none w-full flex-1 sm:max-w-[300px]"
          value={city}
          onChange={({ target: { value } }) => setCity(value)}
        />
        <button
          type="submit"
          className="bg-blue-600 p-3 rounded-lg ml-3 text-white font-bold"
        >
          pesquisar
        </button>
      </form>
      <Card data={data} />
    </main>
  );
}

export default App;
