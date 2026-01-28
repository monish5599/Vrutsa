import { useState } from "react";
import "./IndividualForm.css";

const IndividualForm = () => {
  const [active, setActive] = useState("individual");

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    country: "",
    category: "",
    timeline: "",
    message: "",
    companyName: "",
    industry: "",
    budget: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      country: "",
      category: "",
      timeline: "",
      message: "",
      companyName: "",
      industry: "",
      budget: "",
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);
  setSuccessMsg("");
  setErrorMsg("");

  const data = {
    type: active,
    ...formData,
  };

  try {
    const res = await fetch("http://localhost:5000/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (res.ok) {
      setSuccessMsg("✅ Form submitted successfully!");
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        country: "",
        category: "",
        timeline: "",
        message: "",
        companyName: "",
        industry: "",
        budget: "",
      });
    } else {
      setErrorMsg("❌ Submission failed. Try again.");
    }
  } catch (err) {
    setErrorMsg("❌ Server error. Please try later.");
  } finally {
    setLoading(false);
  }
};


  return (
    <div id="get-in-touch" className="contact-wrapper">
      <h2>CONTACT</h2>
      <p>Have a question or a problem to solve?</p>

      {/* Toggle */}
      <div className="toggle">
        <div className={`slider ${active}`}></div>

        <button
          className={active === "individual" ? "active" : ""}
          onClick={() => setActive("individual")}
        >
          Individual
        </button>

        <button
          className={active === "business" ? "active" : ""}
          onClick={() => setActive("business")}
        >
          Enterprise / Business
        </button>
      </div>

      {/* ================= INDIVIDUAL FORM ================= */}
      {active === "individual" ? (
        <form className="form-box" onSubmit={handleSubmit}>
          <h3>Personal Details</h3>

          <div className="row">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="row">
            <input
              type="email"
              name="email"
              placeholder="E-mail Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
            />
          </div>

          <div className="row">
            <select name="category" value={formData.category} onChange={handleChange}>
              <option value="">Category</option>
              <option>Career-growth</option>
              <option>Education-abroad</option>
              <option>Finance-wealth</option>
              <option>Technology & Automation</option>
              <option>Personal-branding / digital marketing</option>
              <option>Real-estate</option>
              <option>Relocation-lifestyle</option>
              <option>Other</option>
                            
            </select>

            <select name="timeline" value={formData.timeline} onChange={handleChange}>
              <option value="">⏳ Project Timeline</option>
              <option value="Mini (≤30 days)">🟢 Mini — Up to 30 days</option>
              <option value="Moderate (≤90 days)">🟡 Moderate — Up to 90 days</option>
              <option value="Large (>90 days)">🔴 Large — More than 90 days</option>
            </select>
          </div>

          <textarea
            name="message"
            placeholder="Tell us about your requirements"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <label className="checkbox">
            <input type="checkbox" required /> I agree to the terms and privacy policy
          </label>
          {successMsg && <p className="success">{successMsg}</p>}
          {errorMsg && <p className="error">{errorMsg}</p>}
          <div className="buttons">
            <button type="submit" disabled={loading}>
  {loading ? "Submitting..." : "SUBMIT REQUEST"}
</button>
            <button type="button" className="outline" onClick={resetForm}>
              RESET FORM
            </button>
          </div>
        </form>
      ) : (
        /* ================= BUSINESS FORM ================= */
        <form className="form-box" onSubmit={handleSubmit}>
          <h3>Company Details</h3>

          <div className="row">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="row">
            <input
              type="email"
              name="email"
              placeholder="E-mail Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="row">
            <select name="industry" value={formData.industry} onChange={handleChange}>
              <option value="">Industry</option>
              <option>Information-technology</option>
              <option>Finance</option>
              <option>Healthcare</option>
              <option>Education</option>
              <option>Retail-ecommerce</option>
              <option>Media-entertainment</option>
              <option>Startups</option>
              <option>Logistics-supply-chain</option>
              <option>Other</option>

            </select>

            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
            />
          </div>

          <div className="row">
            <input
              type="text"
              name="budget"
              placeholder="Budget (if any)"
              value={formData.budget}
              onChange={handleChange}
            />
          </div>

          <textarea
            name="message"
            placeholder="Tell us about your requirements"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <label className="checkbox">
            <input type="checkbox" required /> I agree to the terms and privacy policy
          </label>
          {successMsg && <p className="success">{successMsg}</p>}
          {errorMsg && <p className="error">{errorMsg}</p>}
          <div className="buttons">
            <button type="submit">SUBMIT FORM</button>
            <button type="button" className="outline" onClick={resetForm}>
              RESET FORM
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default IndividualForm;
