export type Weather = {
  dt_txt: string;
  main: {
    temp: number;
  };
};

export type Forecast = {
  list: Weather[];
};
