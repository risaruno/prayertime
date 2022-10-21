import "../styles/globals.css";
import { PrayerTimeProvider } from "./context/PrayerTimeContext";

function MyApp({ Component, pageProps }) {
  return (
    <PrayerTimeProvider>
      <Component {...pageProps} />
    </PrayerTimeProvider>
  );
}

export default MyApp;
