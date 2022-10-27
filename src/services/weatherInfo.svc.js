import axios from "axios";
import config from "./config.svc";

export const fetchWeatherInfo = async (regionName) => {
  console.log("funcion", regionName);
  try {
    const params = {
      q: regionName,
      units: "metric",
      lang: "ES",
      appId: config.apiKey,
    };
    console.log("params", params);
    const { data } = await axios.get(`${config.apiUrl}/weather`, {
      params,
    });
    return { error: false, data };
  } catch (error) {
    return { error: true, data: {} };
  }
};
