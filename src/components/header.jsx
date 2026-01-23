import { NavLink } from "react-router-dom";

export default function Header() {
  const links = [
    {
      to: "/",
      name: "Home",
    },
    {
      to: "/movies",
      name: "movies",
    },
    {
      to: "/movies/create",
      name: "add movies",
    },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <NavLink className="navbar-brand fs-4" to="/">
          CineApp
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            {links.map((link, index) => (
              <li key={index} className="nav-item fs-4">
                <NavLink className="nav-link" to={link.to}>
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
