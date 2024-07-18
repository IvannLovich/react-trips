import NavBar from './components/NavBar';
import Form from './components/Form';
import Trips from './components/Trips';
import { useDestination } from './hooks/useDestination';
import { useDaysLeft } from './hooks/useDaysLeft';
import { useWeather } from './hooks/useWeather';
import { useForm } from './hooks/useForm';

import './App.css';
import './styles/main.css';

import uniqid from 'uniqid';

const currentDay = new Date();
function App() {
  const {
    travels,
    addNewTravel,
    cityName,
    choiseNewCity,
    departureDay,
    choiseDepartureDay,
    arrivalDay,
    choiseArrivalDay,
  } = useForm();

  const { latitude, longitude, refreshLatitudeLongitude } = useDestination({
    cityName,
    currentDay,
    departureDay,
    arrivalDay,
  });
  const { temperature, getWeatherInfo } = useWeather({ latitude, longitude });
  const { days, daysLeftToTrip } = useDaysLeft({ currentDay, departureDay });

  // useEffect(() => {
  //   console.log('new latitude and longitude');
  // }, [refreshLatitudeLongitude]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    switch (name) {
      case 'location':
        choiseNewCity(value);
        break;
      case 'start':
        choiseDepartureDay(new Date(value));
        break;
      case 'end':
        choiseArrivalDay(new Date(value));
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await refreshLatitudeLongitude({ cityName });
    await daysLeftToTrip();
    await getWeatherInfo();

    const newTrip = {
      id: uniqid(),
      destinationName: cityName,
      tripDate: departureDay,
      daysLeft: days,
      temperature: temperature,
    };

    addNewTravel(newTrip);
  };

  return (
    <div>
      <header className="header">
        <NavBar />
      </header>
      <main className="main">
        <section id="form">
          <Form
            cityName={cityName}
            departureDay={departureDay}
            arrivalDay={arrivalDay}
            handleChange={handleChange}
            submitCity={handleSubmit}
          />
        </section>
        <section id="results">{travels && <Trips travels={travels} />}</section>
      </main>
    </div>
  );
}

export default App;
