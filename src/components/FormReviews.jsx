import { useState } from "react";

const objValueForm = {
  name: "",
  vote: 1,
  text: "",
};

export default function FormReviews() {
  const [valueForm, SetValueForm] = useState(objValueForm);

  function updateValueForm(event) {
    const { value, name } = event.target;
    SetValueForm({
      ...valueForm,
      [name]: value,
    });
  }

  return (
    <div className="card bg-dark border-secondary p-4 rounded-4">
      <h4 className="text-white mb-4">Lascia una recensione</h4>
      <form>
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
