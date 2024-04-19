import { ChangeEvent, FormEvent, useState } from "react";
import { countries } from "../data/countries";
import { SearchType } from "../types/SearchType";
import Alert from "./Alert";

type FormProps = {
  fetchWeather: (search: SearchType) => Promise<void>;
};

export default function Form({ fetchWeather }: FormProps) {
  const [alert, setAlert] = useState("");
  const [search, setSearch] = useState<SearchType>({
    city: "",
    country: "",
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    setSearch({
      ...search,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (Object.values(search).includes("")) {
      setAlert("todos los campos son obligatorios");
    }

    fetchWeather(search);
  };

  return (
    <form onSubmit={handleSubmit}>
      {alert && <Alert>{alert}</Alert>}
      <div>
        <label htmlFor="city">city:</label>
        <input
          id="city"
          type="text"
          name="city"
          value={search.city}
          onChange={handleChange}
        ></input>
      </div>

      <div>
        <label htmlFor="country">Contry:</label>
        <select
          id="country"
          value={search.country}
          name="country"
          onChange={handleChange}
        >
          <option defaultValue="">-- Select a country --</option>
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
      <input type="submit" value="Consult weather" />
    </form>
  );
}
