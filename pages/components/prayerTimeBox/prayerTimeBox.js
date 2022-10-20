export default function PrayerTimeBox({ prayerTimes }) {
  return Object.entries(prayerTimes).map(([key, value]) => {
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
