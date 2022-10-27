import { useEffect, useState } from "react";
import { HomeContainer } from "../components/Common/Home.styled";
import Weather from "../components/Weather/Weather";
import { fetchIpUser } from "../services/ipUser.svc";

const Home = () => {
  const [ipUser, setIpUser] = useState([]);
  
  const getInfoIp = async () => {
    try {
      const { error, data } = await fetchIpUser();
      if (!error) {
        setIpUser(data);
      }
    } catch (error) {
      console.log("Existe un error");
    }
  };

  useEffect(() => {
    getInfoIp();
  }, []);

  return (
    <HomeContainer>
    <Weather regionName={ipUser.regionName} />
    </HomeContainer>
  );
};
export default Home;
