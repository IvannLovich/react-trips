import NavBar from './components/NavBar';
import Form from './components/Form';
import Trips from './components/Trips';
import { useState, useEffect, useRef } from 'react';
import { useDestination } from './hooks/useDestination';
import { useDaysLeft } from './hooks/useDaysLeft';

import './App.css';
import './styles/main.css';
import { useWeather } from './hooks/useWeather';

const currentDay = new Date();
function App() {
  const [travels, setTravels] = useState([]);
  const cityNameRef = useRef<HTMLInputElement>(null);
  const departureDayRef = useRef<HTMLInputElement>(null);
  const arrivalDayRef = useRef<HTMLInputElement>(null);

  const { latitude, longitude, city, refreshLatitudeLongitude } =
    useDestination({
      cityNameRef,
      currentDay,
      departureDayRef,
      arrivalDayRef,
    });
  const { temperature, getWeatherInfo } = useWeather({ latitude, longitude });
  const { days, daysLeftToTrip } = useDaysLeft({ currentDay, departureDayRef });

  // useEffect(() => {
  //   console.log('new latitude and longitude');
  // }, [refreshLatitudeLongitude]);

  useEffect(() => {
    if (latitude && longitude) {
      getWeatherInfo();
    }
  }, [latitude, longitude, getWeatherInfo]);

  // const handleChange = useCallback(
  //   (event: React.ChangeEvent<HTMLInputElement>) => {
  //     const { name, value } = event.target;

  //     switch (name) {
  //       case 'location':
  //         setCityName(value);
  //         break;
  //       case 'start':
  //         setDepartureDay(new Date(value));
  //         break;
  //       case 'end':
  //         setArrivalDay(new Date(value));
  //         break;
  //       default:
  //         break;
  //     }
  //   },
  //   []
  // );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Call refreshLatitudeLongitude with the current values
    refreshLatitudeLongitude();
    daysLeftToTrip();
  };

  console.log(days);
  console.log(city);
  console.log(temperature);
  return (
    <div>
      <header className="header">
        <NavBar />
      </header>
      <main className="main">
        <section>
          <Form
            cityNameRef={cityNameRef}
            departureDayRef={departureDayRef}
            arrivalDayRef={arrivalDayRef}
            // handleChange={handleChange}
            submitCity={handleSubmit}
          />
        </section>
        <section>{temperature && <Trips daysLeft={days} />}</section>
      </main>
    </div>
  );
}

export default App;
