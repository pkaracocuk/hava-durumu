import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import City from './City';

function App() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState();
  const key = "cf7bf6765c0120ca2e1619a2e3ac181a"
  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`);
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    getApi();


  }, [search]);
  console.log(search);
  return <div className="App">
    <div>
      
        <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Placeholder" class="px-3 w-[250px] py-3 placeholder-slate-300 text-slate-600 relative  bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring" />
        < City city={city}/>
     
      
    </div>


  </div>

}

export default App;
