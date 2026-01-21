import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import imgCineApp from "../assets/img/cineapp.png";
import CardReviews from "../components/CardReviews";
export default function Movie() {
  const [movie, SetMovie] = useState(null);
  const { id } = useParams();
  const url = import.meta.env.VITE_BACKEND_URL;

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${url}/api/movies/${id}`)
      .then((res) => {
        SetMovie(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {movie === null ? (
        <div className="container d-flex flex-column align-items-center justify-content-center py-5">
          <div className="spinner-border text-cyber-lime mt-5" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="text-secondary mt-3">Caricamento in corso...</p>
        </div>
      ) : (
        <>
          <div className="rp-hero-banner-movie">
            <img
              src={
                movie.image === null
                  ? `${imgCineApp}`
                  : `${url}/img/${movie.image}`
              }
              alt=""
            />
          </div>
          <div className="container mt-5">
            <div className="row">
              <div className="col-lg-8">
                <h3 className="text-white mb-3 fs-2">Trama</h3>
                <p className="lead text-light lh-lg fs-4">{movie.abstract}</p>
                <button
                  className=" mt-2 btn btn-dark border-secondary rounded-pill px-4 py-2 d-inline-flex align-items-center transition-all shadow-sm"
                  onClick={() => navigate(-1)}
                >
                  <span className="me-2">👈</span>
                  <span className="fw-semibold text-uppercase small">
                    Torna ai film
                  </span>
                </button>
              </div>

              <div className="col-lg-4">
                <div className="bg-dark p-4 rounded-4 border border-secondary shadow h-100">
                  <h4 className="h5 text-white mb-4">Dettagli</h4>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <span className="text-secondary d-block small">
                        TITOLO
                      </span>
                      <span className="text-white fw-bold">{movie.title}</span>
                    </li>
                    <li className="mb-3">
                      <span className="text-secondary d-block small">
                        REGISTA
                      </span>
                      <span className="text-white fw-bold">
                        {movie.director}
                      </span>
                    </li>
                    <li className="mb-3">
                      <span className="text-secondary d-block small">
                        GENERE
                      </span>
                      <span className="badge bg-secondary">{movie.genre}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                {movie.reviews.length > 0 ? (
                  movie.reviews.map((review) => (
                    <CardReviews key={review.id} review={review} />
                  ))
                ) : (
                  <div className="mt-4 text-center py-5 border border-secondary border-dashed rounded-3">
                    <p className=" mb-0 fs-3 text-white">
                      Non ci sono ancora recensioni per questo film.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
