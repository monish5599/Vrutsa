import { useState } from "react";
import "./FocusAreas.css";

const individualData = [
  { img: "/assets/Career guidance & growth.png", title: "Career Guidance", desc: "Helping you build skills, confidence, and clear goals for a better future." },
  { img: "/assets/Business Growth.jpg", title: " Business Growth", desc: "Strategic guidance to scale operations, improve performance, and increase profitability." },
  { img: "/assets/Personal brand & online presence.png", title: "Personal brand & online presence", desc: "Build a strong identity and grow your visibility across digital platforms." },
  { img: "/assets/Education & abroad guidance.jpg", title: "Education & abroad guidance", desc: "Clear support for choosing the right courses, universities, and study destinations abroad." },
  { img: "/assets/Investment opportunities.png", title: "Investment opportunities", desc: "Identify smart investment options to grow and secure your financial future." },
  { img: "/assets/Tech guidance (tools & automation).png", title: "Tech guidance (tools & automation)", desc: "Helping you choose the right tools and automate processes for better efficiency." },
];

const enterpriseData = [
  { img: "/assets/Business growth challenges.png", title: "Business growth challenges", desc: "Practical solutions to overcome obstacles and sustain long-term business growth." },
  { img: "/assets/Operational issues.avif", title: "Operational issues", desc: "Identifying and resolving process gaps to improve efficiency and daily operations." },
  { img: "/assets/Technology & digital gaps.avif", title: "Technology & digital gaps", desc: "Bridging skill and system gaps to improve digital adoption and performance." },
  { img: "/assets/Funding & investor readiness.png", title: "Funding & investor readiness", desc: "Preparing your business to attract funding and confidently engage with investors." },
  { img: "/assets/Market entry & expansion.png", title: "Market entry & expansion", desc: "Strategic support to launch into new markets and scale your business confidently." },
  { img: "/assets/Process automation & improvement.png", title: "Process automation & improvement", desc: "Streamlining workflows through automation to boost efficiency and reduce costs." },
];

const FocusAreas = () => {
  const [active, setActive] = useState("individual");
  const data = active === "individual" ? individualData : enterpriseData;

  return (
    <section className="focus-section">

      {/* TOGGLE */}
      <div className="focus-toggle">
        <div className={`slider ${active}`}></div>

        <button
          className={active === "individual" ? "active" : ""}
          onClick={() => setActive("individual")}
        >
          Individual
        </button>

        <button
          className={active === "enterprise" ? "active" : ""}
          onClick={() => setActive("enterprise")}
        >
          Enterprise
        </button>
      </div>

      {/* GRID */}
      <div className="focus-grid">
        {data.map((item, index) => (
          <div className="focus-card" key={index}>
            <img src={item.img} alt={item.title} />

            <div className="focus-content">
              <h4>{item.title}</h4>

              <div className="hover-content">
                <span className="line"></span>
                <p>{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default FocusAreas;
