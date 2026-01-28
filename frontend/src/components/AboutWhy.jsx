import "./AboutWhy.css";

const AboutWhy = () => {
  return (
    <section id="about">
    <section className="about-why">
      {/* WHO WE ARE */}
      <div className="who-we-are">
        <h2>Who we are</h2>
        <p>
          Vrutsa Solutions is a next-generation, multidisciplinary solutions firm built to solve real problems for individuals and businesses.

We operate on a Solutions-as-a-Service (SaaS) model, where every engagement starts with understanding the problem deeply and ends with a practical, outcome-driven solution.
        </p>
      </div>
<div className="who-we-work-with">
        
        <h2>Who We Work With</h2>
        <p>
          Individuals navigating career, business, finance, technology, or life decisions

Startups & Business seeking clarity, growth, or restructuring

Enterprises solving complex operational, strategic, or transformation challenges
        </p>
      </div>
      {/* WHY SECTION */}
      <h2 className="why-title">Why VRUTSA SOLUTIONS!</h2>

      {/* CARD 1 */}
      <div className="why-card">
        <img src="/src/assets/outcome.png" alt="Outcome driven" />
        <div>
          <h4>Outcome-driven approach</h4>
          <p>
            By continuously upgrading the quality of our processes, we customize
            technology to deliver measurable business outcomes for our clients.
          </p>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="why-card highlight">
        <div>
          <h4>SaaS-based delivery model</h4>
          <p>
            We implement scalable SaaS-based solutions that reduce cost,
            increase speed, and improve reliability.
          </p>
        </div>
        <img src="/src/assets/saas.png" alt="SaaS model" />
      </div>

      {/* CARD 3 */}
      <div className="why-card">
        <img src="/src/assets/industry.png" alt="Industry agnostic" />
        <div>
          <h4>Industry-agnostic expertise</h4>
          <p>
            Our solutions span across multiple industries with flexible and
            adaptable frameworks.
          </p>
        </div>
      </div>

      {/* CARD 4 */}
      <div className="why-card highlight">
        <div>
          <h4>Confidential & structured process</h4>
          <p>
            We follow strict confidentiality, security standards, and structured
            workflows to protect client data.
          </p>
        </div>
        <img src="/src/assets/confidential.png" alt="Confidential" />
      </div>
      
    </section>
    </section>
  );
};

export default AboutWhy;
