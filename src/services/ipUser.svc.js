import axios from "axios";

export const fetchIpUser = async () => {
  try {
    const { data } = await axios.get(`http://ip-api.com/json/`);
    return { error: false, data };
  } catch (error) {
    return { error: true, data: {} };
  }
};
