import { useState, useEffect } from "react";
import { ALADHAN_API_URL, selected } from "../../api/prayerTimeApi";
import PrayerTimeBox from "../prayerTimeBox/prayerTimeBox";

const PrayerTimeContainer = () => {
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
    getPrayerTime(setPrayerTimes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex items-center justify-center gap-4 flex-wrap">
      <PrayerTimeBox prayerTimes={prayerTimes} />
    </div>
  );
};

export default PrayerTimeContainer;
