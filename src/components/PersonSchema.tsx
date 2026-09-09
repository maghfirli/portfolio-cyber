export default function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: "MaghFirli Alif Al Ayubi",

    url: "https://portfolio-cyber-lyart.vercel.app",

    image:
      "https://portfolio-cyber-lyart.vercel.app/images/profile/profile.png",

    jobTitle: "Cyber Security Engineer",

    description:
      "Cyber Security Engineer specializing in Penetration Testing, Governance Risk Compliance (GRC), ISO 27001, and Secure Software Development.",

    knowsAbout: [
      "Cyber Security",
      "Penetration Testing",
      "GRC",
      "ISO 27001",
      "Secure Software Development",
      "Risk Management",
    ],

    sameAs: [
      "https://github.com/USERNAME",
      "https://www.linkedin.com/in/USERNAME",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
