import CardMovie from "../components/CardMovie";
import { useFavoriteContext } from "../context/FavoriteMoviesContext";
import { Link } from "react-router-dom";
export default function FavoriteMovies() {
  const { favoriteMovies } = useFavoriteContext();
  return (
    <div className="container pt-4">
      {favoriteMovies.length === 0 ? (
        <div className="text-center py-5">
          <span className="display-1 d-block mb-3">🎬</span>
          <h3 className="text-white fw-light">Nessun preferito salvato</h3>
          <p className="text-secondary mb-4">
            La tua lista è vuota al momento.
          </p>
          <Link
            to="/movies"
            className="btn btn-outline-warning rounded-pill px-4"
          >
            Torna alla lista film
          </Link>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          {favoriteMovies.map((movie) => (
            <div key={movie.id} className="col p-2 mt-2">
              <CardMovie movie={movie} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
