import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { Forecast } from "../../types";

const URL = "https://api.openweathermap.org";

const useForecast = () => {
  return useQuery<Forecast, AxiosError>(["weather"], async () => {
    const { data } = await axios.get<any>(
      `${URL}/data/2.5/forecast?lat=57.708870&lon=11.974560&units=metric&appid=${
        import.meta.env.VITE_API_KEY
      }`
    );
    return data;
  });
};

export default useForecast;
