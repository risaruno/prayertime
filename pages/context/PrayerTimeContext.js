import { useState, useEffect, createContext } from "react";
import { ALADHAN_API_URL, selected } from "../api/prayerTimeApi";

export const PrayerTimeContext = createContext();

export const PrayerTimeProvider = (props) => {
  const [prayerTimes, setPrayerTimes] = useState({});

  const getPrayerTime = async () => {
    return await fetch(ALADHAN_API_URL)
      .then((res) => res.json())
      .then((data) => {
        const temp = data.data.timings;
        Object.entries(selected).map(([vKey, vValue]) => {
          Object.entries(temp).map(([key, value]) => {
            if (vKey === key) {
              setPrayerTimes((prev) => ({ ...prev, [vValue]: value }));
            }
          });
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setInterval(() => {
      // if (time.getMinutes() === 0) {
      //   getPrayerTime();
      // }
    }, 1000);
    getPrayerTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PrayerTimeContext.Provider value={prayerTimes}>
      {props.children}
    </PrayerTimeContext.Provider>
  );
};
