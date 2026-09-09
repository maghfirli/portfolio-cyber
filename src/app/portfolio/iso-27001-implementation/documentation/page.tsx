import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Award, Building2 } from "lucide-react";

const documents = [
  {
    image: "/images/projects/iso27001/activity.png",
    title: "ISO/IEC 27001:2022 Awareness Training Activity",
    description:
      "Documentation of participation in ISO/IEC 27001:2022 awareness training activity focusing on Information Security Management System (ISMS), governance principles, and organizational security awareness.",
  },

  {
    image: "/images/projects/iso27001/certificate.png",
    title: "ISO/IEC 27001:2022 Awareness Certificate",
    description:
      "Certificate of completion for ISO/IEC 27001:2022 Information Security Management System awareness training.",
  },
];

export default function ISO27001Documentation() {
  return (
    <main
      className="
min-h-screen
bg-gradient-to-b
from-[#020617]
to-[#052E25]
text-white
px-6
py-24
"
    >
      <div
        className="
max-w-7xl
mx-auto
"
      >
        {/* BACK */}

        <Link
          href="/portfolio/iso-27001-implementation"
          className="
inline-flex
items-center
gap-2
text-gray-300
hover:text-[#00FF88]
mb-12
"
        >
          <ArrowLeft size={18} />
          Back To ISO 27001 Project
        </Link>

        {/* HEADER */}

        <section
          className="
max-w-5xl
"
        >
          <div
            className="
inline-flex
items-center
gap-2
px-5
py-2
rounded-full
border
border-[#00FF88]
bg-[#00FF88]/10
text-[#00FF88]
"
          >
            <ShieldCheck size={18} />
            ISO/IEC 27001:2022 Documentation
          </div>

          <h1
            className="
mt-8
text-4xl
md:text-6xl
font-bold
leading-tight
"
          >
            Information Security Management System Implementation
          </h1>

          <p
            className="
mt-8
text-xl
text-gray-300
leading-9
"
          >
            Documentation showcase of ISO/IEC 27001:2022 awareness training,
            information security governance understanding, risk management
            principles, and compliance-oriented cybersecurity practices.
          </p>
        </section>

        {/* INFORMATION */}

        <section
          className="
grid
md:grid-cols-3
gap-6
mt-20
"
        >
          <InfoCard
            icon={<Award />}
            title="Standard"
            value="ISO/IEC 27001:2022"
          />

          <InfoCard
            icon={<Building2 />}
            title="Organization"
            value="Galenium Pharmasia Laboratories"
          />

          <InfoCard
            icon={<ShieldCheck />}
            title="Domain"
            value="Information Security Governance"
          />
        </section>

        {/* DOCUMENTATION */}

        <section
          className="
mt-24
"
        >
          <h2
            className="
text-3xl
font-bold
mb-10
"
          >
            Implementation Documentation
          </h2>

          <div
            className="
grid
md:grid-cols-2
gap-10
"
          >
            {documents.map((item) => (
              <div
                key={item.image}
                className="
bg-[#071A18]
border
border-[#164E45]
rounded-3xl
overflow-hidden
"
              >
                <div
                  className="
relative
h-[450px]
bg-black
"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="
object-contain
"
                  />
                </div>

                <div
                  className="
p-6
"
                >
                  <h3
                    className="
text-xl
font-bold
text-[#00FF88]
"
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
mt-4
text-gray-300
leading-7
"
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SUMMARY */}

        <section
          className="
mt-24
bg-[#071A18]
border
border-[#164E45]
rounded-3xl
p-8
"
        >
          <h2
            className="
text-3xl
font-bold
mb-6
"
          >
            Project Summary
          </h2>

          <p
            className="
text-gray-300
leading-8
"
          >
            This implementation experience provided practical understanding of
            how ISO/IEC 27001:2022 supports organizations in establishing an
            Information Security Management System (ISMS). The activity covered
            security governance, risk management, security controls, and the
            importance of organizational awareness in protecting information
            assets.
          </p>
        </section>
      </div>
    </main>
  );
}

function InfoCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div
      className="
bg-[#071A18]
border
border-[#164E45]
rounded-2xl
p-6
"
    >
      <div
        className="
text-[#00FF88]
mb-4
"
      >
        {icon}
      </div>

      <p
        className="
text-gray-400
text-sm
"
      >
        {title}
      </p>

      <h3
        className="
text-xl
font-bold
mt-2
"
      >
        {value}
      </h3>
    </div>
  );
}
