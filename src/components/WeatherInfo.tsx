import React from "react";
import {
  getMinTemp,
  getMaxTemp,
  getAverageTemp,
  getMedianTemp,
} from "../helpers";
import { Weather } from "../types";
import { Paragraph } from "./Typography";

type Props = {
  weather: Weather[];
};
const WeatherInfo = ({ weather }: Props) => {
  const tempratures = weather.map((w) => w.main.temp);

  return (
    <div className="flex flex-col">
      <div className="flex gap-4">
        <div className="flex flex-col items-center">
          <Paragraph>Min temp:</Paragraph>
          {getMinTemp(tempratures)}
        </div>

        <div className="flex flex-col items-center">
          <Paragraph>Max temp:</Paragraph>
          {getMaxTemp(tempratures)}
        </div>

        <div className="flex flex-col items-center">
          <Paragraph>Avrage temp:</Paragraph>
          {getAverageTemp(tempratures)}
        </div>

        <div className="flex flex-col items-center">
          <Paragraph>Median temp:</Paragraph>
          {getMedianTemp(tempratures)}
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
