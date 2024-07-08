import '../styles/results.css';
import { Travels } from '../types';

export default function Trips({ travels }: { travels: Travels[] }) {
  return (
    <>
      {travels.map((trip, index) => (
        <div className="main__results card" key={index}>
          <div className="main__results card--content">
            <strong className="main__results card--title">
              My Trip to: {trip.destinationName}
            </strong>
            <div className="main__results card--details">
              <div className="main__results card--detail">
                <span>Date:</span>
                {/* <p>{trip.tripDate}</p> */}
              </div>
              <div className="main__results card--detail">
                <span>Days Left:</span>
                <p>{trip.daysLeft}</p>
              </div>
              <div className="main__results card--detail">
                <span>Weather:</span>
                <p>{trip.temperature}</p>
              </div>
              <div className="main__results card--detail">
                <img
                  src="{}"
                  alt="Photo of selected destination"
                  width="170"
                  height="90"
                />
              </div>
            </div>
          </div>
          <button
            id="remove"
            className="main__results card--button"
            type="button"
          >
            Remove Trip
          </button>
        </div>
      ))}
    </>
  );
}
