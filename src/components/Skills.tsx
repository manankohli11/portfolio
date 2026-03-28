import "./styles/Skills.css";

const skillGroups = [
  {
    category: "Product & Leadership",
    skills: [
      "Product Strategy",
      "Roadmapping",
      "PLG",
      "Agile",
      "Scrum",
      "OKRs",
      "Stakeholder Alignment",
    ],
  },
  {
    category: "Artifacts",
    skills: ["PRDs", "User Stories", "Acceptance Criteria", "Wireframes"],
  },
  {
    category: "AI & Analytics",
    skills: [
      "AI Product Integrations",
      "AI Agents",
      "Generative AI",
      "AI Experimentation",
      "N8n Workflows",
    ],
  },
  {
    category: "Domains",
    skills: [
      "SaaS",
      "Influencer Marketing",
      "MarTech",
      "ORM",
      "Social Listening",
    ],
  },
  {
    category: "Tools",
    skills: [
      "Jira",
      "Confluence",
      "Figma",
      "Postman",
      "GA",
      "Looker Studio",
      "Tableau",
      "Excel (adv)",
      "SQL",
      "Mixpanel",
      "Amplitude",
    ],
  },
];

const Skills = () => {
  return (
    <div className="skills-section section-container" id="skills">
      <div className="skills-container">
        <h2>
          My <span>Skills</span>
        </h2>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <div className="skills-group" key={index}>
              <h4>{group.category}</h4>
              <div className="skills-tags">
                {group.skills.map((skill, i) => (
                  <span className="skill-tag" key={i}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
