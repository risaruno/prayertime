import { useEffect, useState } from "react";
import "./App.css";
import "./scss/main.scss";
import "particles.js";
import locIcon from "./svg/location.svg";

function App() {
  const [prayerTimes, setPrayerTimes] = useState({});
  const [time, setTime] = useState(new Date());

  const selected = {
    // Imsak: "Imsak",
    Fajr: "Subuh",
    Dhuhr: "Dzuhur",
    Asr: "Ashar",
    Maghrib: "Maghrib",
    Isha: "Isya",
  };

  const getPrayerTime = async () => {
    const response = await fetch(
      "https://api.aladhan.com/v1/timingsByAddress?address=Rancaekek,%20UK&method=99&methodSettings=20,null,18"
    );
    const data = await response.json();
    const getPrayerTimes = data.data.timings;
    Object.entries(selected).map(([vKey, vValue]) => {
      Object.entries(getPrayerTimes).map(([key, value]) => {
        if (vKey === key) {
          setPrayerTimes((prev) => ({ ...prev, [vValue]: value }));
        }
      });
    });
  };

  const refreshDateTime = () => {
    setTime(new Date());
  };

  useEffect(() => {
    setInterval(refreshDateTime, 1000);
    getPrayerTime();
    window.particlesJS.load("particles-js", "particlesjs-config.json");
  }, []);

  return (
    <div className="App" id="App">
      <div className="dateTime">
        <div className="date">
          {time.toLocaleString("id-ID", {
            timeZone: "Asia/Jakarta",
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </div>
        <div className="clock">
          {time.toLocaleString("id-ID", {
            timeZone: "Asia/Jakarta",
            hour: "numeric",
            minute: "numeric",
          })}
        </div>
        <div className="location">
          <img src={locIcon} alt="Location" className="icon" />
          <span className="text">Rancaekek, Indonesia</span>
        </div>
      </div>
      <div className="schedule">
        {Object.entries(prayerTimes).map(([key, value]) => {
          return (
            <div className="timeBox" key={key}>
              <span className="title">{key}</span>
              <span className="time">{value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
