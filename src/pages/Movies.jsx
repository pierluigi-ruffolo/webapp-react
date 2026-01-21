import axios from "axios";
import { useState, useEffect } from "react";
import CardMovie from "../components/CardMovie";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [valuteTitle, SetValueTitle] = useState("");
  const [moviesNotFound, SetmoviesNotFound] = useState(false);
  const url = import.meta.env.VITE_BACKEND_URL;
  useEffect(() => {
    if (valuteTitle === "") {
      axios
        .get(`${url}/api/movies/`)
        .then((res) => {
          setMovies(res.data);
          SetmoviesNotFound(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .get(`${url}/api/movies/?title=${valuteTitle}`)
        .then((res) => {
          if (res.data.length === 0) {
            setMovies([]);
            SetmoviesNotFound(true);
          } else {
            setMovies(res.data);
            SetmoviesNotFound(false);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [valuteTitle]);

  return (
    <div className="container py-5 text-white">
      <label
        htmlFor="movieSearch"
        className="fs-4 form-label text-white-50 small"
      >
        Cerca un film per titolo
      </label>

      <div className="input-groug">
        <input
          id="movieSearch"
          type="text"
          className=" form-control bg-dark text-white border-secondary shadow-none"
          placeholder="Es: Inception, Matrix..."
          value={valuteTitle}
          onChange={(e) => {
            SetValueTitle(e.target.value);
          }}
        />
      </div>
      {moviesNotFound === false ? (
        ""
      ) : (
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center search-empty-banner">
              <span className="empty-icon">🔍</span>
              <h2 className="empty-title">Nessun film trovato</h2>
              <p className="empty-text">
                Nessun risultato corrisponde alla tua ricerca. Controlla
                eventuali errori di battitura o prova con un titolo diverso.
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="mt-2 row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {movies.map((movie) => (
          <div key={movie.id} className="col p-2">
            <CardMovie movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}
