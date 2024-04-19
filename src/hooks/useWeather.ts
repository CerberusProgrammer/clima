import { parse } from "valibot";
import { SearchType } from "../types/SearchType";
import axios from "axios";
import { WeatherSchema } from "../types/Weather";

export default function useWeather() {
  const fetchWeather = async (search: SearchType): Promise<void> => {
    const appId = import.meta.env.VITE_API_KEY;

    try {
      const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`;
      const { data } = await axios.get(geoUrl);

      const lat = data[0].lat;
      const lon = data[0].lon;

      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;
      const { data: weather } = await axios.get(weatherUrl);

      const result = parse(WeatherSchema, weather);

      if (result) {
        console.log(result.main.temp);
      }
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    fetchWeather,
  };
}
