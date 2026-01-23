import axios from "axios";
import { useState } from "react";

export default function FormReviews({ id, requestMovie }) {
  const url = import.meta.env.VITE_BACKEND_URL;
  const [valueForm, SetValueForm] = useState({
    name: "",
    vote: 1,
    text: "",
  });
  const [errorFormValue, SetErrorFormValue] = useState(false);

  function updateValueForm(event) {
    const { value, name } = event.target;
    SetValueForm({
      ...valueForm,
      [name]: value,
    });
  }

  function sendingFormReviews(e) {
    e.preventDefault();
    const name = valueForm.name;
    const vote = valueForm.vote;
    if (!isNaN(valueForm.name) || name === "" || vote < 0 || vote > 5) {
      SetErrorFormValue(true);
      setTimeout(() => {
        SetErrorFormValue(false);
      }, 3000);

      return;
    }
    axios.post(`${url}/api/movies/${id}/reviews`, valueForm).then((res) => {
      SetValueForm({
        name: "",
        vote: 1,
        text: "",
      });
      requestMovie();
    });
  }

  return (
    <div className="card bg-dark border-secondary p-4 rounded-4">
      {errorFormValue && (
        <h2 className="text-warning mb-4">
          Nome non valido o voto fuori intervallo.
        </h2>
      )}
      <h4 className="text-white mb-4">Lascia una recensione</h4>
      <form onSubmit={sendingFormReviews}>
        <div className="mb-3">
          <label
            htmlFor="name"
            className="form-label text-white-50 small text-uppercase fw-bold"
          >
            Nome
          </label>
          <input
            type="text"
            className="form-control bg-dark text-white border-secondary"
            id="name"
            name="name"
            onChange={updateValueForm}
            value={valueForm.name}
            required
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="vote"
            className="form-label text-white-50 small text-uppercase fw-bold"
          >
            Voto (1-5)
          </label>
          <input
            type="number"
            className="form-control bg-dark text-white border-secondary"
            id="vote"
            name="vote"
            min="1"
            max="5"
            onChange={updateValueForm}
            value={valueForm.vote}
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="text"
            className="form-label text-white-50 small text-uppercase fw-bold"
          >
            Recensione
          </label>
          <textarea
            className="form-control bg-dark text-white border-secondary"
            id="text"
            name="text"
            rows="4"
            onChange={updateValueForm}
            value={valueForm.text}
          ></textarea>
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-outline-success fs-5">
            Invia Recensione
          </button>
        </div>
      </form>
    </div>
  );
}
