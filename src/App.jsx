import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [prayerTimes, setPrayerTimes] = useState({});
  const selected = ["Imsak", "Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];

  const getPrayerTime = async () => {
    const response = await fetch(
      "https://api.aladhan.com/v1/timingsByAddress?address=Rancaekek,%20UK&method=99&methodSettings=20,null,18"
    );
    const data = await response.json();
    const getPrayerTimes = data.data.timings;
    selected.forEach((item) => {
      Object.entries(getPrayerTimes).map(([key, value]) => {
        if (item === key) {
          setPrayerTimes((prev) => ({ ...prev, [key]: value }));
        }
      });
    });
  };
  useEffect(() => {
    getPrayerTime();
  }, []);

  return (
    <div className="App" id="App">
      <div className="schedule">
        {Object.entries(prayerTimes).map(([key, value]) => {
          return (
            <div key={key}>
              <span className="title">{key}</span>
              <span> : </span>
              <span className="time">{value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
