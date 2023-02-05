import {
  getMinNumber,
  getMaxNumber,
  getAverageNumber,
  getMedianNumber,
} from "../helpers";
import { Weather } from "../types";
import { H2, ParagraphBold, ParagraphSmall } from "./Typography";

type Props = {
  weather: Weather[];
};

const WeatherInfo = ({ weather }: Props) => {
  const tempratures = weather.map((w) => w.main.temp);
  const date = weather[0].dt_txt.split(" ")[0];

  return (
    <div className="flex flex-col mb-6">
      <H2>{date}</H2>
      <div className="flex gap-6 my-2">
        <div className="flex flex-col items-center ">
          <ParagraphSmall>Min</ParagraphSmall>
          <ParagraphBold>{getMinNumber(tempratures)}</ParagraphBold>
        </div>

        <div className="flex flex-col items-center">
          <ParagraphSmall>Max</ParagraphSmall>
          <ParagraphBold>{getMaxNumber(tempratures)}</ParagraphBold>
        </div>

        <div className="flex flex-col items-center">
          <ParagraphSmall>Avrage</ParagraphSmall>
          <ParagraphBold>{getAverageNumber(tempratures)}</ParagraphBold>
        </div>

        <div className="flex flex-col items-center">
          <ParagraphSmall>Median</ParagraphSmall>
          <ParagraphBold>{getMedianNumber(tempratures)}</ParagraphBold>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default WeatherInfo;
