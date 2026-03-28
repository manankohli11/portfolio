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
                <h5>Influencer.in (Cheil Worldwide)</h5>
              </div>
              <h3>2023–NOW</h3>
            </div>
            <p>
              Set vision and roadmap for influencer marketing SaaS used by 100+
              clients. Launched PLG flows lifting active usage 35%. Integrated
              LLM-powered AI agents for sales, CS, and analytics. Improved
              demo-to-paid conversion 20% through A/B tests with SQL, GA, and
              Mixpanel. Drove 15% YoY revenue growth.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sr. Associate, Product</h4>
                <h5>Eleve Media</h5>
              </div>
              <h3>2022–23</h3>
            </div>
            <p>
              Managed backlog and PRDs for influencer SaaS tools, improving
              product quality 30% and CSAT 50%. Rolled out OKRs across product
              lines, aligning engineering and sales to measurable outcomes.
              Contributed competitive insights that led to new revenue streams.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Social Media Analyst</h4>
                <h5>Eleve Media</h5>
              </div>
              <h3>2020–22</h3>
            </div>
            <p>
              Built dashboards for 50+ campaigns tracking CPC, CPM, and CPV.
              Delivered sentiment and ORM reports that influenced client
              strategies and guided campaign optimization.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Social Listening Exec</h4>
                <h5>Rankme Online</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Monitored brand sentiment across channels, flagging risks and
              opportunities. Logged and prioritized 100+ bug reports and feature
              requests, cutting turnaround time by ~20%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Digital Marketing Exec</h4>
                <h5>NIAMC</h5>
              </div>
              <h3>2019</h3>
            </div>
            <p>
              Used Google Analytics to improve SEO and funnel performance.
              Shared insights on user journeys to guide content changes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
