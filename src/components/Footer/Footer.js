import React from "react";
import "./Footer.css";
import footer from "../../assets/img/footer.png";
import { Link } from "react-router-dom";
function Footer() {
  const handleClick =()=>{
      window.scrollTo(0,0);
  }
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_wrapper">
          <div className="footer-box">
            <div className="logo">
              <div className="logo-img">
                <img src={footer} alt="" />
              </div>
              <h2>Edutech</h2>
            </div>
            <p>Embrace The Future Of Future And Innovation Of AI</p>
          </div>
          <div className="footer-box">
            <h4 className="footer_title">Company</h4>
            <ul className="footer_list">
              <li>
                <Link to='/courses'>Our Programs</Link>
              </li>
              <li>
                <a href="">Our Plan</a>
              </li>
              <li>
                {" "}
                <Link to='/services'>Become A Member</Link>
              </li>
            </ul>
          </div>
          <div className="footer-box">
            <h4 className="footer_title">Quick Links</h4>
            <ul className="footer_list">
              <li>
                <Link to='/about' onClick={handleClick}>About Us</Link>
              </li>
              <li>
                <Link to='contact' onClick={handleClick}>Contact Us</Link>
              </li>
              <li>
              <Link to='support'  onClick={handleClick}>Support Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
