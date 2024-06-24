import '../styles/results.css';

export default function Trips({ daysLeft }: { daysLeft: number }) {
  return (
    <div className="main__results card">
      <div className="main__results card--content">
        <strong className="main__results card--title">
          My Trip to: {'Bariloche'}
        </strong>
        <div className="main__results card--details">
          <div className="main__results card--detail">
            <span>Date:</span>
            <p>{'27/05/2024'}</p>
          </div>
          <div className="main__results card--detail">
            <span>Days Left:</span>
            <p>{'20'}</p>
          </div>
          <div className="main__results card--detail">
            <span>Weather:</span>
            <p>{'mostly rainy'}</p>
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
        // data-index="${index}"
      >
        Remove Trip
      </button>
    </div>
  );
}
