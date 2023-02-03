import "./index.css";
import Layout from "./components/Layout";
import useForecast from "./hooks/queries/useForecast";
import { H1 } from "./components/Typography";

function App() {
  const { data, isLoading, isError } = useForecast();
  console.log(isLoading, data);

  return (
    <Layout>
      <div className="flex flex-col items-center gap-4">
        <H1>Weather in Gothenburg :sun:</H1>
      </div>
    </Layout>
  );
}

export default App;
