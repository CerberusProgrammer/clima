import Form from "./components/Form";
import WeatherDetail from "./components/WeatherDetail";
import useWeather from "./hooks/useWeather";

export default function App() {
  const { weather, fetchWeather, hasWeatherData } = useWeather();

  return (
    <>
      <div>App</div>
      <Form fetchWeather={fetchWeather}></Form>
      {hasWeatherData && <WeatherDetail weather={weather} />}
    </>
  );
}
