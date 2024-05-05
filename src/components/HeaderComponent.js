import React from "react";

export const HeaderComponent = () => {
  return (
    <div>
  <header>
    <nav className="navbar navbar-expand-lg bg-body-dark navbar-dark">
      <div className="container-fluid">
        <span className="navbar-brand" href="#">
          Book Application
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="nav-link active" aria-current="page">
                Home
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</div>

 
  );
};
