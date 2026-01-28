import "./viswa.css";

const services = [
  {
    no: "01",
    title: "Business Solutions",
    desc: "Enhancing operational efficiency and enterprise performance.",
  },
  {
    no: "02",
    title: "Technology & SaaS Solutions",
    desc: "Scalable software platforms for modern businesses.",
  },
  {
    no: "03",
    title: "AI & Automation",
    desc: "Intelligent systems that streamline workflows and decisions.",
  },
  {
    no: "04",
    title: "Digital Transformation",
    desc: "Modernizing enterprises through digital innovation.",
  },
];

const Viswa = () => {
  return (
    <section id="services" className="servicesSection">
      <div className="servicesHeader">
        <h2 className="servicesTitle">OUR SERVICES</h2>
      </div>

      <div className="servicesGrid">
        {services.map((item, index) => (
          <div key={index} className="serviceCard">
            <span className="serviceNo">{item.no}</span>
            <h3 className="cardTitle">{item.title}</h3>
            <p className="cardDesc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Viswa;
