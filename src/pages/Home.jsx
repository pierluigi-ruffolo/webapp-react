import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardMovie from "../components/CardMovie.jsx";
export default function Home() {
  const url = import.meta.env.VITE_BACKEND_URL;
  const [movies, SetMovies] = useState(null);

  useEffect(() => {
    axios
      .get(`${url}/api/movies/`)
      .then((res) => {
        const resMovies = res.data;
        const moviesTopValue = resMovies.filter((movie) => {
          const round = Math.round(movie.vote_movie);
          return round > 3;
        });

        SetMovies(moviesTopValue);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {" "}
      <div className="container pt-3">
        {movies && (
          <>
            <h2 className="pt-5 pb-2 text-white text-uppercase fw-bold border-start border-4 border-cyber-lime ps-3">
              Scelti per te <span className="text-warning">★★★★</span>
            </h2>
            <div className="mt-2 row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              {movies.map((movie) => (
                <div key={movie.id} className="col p-2">
                  <CardMovie movie={movie} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <section className=" mt-5 pb-4 hero-section d-flex align-items-center justify-content-center">
        <div className="container text-center">
          <h1 className="display-1 fw-bold">CineSphere</h1>
          <p className="lead fs-3 mb-4">
            Immergiti nel mondo del cinema. Scopri i dettagli di ogni pellicola:
            dal <strong>regista</strong> alle <strong>recensioni</strong>, tutto
            ciò che devi sapere sul tuo prossimo film preferito.
          </p>
          <Link
            to="/movies"
            className="btn btn-outline-primary btn-lg px-5 py-3 fs-4"
          >
            Inizia l'Esplorazione
          </Link>
        </div>
      </section>
    </>
  );
}
