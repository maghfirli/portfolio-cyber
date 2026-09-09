export const phishingDetection = {
  id: "phishing-detection",

  title:
    "A Lightweight Hybrid Rule-Based Framework for Interpretable Phishing Detection",

  slug: "phishing-detection",

  type: "research",

  category: "Cybersecurity Research",

  year: "2026",

  role: "Cyber Security Researcher",

  status: "Accepted - ICISS 2026",

  description:
    "A lightweight hybrid rule-based phishing detection framework designed to identify malicious URLs through interpretable multi-layer security analysis without depending on complex machine learning models.",

  researchOverview:
    "Phishing remains one of the most persistent cybersecurity threats, exploiting users through malicious URLs, fake websites, and deceptive digital identities. This research proposes a lightweight hybrid detection framework that combines multiple security analysis techniques while maintaining transparency and interpretability.",

  researchProblem: [
    "Blacklist-based detection methods are unable to effectively identify newly generated phishing URLs.",

    "Machine learning approaches often require large datasets, complex feature extraction, and high computational resources.",

    "Many existing detection systems provide limited explanation regarding why a URL is classified as malicious.",
  ],

  methodology: [
    {
      title: "Blacklist Verification",

      description:
        "Detect previously reported malicious URLs by comparing incoming URLs against trusted threat intelligence sources.",
    },

    {
      title: "Heuristic URL Analysis",

      description:
        "Analyze URL structures, suspicious characters, domain patterns, and abnormal behaviors.",
    },

    {
      title: "Domain Similarity Analysis",

      description:
        "Identify impersonation and typosquatting attacks through similarity comparison with legitimate domains.",
    },

    {
      title: "Hyperlink Analysis",

      description:
        "Analyze webpage links and suspicious interactions as additional phishing indicators.",
    },

    {
      title: "Lexical Analysis",

      description:
        "Identify phishing-related linguistic patterns from URL and webpage textual characteristics.",
    },

    {
      title: "Risk Scoring Mechanism",

      description:
        "Combine detection evidence into an interpretable risk score for final classification.",
    },
  ],

  metrics: [
    {
      label: "Accuracy",

      value: "92.53%",
    },

    {
      label: "Precision",

      value: "99.23%",
    },

    {
      label: "Recall",

      value: "85.73%",
    },

    {
      label: "Specificity",

      value: "99.33%",
    },
  ],

  results:
    "Experimental evaluation demonstrates that the proposed framework achieves high detection performance while maintaining lightweight computational requirements. The interpretable scoring mechanism allows users to understand the reasoning behind each phishing classification.",

  images: [
    "/images/projects/phishing-detection/cover.png",

    "/images/projects/phishing-detection/conference.png",

    "/images/projects/phishing-detection/workflow.png",

    "/images/projects/phishing-detection/architecture.png",

    "/images/projects/phishing-detection/evaluation.png",
  ],

  technologies: [
    "Python",

    "FastAPI",

    "Rule-Based Detection",

    "Cybersecurity",

    "URL Analysis",

    "Threat Detection",
  ],

  highlights: [
    "Accepted at International Conference on ICT for Smart Society (ICISS) 2026",

    "Achieved 92.53% accuracy",

    "Designed lightweight phishing detection architecture",

    "Developed interpretable phishing risk scoring mechanism",

    "Integrated multiple cybersecurity analysis layers",
  ],

  github: "https://github.com/PHISHING-DETECTION",

  // BUTTON CONFIGURATION

  action: {
    enabled: true,

    type: "paper",

    label: "View Research Paper",

    url: "/paper",
  },
};
