export default function Card({ movie }) {
  console.log(movie);

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
        <p className="card-text">{movie.abstract}</p>
      </div>
    </div>
  );
}
