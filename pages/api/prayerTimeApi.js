export const selected = {
  // Imsak: "Imsak",
  Fajr: "Subuh",
  Dhuhr: "Dzuhur",
  Asr: "Ashar",
  Maghrib: "Maghrib",
  Isha: "Isya",
};
const lat = -6.893;
const long = 107.605;
const timeStamp = Date.now();
// https://api.aladhan.com/v1/timings/1?latitude=-6.9673&longitude=107.7649&methodSettings=20,null,18
export const ALADHAN_API_URL = `https://api.aladhan.com/v1/timings/${timeStamp}?latitude=${lat}&longitude=${long}&methodSettings=20,null,18`;
