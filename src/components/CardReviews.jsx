export default function CardReviews({ review }) {
  return (
    <div className="card bg-dark border-secondary text-light mt-3 shadow-sm">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h6 className="card-title mb-0 text-cyber-lime fw-bold fs-4">
            @{review.name}
          </h6>

          <span className="badge rounded-pill bg-secondary fs-5">
            ⭐ {review.vote}/5
          </span>
        </div>

        <p className="mt-3 card-text text-secondary small italic fs-5">
          {review.text}
        </p>
      </div>
    </div>
  );
}
