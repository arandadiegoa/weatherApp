import { useEffect, useState } from "react";
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
    <div>
      <h1>INFO IP User</h1>
      <li>{ipUser.country}</li>
      <li>{ipUser.regionName}</li>
      <li>{ipUser.lat}</li>
      <li>{ipUser.lon}</li>

      <div>
        <Weather latProp={ipUser.lat} lonProp={ipUser.lon} />
      </div>
    </div>
  );
};
export default Home;
