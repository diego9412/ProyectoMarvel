import React from "react";
import "./footer.css";
import facebookLogo from "/facebook.svg";
import instagramLogo from "/instagram.svg";
import linkedinLogo from "/linkedin.svg";
import twitterLogo from "/twitter.svg";
import phoneLogo from "/phone.svg";
import emailLogo from "/email.svg";

const Footer = () => {
  return (
    <footer className="p-4">
      <section className="footer-info">
        <div className="footer-info-title">
          <h3>Marvel World</h3>
        </div>
        <div>
          <h3>Follow us</h3>
          <div className="social-media">
            <a href="https://www.facebook.com/" target="_blank">
              <img src={facebookLogo} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <img src={instagramLogo} alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank">
              <img src={linkedinLogo} alt="Linkedin" />
            </a>
            <a href="https://twitter.com/" target="_blank">
              <img src={twitterLogo} alt="Twitter" />
            </a>
          </div>
        </div>
        <div>
          <h3>Contact us</h3>
          <div className="contact-us">
            <a href="">
              <img src={phoneLogo} alt="Phone" />
            </a>
            <a href="">
              <img src={emailLogo} alt="Email" />
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
