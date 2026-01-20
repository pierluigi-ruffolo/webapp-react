import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className=" hero-section d-flex align-items-center justify-content-center">
      <div className="container text-center">
        <h1 className="display-1 fw-bold">CineSphere</h1>
        <p className="lead fs-3 mb-4">
          Immergiti nel mondo del cinema. Scopri i dettagli di ogni pellicola:
          dal <strong>regista</strong> alle <strong>recensioni</strong>, tutto
          ciò che devi sapere sul tuo prossimo film preferito.
        </p>
        <Link
          to="/movies"
          className="btn btn-primary btn-lg px-5 py-3 fs-4 shadow"
        >
          Inizia l'Esplorazione
        </Link>
      </div>
    </section>
  );
}
