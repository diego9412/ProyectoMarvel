import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="bg-primary-subtle p-4">
      <section className="footer-info">
        <div className="footer-info-title">
          <h3>Marvel World</h3>
        </div>
        <div>
          <h3>Follow us</h3>
          <div className="social-media">
            <a href="https://www.facebook.com/" target="_blank">
              <img src="/src/assets/facebook.svg" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <img src="/src/assets/instagram.svg" alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank">
              <img src="/src/assets/linkedin.svg" alt="Linkedin" />
            </a>
            <a href="https://twitter.com/" target="_blank">
              <img src="/src/assets/twitter.svg" alt="Twitter" />
            </a>
          </div>
        </div>
        <div>
          <h3>Contact us</h3>
          <div className="contact-us">
            <a href="">
              <img src="/src/assets/phone.svg" alt="Phone" />
            </a>
            <a href="">
              <img src="/src/assets/email.svg" alt="Email" />
            </a>
          </div>
        </div>
      </section>
      <section className="section-developed">
        <h4>Developed by: Diego Alejandro Ramírez</h4>
        <h5>All rights reserved &copy;2023</h5>
      </section>
    </footer>
  );
};

export default Footer;
