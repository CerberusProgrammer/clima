import { Output, number, object, string } from "valibot";

export const WeatherSchema = object({
  name: string(),
  main: object({
    temp: number(),
    temp_max: number(),
    temp_min: number(),
  }),
});

export type Weather = Output<typeof WeatherSchema>;
