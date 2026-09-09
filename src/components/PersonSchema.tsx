export default function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: "MaghFirli Alif Al Ayubi",

    alternateName: ["MaghFirli", "MaghFirli Alif"],

    url: "https://portfolio-cyber-lyart.vercel.app",

    image:
      "https://portfolio-cyber-lyart.vercel.app/images/profile/profile.png",

    jobTitle: "Cyber Security Engineer",

    description:
      "MaghFirli Alif Al Ayubi is a Cyber Security Engineer specializing in cybersecurity, penetration testing, Governance Risk Compliance (GRC), ISO 27001 implementation, and secure software development.",

    knowsAbout: [
      "Cyber Security",
      "Penetration Testing",
      "Ethical Hacking",
      "Governance Risk Compliance",
      "GRC",
      "ISO 27001",
      "Risk Management",
      "Secure Software Development",
      "Application Security",
    ],

    hasOccupation: {
      "@type": "Occupation",
      name: "Cyber Security Engineer",
    },

    sameAs: ["MASUKKAN LINK LINKEDIN KAMU", "MASUKKAN LINK GITHUB KAMU"],
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
