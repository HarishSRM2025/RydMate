
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // important for toggle
import "bootstrap-icons/font/bootstrap-icons.css";

const Navbar2 = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ position: "sticky", top: "0px", backgroundColor: "#1c2b39", padding: "0", height: "60px", zIndex: 10 }}
    >
      <div className="container-fluid px-4">



        {/* Navbar Toggler (for mobile) */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Brand (optional) */}
        <a href="#" className="navbar-brand fw-bold text-danger">
          Rydmate
        </a>

        {/* Offcanvas Menu */}
        <div
          className="offcanvas offcanvas-start text-bg-dark"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          style={{ width: "250px" }}
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Menu
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-center flex-grow-1  text-star">
              <li className="nav-item mx-3">
                <a href="#" className="nav-link text-white fw-normal">
                  Home
                </a>
              </li>
              <li className="nav-item mx-3">
                <a href="#" className="nav-link text-white fw-normal">
                  About Us
                </a>
              </li>
              <li className="nav-item mx-3">
                <a href="#" className="nav-link text-white fw-normal">
                  Services
                </a>
              </li>
              <li className="nav-item mx-3">
                <a href="#" className="nav-link text-white fw-normal">
                  Our Fleets
                </a>
              </li>
              <li className="nav-item mx-3">
                <a href="#" className="nav-link text-white fw-normal">
                  Blog
                </a>
              </li>
              <li className="nav-item mx-3">
                <a href="#" className="nav-link text-white fw-normal">
                  Pages
                </a>
              </li>
              <li className="nav-item mx-3">
                <a href="#" className="nav-link text-white fw-normal">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Book Now Button */}
        <button
          className="btn text-white fw-normal px-4 py-2 d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: "#d63b50",
            borderRadius: "0",
            height: "100%",
            whiteSpace: "nowrap",
          }}
        >
          <a href="https://rydmate-user.netlify.app/" style={{ color: "#fff", textDecoration: "none" }}>Join us <i className="bi bi-arrow-right ms-2"></i></a>
        </button>
      </div>

      {/* ✅ Mobile Toggle Fix CSS */}
      <style>
        {`
          @media (max-width: 991px) {
            .navbar {
              position: relative;
              z-index: 2000;
            }
            .offcanvas {
              background-color: #1c2b39 !important;
            }
            .offcanvas-title {
              color: #fff;
            }
            .nav-link {
              color: #fff !important;
              font-size: 1rem;
              padding: 10px 0;
            }
            .nav-link:hover {
              color: #d63b50 !important;
            }
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar2;
