import "./Hero.css";
const handleGetInTouch = () => {
  const section = document.getElementById("get-in-touch");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Hero = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: "url(/assets/hero-bg.png)" }}
    >
      {/* HEADER */}
      <header className="hero-header">
        <div className="logo-area">
          <img src="/assets/logo.png" alt="Vrutsa Solutions" />
          <span>VRUTSA</span>
        </div>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="cta-btn" onClick={handleGetInTouch}>
  GET IN TOUCH
</button>
      </header>

      {/* HERO CONTENT */}
      <div className="hero-content">
        <p className="tagline">SaaS - Solutions as a Service</p>

        <h1>
          The Next Generation solutions for <br />
          complex challenges
        </h1>

        <p className="description">
          From enterprises to individuals, Vrutsa Solutions advises,
          designs, builds, and delivers outcomes.
        </p>
      </div>
    </section>
  );
};

export default Hero;
