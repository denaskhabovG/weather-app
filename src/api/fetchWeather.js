import axios from "axios";

export const getWeatherData = async (city) => {
    const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3c13d155dfbb79178a15f5377ed1565c`);
    return res.data;
}
