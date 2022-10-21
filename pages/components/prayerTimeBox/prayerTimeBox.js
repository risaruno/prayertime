import { useContext } from "react";
import { PrayerTimeContext } from "../../context/PrayerTimeContext";


export default function PrayerTimeBox() {
  const PrayerTimes = useContext(PrayerTimeContext);
  
  return Object.entries(PrayerTimes).map(([key, value]) => {
    return (
      <div className="card" key={key}>
        <div className="glass">
          <div className="text-3xl">{key}</div>
          <div className="text-5xl">{value}</div>
        </div>
      </div>
    );
  });
}
