import { Weather } from "../types/Weather";

type WeatherDetailProps = {
  weather: Weather;
};

export default function WeatherDetail({ weather }: WeatherDetailProps) {
  return (
    <div>
      <h2>Clima de {weather.name}</h2>
      <p>Actual: {(weather.main.temp - 273.15).toFixed(2)}&deg; C</p>
      <p>Minimo: {(weather.main.temp_min - 273.15).toFixed(2)}&deg; C</p>
      <p>Maximo: {(weather.main.temp_max - 273.15).toFixed(2)}&deg; C</p>
    </div>
  );
}
