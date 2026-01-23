import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const formObj = {
  title: "",
  director: "",
  genre: "",
  release: "",
  abstract: "",
  image: null,
};

export default function CreateMovie() {
  const [valueForm, setValueForm] = useState(formObj);
  const [urlImg, setUrlImg] = useState(null);
  const navigate = useNavigate();
  function addValueForm(e) {
    const { name, type, value, files } = e.target;

    if (type === "file") {
      const file = files[0];
      const image = URL.createObjectURL(file);
      setUrlImg(image);
      setValueForm({
        ...valueForm,
        image: file,
      });
    } else {
      setValueForm({
        ...valueForm,
        [name]: value,
      });
    }
  }

  function sendingForm(e) {
    e.preventDefault();
    if (valueForm.title === "") {
    } else {
      const date = new FormData();
      date.append("title", valueForm.title);
      date.append("director", valueForm.director);
      date.append("genre", valueForm.genre);
      date.append("release", valueForm.release);
      date.append("abstract", valueForm.abstract);
      date.append("image", valueForm.image);
      axios
        .post("http://localhost:3000/api/movies/", date, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((resalt) => {
          const slug = resalt.data.resalt;
          setValueForm(formObj);
          navigate(`/movies/${slug}`);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <div className="container pt-5">
      <div className="card bg-dark border-secondary p-4 rounded-4">
        <h4 className="text-white mb-4">Aggiungi un film</h4>
        <form onSubmit={sendingForm}>
          <div className="mb-3">
            <label
              htmlFor="title"
              className="form-label text-white-50 small text-uppercase fw-bold"
            >
              titolo
            </label>
            <input
              type="text"
              className="form-control bg-dark text-white border-secondary"
              id="title"
              name="title"
              onChange={addValueForm}
              value={valueForm.title}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="director"
              className="form-label text-white-50 small text-uppercase fw-bold"
            >
              diretto da
            </label>
            <input
              type="text"
              className="form-control bg-dark text-white border-secondary"
              id="director"
              name="director"
              onChange={addValueForm}
              value={valueForm.director}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="genre"
              className="form-label text-white-50 small text-uppercase fw-bold"
            >
              genere
            </label>
            <input
              type="text"
              className="form-control bg-dark text-white border-secondary"
              id="genre"
              name="genre"
              onChange={addValueForm}
              value={valueForm.genre}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="release"
              className="form-label text-white-50 small text-uppercase fw-bold"
            >
              Anno uscita
            </label>
            <input
              type="number"
              className="form-control bg-dark text-white border-secondary"
              id="release"
              name="release"
              onChange={addValueForm}
              value={valueForm.release}
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="abstract"
              className="form-label text-white-50 small text-uppercase fw-bold"
            >
              descrizione
            </label>
            <textarea
              className="form-control bg-dark text-white border-secondary"
              id="abstract"
              name="abstract"
              rows="4"
              onChange={addValueForm}
              value={valueForm.abstract}
            ></textarea>
            <div>{urlImg && <img className="mt-4 w-25" src={urlImg} />}</div>

            <div className="mb-3 mt-3">
              <label
                htmlFor="image"
                className="form-label text-white-50 small text-uppercase fw-bold"
              >
                immagine
              </label>
              <input
                type="file"
                className="form-control bg-dark text-white border-secondary"
                id="image"
                name="image"
                onChange={addValueForm}
              />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-outline-success fs-5">
              Aggiungi film
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
