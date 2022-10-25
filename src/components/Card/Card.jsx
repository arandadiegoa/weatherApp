import { CardContainer } from "./Card.styled";

const Card = ({ infoWeather }) => {
  const {
    main: { temp, humidity, temp_max, temp_min },

    name,
    visibility,
  } = infoWeather;
  return (
    <div>
      <CardContainer>
        <li>Place: {name}</li>
        <li>Visibility:{visibility}</li>
        <li>Temp:{temp}</li>
        <li>Humidity:{humidity}</li>
        <li>Temp Max :{temp_max}</li>
        <li>Temp Min:{temp_min}</li>
      </CardContainer>
    </div>
  );
};
export default Card;
