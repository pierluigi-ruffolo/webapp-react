import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../components/Card";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [volueTitle, SetValueTitle] = useState("");

  useEffect(() => {
    if (volueTitle === "") {
      axios
        .get("http://localhost:3000/api/movies/")
        .then((res) => {
          setMovies(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .get(`http://localhost:3000/api/movies/?title=${volueTitle}`)
        .then((res) => {
          if (res.data.length === 0) {
            setMovies([]);
          } else {
            setMovies(res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [volueTitle]);

  return (
    <div className="container py-5 text-white">
      <label
        htmlFor="movieSearch"
        className="fs-4 form-label text-white-50 small"
      >
        Cerca un film per titolo
      </label>

      <div className="input-group">
        <input
          id="movieSearch"
          type="text"
          className="form-control bg-dark text-white border-secondary shadow-none"
          placeholder="Es: Inception, Matrix..."
          value={volueTitle}
          onChange={(e) => {
            SetValueTitle(e.target.value);
          }}
        />
      </div>
      {movies.length === 0 && (
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
          <div key={movie.id} className="col">
            <Card movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}
