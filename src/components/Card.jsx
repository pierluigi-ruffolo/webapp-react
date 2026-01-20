export default function Card({ movie }) {
  const round = Math.round(movie.vote_movie);
  console.log(round);
  let vote = "";

  for (let i = 0; i < 5; i++) {
    if (round > i) {
      vote += "★";
    } else {
      vote += "☆";
    }
  }

  return (
    <div className="card border border-0">
      <div className="image-wrapper">
        <img
          src={`http://localhost:3000/img/${movie.image}`}
          className="card-img-top"
          alt={movie.title}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title fw-bold text-white">{movie.title}</h5>
        <p className="card-text text-secondary small">
          {movie.genre} • Dir: {movie.director}
        </p>
        <div className="mb-2">
          <span className="text-white-50 small">Voto:</span>
          <span className="fs-5 text-warning"> {vote}</span>
        </div>
        <p className="card-text text-white-50 small">{movie.abstract}</p>
      </div>
    </div>
  );
}
