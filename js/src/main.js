import WeatherSearchForm from './components/WeatherSearchForm.js';
import WeatherDisplay from './components/WeatherDisplay.js';
import ForecastList from './components/ForecastList.js';

const App = () => {
  const [weatherData, setWeatherData] = React.useState({});

  React.useEffect(()=> {
    console.log("weatherData changed in the app component.")
    console.log(weatherData);
  }, [weatherData]);

  return <div>
    <nav className="navbar navbar-expand-lg navbar-dark primary-color">
      <a className="navbar-brand" href="#">Weather App</a>
    </nav>
    <div className="container">
      <WeatherSearchForm
        setWeatherData={setWeatherData}/>
      <section className="weather-display">
        <WeatherDisplay
          weatherData={weatherData} />
        <ForecastList
          weatherData={weatherData} />
      </section>
    </div>
  </div>
}

let reactContainer = document.querySelector("#react-container");
ReactDOM.render(<App/>, reactContainer);
