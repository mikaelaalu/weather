import { addDays } from "date-fns";
import "./index.css";
import Layout from "./components/Layout";
import useForecast from "./hooks/queries/useForecast";
import { H1, ParagraphBold } from "./components/Typography";
import { formatDate } from "./helpers";
import WeatherInfo from "./components/WeatherInfo";

function App() {
  const { data, isLoading, isError } = useForecast();

  const getWeatherAhead = (days: number) => {
    const daysAhead = formatDate(addDays(new Date(), days));
    return data?.list.filter((days) => days.dt_txt.split(" ")[0] == daysAhead);
  };

  const oneDayAhead = getWeatherAhead(1);
  const twoDaysAhead = getWeatherAhead(2);
  const threeDaysAhead = getWeatherAhead(3);
  const fourDaysAhead = getWeatherAhead(4);

  if (isLoading) {
    <ParagraphBold>Loading forecast</ParagraphBold>;
  }

  if (isError) {
    <ParagraphBold>An error occurred, try again!</ParagraphBold>;
  }

  return (
    <Layout>
      <div className="flex flex-col items-center">
        <H1>Weather in Gothenburg ☀️</H1>
        {oneDayAhead && <WeatherInfo weather={oneDayAhead} />}
        {twoDaysAhead && <WeatherInfo weather={twoDaysAhead} />}
        {threeDaysAhead && <WeatherInfo weather={threeDaysAhead} />}
        {fourDaysAhead && <WeatherInfo weather={fourDaysAhead} />}
      </div>
    </Layout>
  );
}

export default App;
