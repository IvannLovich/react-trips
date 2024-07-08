import { FormProps } from '../types';
import '../styles/form.css';

export default function Form({
  cityName,
  departureDay,
  arrivalDay,
  handleChange,
  submitCity,
}: FormProps) {
  return (
    <form className="main__form" onSubmit={submitCity}>
      <div>
        <div className="main__form inputs--container">
          <input
            id="city"
            className="main__form input"
            type="text"
            name="location"
            value={cityName || ''}
            placeholder="Amsterdam, London, Bariloche..."
            onChange={handleChange}
            required
          />
          <input
            id="departure"
            className="main__form input"
            type="date"
            name="start"
            value={
              departureDay ? departureDay.toISOString().substring(0, 10) : ''
            }
            onChange={handleChange}
            required
          />
          <input
            id="arrival"
            className="main__form input"
            type="date"
            name="end"
            value={arrivalDay ? arrivalDay.toISOString().substring(0, 10) : ''}
            onChange={handleChange}
          />
        </div>
        <div className="main__form button--container">
          <input
            id="btn"
            className="main__form btn"
            type="submit"
            value="Submit"
          />
        </div>
      </div>
    </form>
  );
}
