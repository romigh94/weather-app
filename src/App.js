import React from "react";

const api = {
  key: "bf14ea7eee34efe82391c805dbbc9500",
  base: "https://api.openweathermap.org/data/2.5"
}

function App() {

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
            <input type="text" className="searchbar" placeholder="Sök..." />
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
