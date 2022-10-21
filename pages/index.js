import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import weather from "../public/icons/weathers/01n.png";
import location from "../public/icons/Location.png";

//component
import PrayerTimeContainer from "./components/PrayerTimeContainer/PrayerTimeContainer";

export default function Home() {
  const [time, setTime] = useState(new Date());

  const refreshDateTime = () => {
    setTime(new Date());
  };

  useEffect(() => {
    setInterval(refreshDateTime, 1000);
    // window.particlesJS.load("particles-js", "particlesjs-config.json");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container mx-auto">
      <Head>
        <title>Prayer Time</title>
        <meta name="description" content="Prayer Time Web Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <main className="flex flex-col justify-between gap-4 min-h-screen py-24 text-white">
          <div className="flex flex-col items-start justify-center px-16 gap-4">
            <div className="flex flex-col items-start px-2">
              <h1 className="text-7xl">
                {time.toLocaleString("id-ID", {
                  timeZone: "Asia/Jakarta",
                  hour: "numeric",
                  minute: "numeric",
                })}
              </h1>
              <h6 className="text-2xl">
                {time.toLocaleString("id-ID", {
                  timeZone: "Asia/Jakarta",
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </h6>
            </div>

            <div className="flex max-w-xl gap-4">
              <div className="relative basis-24">
                <Image alt="Weather" src={weather} />
              </div>
              <div className="flex flex-col items-start justify-between text-2xl ">
                <div>
                  <p className="text-3xl leading-6">30°C</p>
                  <p>Cloudy</p>
                </div>
                <div className="flex align-middle justify-center gap-2">
                  <div className="relative basis-8">
                    <Image src={location} alt="location" />
                  </div>
                  <p>Rancaekek, Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          <PrayerTimeContainer />
        </main>
      </div>
    </div>
  );
}
