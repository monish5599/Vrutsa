import "./Footer.css";

const Footer = () => {
  return (
    <footer id="contact">
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-left">
          <h2>VRUTSA SOLUTIONS</h2>
          <p>
            We Solve Real Business & Individual Problems <br />
            with Scalable Solutions
          </p>

          <div className="social">
            <span>Social Links</span>
            <div className="icons">
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="Instagram">ig</a>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          <div className="contact-block">
            <h4>Contact</h4>
            <p>+91 1234567890</p>
            <p>vrutsasolutions@gmail.com</p>
          </div>

          <div className="contact-block">
            <h4>Address</h4>
            <p>Koyambedu, Chennai-600000</p>
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <a href="#">Privacy Policy</a>
        <span>|</span>
        <a href="#">Terms of Service</a>
      </div>
    </footer>
    </footer>
  );
};

export default Footer;
