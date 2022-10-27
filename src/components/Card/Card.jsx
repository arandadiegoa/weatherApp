import config from "../../services/config.svc";
import { CardContainer, Img, List } from "./Card.styled";

const Card = ({ infoWeather }) => {
  const {
    main: { temp, humidity, temp_max, temp_min },
    weather,
    name,
    visibility,
  } = infoWeather;

  const today = new Date();
  const now = today.toLocaleString();
  window.onload = function () {
    setInterval(now, 1000);
  };

  return (
    <CardContainer>
      <h1>Weather</h1>
      <List>
        <h3>City: {name}</h3>
      </List>
      <List>
        <h3>Visibility: {visibility}Km</h3>
      </List>
      <List>
        <h3>Temp: {temp}°</h3>
      </List>
      <List>
        <h3>Humidity: {humidity}%</h3>
      </List>
      <List>
        <h3>Temp Max : {temp_max}°</h3>
      </List>
      <List>
        <h3>Temp Min: {temp_min}°</h3>
      </List>
      <List>
        <h3>Description: {weather[0].description}</h3>
      </List>
      <List>
        <h3>Last update: {now}</h3>
      </List>
      <Img src={`${config.imgUrl}${weather[0].icon}@2x.png`} alt="" />
    </CardContainer>
  );
};
export default Card;
