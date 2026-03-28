import "./styles/Certifications.css";

const certifications = [
  {
    title: "Product-Led Growth MicroCertification (PLGC)",
    issuer: "Product School",
    year: "2024",
  },
  {
    title: "Product Analytics MicroCertification (PAC)",
    issuer: "Product School",
    year: "2024",
  },
  {
    title: "AI Appreciate Badge - AI For All",
    issuer: "CBSE and Intel",
    year: "2025",
  },
  {
    title: "AI Aware Badge - AI For All",
    issuer: "CBSE and Intel",
    year: "2025",
  },
  {
    title: "Generative AI: The Evolution of Thoughtful Online Search",
    issuer: "LinkedIn",
    year: "2024",
  },
  {
    title: "What Is Generative AI?",
    issuer: "LinkedIn",
    year: "2024",
  },
  {
    title: "Scrum Fundamentals Certified",
    issuer: "SCRUMstudy",
    year: "2021",
  },
  {
    title: "Google Analytics Individual Qualification",
    issuer: "Google",
    year: "2020",
  },
];

const Certifications = () => {
  return (
    <div className="cert-section section-container" id="certifications">
      <div className="cert-container">
        <h2>
          Certifi<span>cations</span>
        </h2>
        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <div className="cert-card" key={index}>
              <div className="cert-card-number">0{index + 1}</div>
              <h4>{cert.title}</h4>
              <div className="cert-meta">
                <span className="cert-issuer">{cert.issuer}</span>
                <span className="cert-year">{cert.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
