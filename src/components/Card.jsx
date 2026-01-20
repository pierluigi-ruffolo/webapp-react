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
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">
          {movie.genre} • Dir: {movie.director}
        </p>
        <p>
          <p>
            Vote:<span className="fs-5"> {vote}</span>
          </p>
        </p>
        <p className="card-text">{movie.abstract}</p>
      </div>
    </div>
  );
}
