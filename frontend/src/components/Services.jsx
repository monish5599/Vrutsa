import "./Services.css";

const Services = () => {
  return (
     <section id="services">
    <section className="services-section">
      <h2 className="services-title">OUR SERVICES</h2>

      {/* PYRAMID GRID */}
      <div className="services-grid pyramid">
        
        {/* TOP ROW */}
        <div className="service-card">
          <span className="service-number">01</span>
          <h3>Business Services</h3>
          <p>
            Enhancing operational efficiency and enterprise performance.
          </p>
        </div>

        <div className="service-card">
          <span className="service-number">02</span>
          <h3>Technology & SaaS Solutions</h3>
          <p>
            Scalable software platforms for modern businesses.
          </p>
        </div>

        {/* BOTTOM ROW (DIAGONAL) */}
        <div className="service-card">
          <span className="service-number">03</span>
          <h3>AI & Automation</h3>
          <p>
            Intelligent systems that streamline workflows and decisions.
          </p>
        </div>

        <div className="service-card">
          <span className="service-number">04</span>
          <h3>Digital Transformation</h3>
          <p>
            Modernizing enterprises through digital innovation.
          </p>
        </div>

        <div className="service-card">
          <span className="service-number">05</span>
          <h3>Supply Chain Optimization</h3>
          <p>
            Improving flow, visibility, and operational efficiency.
          </p>
        </div>

      </div>
    </section>
    </section>
  );
};

export default Services;
