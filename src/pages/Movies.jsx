import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../components/Card";

export default function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/movies/").then((res) => {
      setMovies(res.data);
    });
  }, []);

  return (
    <div className="container py-5 text-white">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {movies.map((movie) => (
          <div key={movie.id} className="col">
            <Card movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}
