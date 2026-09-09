export default function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",

    name: "MaghFirli Portfolio",

    alternateName: "MaghFirli Alif Al Ayubi Portfolio",

    url: "https://portfolio-cyber-lyart.vercel.app",

    author: {
      "@type": "Person",
      name: "MaghFirli Alif Al Ayubi",
      url: "https://portfolio-cyber-lyart.vercel.app",
    },

    description: "Official cybersecurity portfolio of MaghFirli Alif Al Ayubi.",
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
