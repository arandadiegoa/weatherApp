import axios from "axios";
import config from "./config.svc";

export const fetchWeatherInfo = async (lat, lon) => {
  console.log("funcion", lat, lon);
  try {
    const params = {
      lat,
      lon,
      units: "metric",
      lang: "ES",
      appId: config.apiKey,
    };
    console.log("params", params);
    const { data } = await axios.get(`${config.apiUrl}/weather`, { params });
    return { error: false, data };
  } catch (error) {
    return { error: true, data: {} };
  }
};
