import React, { useState } from "react";


//api key not working
const api = {
  key: "a21cc99ae91fd3670323086cda45b306",
  base: "https://api.openweathermap.org/data/2.5"
}

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const searchbar = (event) => {
    if (event.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        console.log(weather)
      })

    }
  }

  const dateToday = () => {
      let newDate = new Date()
      let date = newDate.getDate();
      let month = newDate.getMonth() + 1;
      let year = newDate.getFullYear();
      let separator = "-";

      return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
  }


  return (
    <div className="App">

      <main>
        <div className="search-box">
            <input type="text" className="searchbar" placeholder="Sök..." 
            onChange={e => setQuery(e.target.value)} value={query} onKeyPress={searchbar}/>
        </div>
        <div className="location-box">
            <div className="location">Stockholm, SE</div>
            <div className="date">{dateToday()}</div>
        </div>
        <div className="weather-box">
          <div className="temp">13ºc</div>
          <div className="weather">Soligt</div>
        </div>
      </main>

    </div>
  );
}

export default App;
