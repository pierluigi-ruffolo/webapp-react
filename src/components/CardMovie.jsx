import { Link } from "react-router-dom";
import imgCineApp from "../assets/img/cineapp.png";
import { useFavoriteContext } from "../context/FavoriteMoviesContext";
export default function CardMovie({ movie }) {
  const url = import.meta.env.VITE_BACKEND_URL;
  const { favoriteMovies, toggleFavorite } = useFavoriteContext();

  const round = Math.round(movie.vote_movie);
  let vote = "";
  for (let i = 0; i < 5; i++) {
    if (round > i) {
      vote += "★";
    } else {
      vote += "☆";
    }
  }

  const find = favoriteMovies.find((m) => m.id === movie.id);

  return (
    <div className="card border border-0">
      <div className="image-wrapper position-relative">
        <img
          src={
            movie.image === null ? `${imgCineApp}` : `${url}/img/${movie.image}`
          }
          className="card-img-top"
          alt={movie.title}
        />
        <button
          onClick={() => {
            toggleFavorite(movie);
          }}
          className="btn btn-dark btn-sm position-absolute top-0 end-0 m-2 rounded-circle border-1 shadow-lg d-flex align-items-center justify-content-center p-2"
        >
          {find === undefined ? (
            <span className="text-warning fs-5">☆</span>
          ) : (
            <span className="text-warning fs-5">★</span>
          )}
        </button>
      </div>
      <div className="card-body rp-card-body">
        <h5 className="card-title fw-bold text-white fs-3">{movie.title}</h5>
        <p className="card-text text-secondary fs-5">
          {movie.genre} • Dir: {movie.director}
        </p>
        <div className="mb-2">
          <span className="text-white-50 fs-5">Voto:</span>
          <span className="fs-5 text-warning"> {vote}</span>
        </div>
        <p className="card-text text-white-50 fs-5">{movie.abstract}</p>

        <Link
          className="mt-2 btn btn-dark border-secondary rounded-pill px-4 py-2 d-inline-flex align-items-center transition-all shadow-sm"
          to={`/movies/${movie.slug}`}
        >
          <span className="me-2">👉</span>
          <span className="fw-semibold text-uppercase small">
            Visualizza dettagli
          </span>
        </Link>
      </div>
    </div>
  );
}
