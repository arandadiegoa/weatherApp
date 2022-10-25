import { useEffect, useState } from "react";
import { fetchWeatherInfo } from "../../services/weatherInfo.svc";
import Card from "../Card/Card";

const Weather = ({ latProp, lonProp }) => {
  const [infoWeather, setInfoWeather] = useState({});

  console.log(latProp, lonProp);

  const getInfoWeather = async (lat, lon) => {
    try {
      const { error, data } = await fetchWeatherInfo(lat, lon);
      if (!error) {
        setInfoWeather(data);
      }
    } catch (error) {
      console.log("Existe un error");
    }
  };

  useEffect(() => {
    if (latProp && lonProp) getInfoWeather(latProp, lonProp);
  }, [latProp, lonProp]);

  if (Object.keys(infoWeather).length) {
    return <Card infoWeather={infoWeather} />;
  }
};
export default Weather;
