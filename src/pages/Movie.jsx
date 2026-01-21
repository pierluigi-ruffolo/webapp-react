import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardMovie from "../components/CardMovie";

export default function Movie() {
  const [movie, SetMovie] = useState({});
  const { id } = useParams();
  const url = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    axios
      .get(`${url}/api/movies/${id}`)
      .then((res) => {
        SetMovie(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container text-white pt-5">
      <CardMovie movie={movie} />
    </div>
  );
}
