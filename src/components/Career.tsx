import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Product Manager</h4>
                <h5>AI & Vibe Coding</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building AI-powered products and exploring vibe coding—turning
              ideas into reality by collaborating with AI tools and shipping
              fast.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Digital Marketing</h4>
                <h5>Strategy & Growth</h5>
              </div>
              <h3>ONGOING</h3>
            </div>
            <p>
              Driving growth through data-driven digital marketing strategies,
              SEO, paid campaigns, and content marketing across multiple
              platforms and industries.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Practitioner</h4>
                <h5>Automation & Tools</h5>
              </div>
              <h3>ONGOING</h3>
            </div>
            <p>
              Hands-on AI practitioner leveraging LLMs, automation workflows,
              and AI agents to build smarter products and streamline operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
