import React from 'react';
import './Footer.css'; // Custom styles
import "bootstrap-icons/font/bootstrap-icons.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="footer-section text-white pt-5 pb-3">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">About Rydmate</h5>
            <p>
              Search for will uncover many web sites variables onto of passages of lorem ipsum
              available but the majority the words all predefined humour to met chunks recently with
              desktop.
            </p>
            <div className="d-flex gap-2 mt-1">
              <a href="#"><i className="fab fa-facebook-f "></i></a>
              <a href="#"><i className="fab fa-twitter "></i></a>
              <a href="#"><i className="fab fa-linkedin-in "></i></a>
              <a href="#"><i className="fab fa-pinterest-p"></i></a>
              <a href="#"><i className="fab fa-instagram "></i></a>
            </div>
          </div>

          {/* Explore Links
          <div className="col-md-2 mb-4">
            <h5 className="fw-bold mb-3">Explore Links</h5>
            <ul className="list-unstyled footer-links">
              <li><i className="far fa-folder me-2"></i>Coupons</li>
              <li><i className="far fa-folder me-2"></i>Sitemap</li>
              <li><i className="far fa-folder me-2"></i>Cancellation</li>
              <li><i className="far fa-folder me-2"></i>Terms</li>
              <li><i className="far fa-folder me-2"></i>Privacy Policy</li>
              <li><i className="far fa-folder me-2"></i>Contact Us</li>
            </ul>
          </div> */}

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li>🔗About Us</li>
              <li>🔗Services</li>
              <li>🔗Our Fleets</li>
              <li>🔗Blog</li>
              <li>🔗Pages</li>
              <li>🔗Contact Us</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">Contact Info</h5>
            <ul className="list-unstyled">
              <li><i className="fas fa-home me-2"></i>10A, Rydmate, San Andreno, United States.</li>
              <li><i className="fas fa-envelope me-2"></i>rydmate@booking.com</li>
              <li><i className="fas fa-phone me-2"></i>+1-333-444-555</li>
              <li><i className="fas fa-globe me-2"></i>www.rydmate.com</li>
            </ul>
          </div>
        </div>

        <hr className="bg-white" />

        {/* Bottom Bar */}
        <div className="d-flex justify-content-between align-items-center flex-wrap text-center text-md-start">
          <p className="mb-0">
            &copy; Copyrights 2018 <span className="text-danger">Prime Cab</span>. All Rights
            Reserved.
          </p>
          {/* <div className="d-flex gap-2 mt-3 mt-md-0">
            <img src="your-path/visa.png" alt="Visa" />
            <img src="your-path/mastercard.png" alt="MasterCard" />
            <img src="your-path/paypal.png" alt="PayPal" />
            <img src="your-path/discover.png" alt="Discover" />
            <img src="your-path/jcb.png" alt="JCB" />
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
