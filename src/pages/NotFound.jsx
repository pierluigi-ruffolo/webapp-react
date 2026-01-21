import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="pt-5 d-flex align-items-center justify-content-center text-center">
      <div>
        <h1 className="display-1 fw-bold text-cyber-lime shadow-sm">404</h1>

        <h2 className="text-white mb-3">Pagina non trovata</h2>

        <p className="text-secondary mb-4">
          Spiacenti, il contenuto che cerchi non è disponibile.
        </p>

        <Link to="/" className="btn btn-outline-light rounded-pill px-4">
          Torna alla Home
        </Link>
      </div>
    </div>
  );
}
