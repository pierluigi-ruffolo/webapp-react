export default function Card({ movie }) {
  console.log(movie);

  return (
    <div class="card">
      <img
        src={`http://localhost:3000/img/${movie.image}`}
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">{movie.title}</h5>
        <p class="card-text">
          {movie.genre} • Dir: {movie.director}
        </p>
        <p class="card-text">{movie.abstract}</p>
      </div>
    </div>
  );
}
