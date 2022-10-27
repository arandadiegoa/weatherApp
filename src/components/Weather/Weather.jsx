import { useEffect, useState } from "react";
import { fetchWeatherInfo } from "../../services/weatherInfo.svc";
import Card from "../Card/Card";

const Weather = ({ regionName }) => {
  const [infoWeather, setInfoWeather] = useState({});
  
  const getInfoWeather = async (regionName) => {
    try {
      const { error, data } = await fetchWeatherInfo(regionName);
      if (!error) {
        setInfoWeather(data);
      }
    } catch (error) {
      console.log("Existe un error");
    }
  };

  useEffect(() => {
    if (regionName) getInfoWeather(regionName);
  }, [regionName]);

  if (Object.keys(infoWeather).length) {
    return <Card infoWeather={infoWeather} />;
  }
};
export default Weather;
