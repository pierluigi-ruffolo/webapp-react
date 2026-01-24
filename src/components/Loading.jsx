export default function Loading() {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center py-5">
      <div className="spinner-border text-cyber-lime mt-5" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <p className="text-secondary mt-3">Caricamento in corso...</p>
    </div>
  );
}
