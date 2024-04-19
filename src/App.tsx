import Form from "./components/Form";
import useWeather from "./hooks/useWeather";

export default function App() {
  const { fetchWeather } = useWeather();

  return (
    <>
      <div>App</div>
      <Form fetchWeather={fetchWeather}></Form>
    </>
  );
}
