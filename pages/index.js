import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import weather from "../public/icons/weathers/01n.png";
import location from "../public/icons/Location.png";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Prayer Time</title>
        <meta name="description" content="Prayer Time Web Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <main className="flex flex-col justify-between min-h-screen py-24 text-white">
          <div className="flex flex-col items-start justify-center px-16 gap-4">
            <div className="flex flex-col items-start px-2">
              <h1 className="text-7xl">11:00</h1>
              <h6 className="text-2xl">Senin, 10 Oktober 2022</h6>
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

          <div className="flex items-center justify-center gap-10">
            <div className="card glass">
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="text-3xl">Subuh</div>
                <div className="text-5xl">5:00</div>
              </div>
            </div>
            <div className="card glass">
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="text-3xl">Dzuhur</div>
                <div className="text-5xl">12:00</div>
              </div>
            </div>
            <div className="card glass">
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="text-3xl">Ashar</div>
                <div className="text-5xl">15:00</div>
              </div>
            </div>
            <div className="card glass">
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="text-3xl">Magrib</div>
                <div className="text-5xl">18:00</div>
              </div>
            </div>
            <div className="card glass">
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="text-3xl">Isya</div>
                <div className="text-5xl">19:00</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
