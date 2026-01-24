import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardMovie from "../components/CardMovie.jsx";
import Loading from "../components/Loading.jsx";
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
    <div className="container pt-3">
      <section className="hero-section d-flex align-items-center justify-content-center border-bottom border-secondary border-opacity-25">
        <div className="container py-lg-5 text-center">
          <span className="badge rounded-pill text-bg-warning px-3 py-2 mb-3 text-uppercase fw-bold ls-wide">
            Scopri il Cinema
          </span>

          <h1 className="display-1 fw-black text-white mb-3">
            Cine<span className="text-warning">Sphere</span>
          </h1>

          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <p className="lead fs-4 text-white-50 mb-5">
                Immergiti nel mondo del cinema. Scopri i dettagli di ogni
                pellicola: dal{" "}
                <span className="text-white fw-semibold">regista</span> alle{" "}
                <span className="text-white fw-semibold">recensioni</span>.
                Tutto ciò che devi sapere.
              </p>

              <div className="d-flex gap-3 justify-content-center">
                <Link
                  to="/movies"
                  className="btn btn-warning btn-lg rounded-pill px-5 py-3 fw-bold shadow-lg"
                >
                  Esplora Film
                </Link>
                <Link
                  to="/movies/favorite"
                  className="btn btn-outline-light btn-lg rounded-pill px-5 py-3"
                >
                  I tuoi preferiti
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {movies === null ? (
        <Loading />
      ) : (
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
  );
}
