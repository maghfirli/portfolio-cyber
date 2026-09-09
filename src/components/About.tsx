"use client";

import Image from "next/image";

import {
  Shield,
  Code2,
  Briefcase,
  MapPin,
  GraduationCap,
  Infinity,
  Quote,
  FileText,
  Search,
  Lock,
  Users,
  Terminal,
  ArrowRight,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="
relative
min-h-screen
overflow-hidden
bg-gradient-to-b
from-[#020617]
to-[#052E25]
py-24
"
    >
      {/* BACKGROUND */}

      <div
        className="
absolute
inset-0
bg-[url('/images/bg-texture.png')]
bg-cover
opacity-20
"
      />

      <div
        className="
relative
max-w-[1600px]
mx-auto
px-16
"
      >
        {/* ================= ABOUT HEADER ================= */}

        <div
          className="
grid
grid-cols-[380px_1fr_380px]
gap-14
items-start
"
        >
          {/* ================= PROFILE ================= */}

          <div
            className="
relative
h-[560px]
rounded-2xl
overflow-hidden
border
border-[#00FF88]/40
bg-[#071A18]
"
          >
            <Image
              src="/images/profile/profile.png"
              alt="profile"
              fill
              priority
              className="
object-contain
object-bottom
scale-[1.15]
"
            />

            <div
              className="
absolute
top-12
left-6
text-white/70
italic
text-xl
leading-8
"
            >
              Security
              <br />
              Governance
              <br />
              Better
              <br />
              Tomorrow
            </div>

            <div
              className="
absolute
bottom-6
left-6
right-6
rounded-xl
bg-[#071A18]/90
border
border-[#164E45]
p-5
"
            >
              <h3
                className="
text-white
font-bold
text-lg
"
              >
                MaghFirli Alif Al Ayubi
              </h3>

              <p
                className="
text-gray-400
text-sm
mt-2
"
              >
                Cyber Security Engineer
                <br />
                GRC | Pentester | Developer
              </p>
            </div>
          </div>

          {/* ================= ABOUT TEXT ================= */}

          <div>
            <div
              className="
flex
items-center
gap-5
mb-8
"
            >
              <div
                className="
w-14
h-[2px]
bg-[#00FF88]
"
              />

              <p
                className="
text-[#00FF88]
tracking-[4px]
font-bold
"
              >
                ABOUT ME
              </p>
            </div>

            <h1
              className="
text-white
font-bold
text-[64px]
leading-tight
"
            >
              Turning Knowledge
              <br />
              Into
              <span
                className="
text-[#00FF88]
"
              >
                Safer Solutions
              </span>
            </h1>

            <p
              className="
mt-10
text-gray-300
text-lg
leading-8
"
            >
              I am a Cyber Security Engineer with a strong interest in
              Governance, Risk, and Compliance (GRC), penetration testing, and
              secure software development.
            </p>

            <p
              className="
mt-6
text-gray-300
text-lg
leading-8
"
            >
              I enjoy solving real-world security problems and building secure,
              reliable, and user-friendly digital solutions.
            </p>

            <p
              className="
mt-6
text-gray-300
text-lg
leading-8
"
            >
              I am always open to new opportunities, collaborations, and
              freelance projects related to cybersecurity, GRC, or development.
            </p>

            <div
              className="
flex
gap-12
mt-12
"
            >
              <Info
                icon={<MapPin size={28} />}
                title="Indonesia"
                desc="Based in"
              />

              <Info
                icon={<GraduationCap size={28} />}
                title="Cyber Security"
                desc="Bina Nusantara University"
              />

              <Info
                icon={<Briefcase size={28} />}
                title="Open Opportunity"
                desc="Full-time / Freelance"
              />
            </div>
          </div>

          {/* ================= RIGHT STAT ================= */}

          <div
            className="
space-y-6
"
          >
            <div
              className="
rounded-2xl
border
border-[#164E45]
bg-[#071A18]/80
p-8
"
            >
              <Quote
                className="
text-[#00FF88]
mb-5
"
              />

              <p
                className="
text-white
italic
text-lg
leading-8
"
              >
                "Securing people, process, and technology for a better
                tomorrow."
              </p>
            </div>

            <div
              className="
rounded-2xl
border
border-[#164E45]
bg-[#071A18]/80
p-8
"
            >
              <Stat icon={<Shield />} title="3+" desc="Projects Completed" />

              <Stat icon={<Code2 />} title="1+" desc="Years Experience" />

              <Stat
                icon={<Lock />}
                title="ISO 27001"
                desc="Security Standard"
              />

              <Stat icon={<Infinity />} title="∞" desc="Continuous Learner" />
            </div>
          </div>
        </div>
        {/* ================= EXPERIENCE ================= */}

        <div
          className="
mt-28
"
        >
          <div
            className="
flex
items-center
gap-5
"
          >
            <div
              className="
w-14
h-[2px]
bg-[#00FF88]
"
            />

            <h2
              className="
text-white
font-bold
text-4xl
"
            >
              EXPERIENCE
            </h2>
          </div>

          <div
            className="
mt-14
relative
"
          >
            <div
              className="
absolute
left-[9px]
top-0
bottom-0
w-[2px]
bg-[#164E45]
"
            />

            <div
              className="
space-y-14
"
            >
              <Experience
                year="2026"
                title="IT Security (Contract)"
                company="PT Galenium Pharmasia Laboratories"
                desc="
Worked on information security improvement initiatives
including security assessment, penetration testing support,
and IT Governance Risk Compliance (GRC) activities.
"
                tags={["Penetration Testing", "IT GRC", "Security Assessment"]}
              />

              <Experience
                year="2024 - 2026"
                title="Intern IT Security"
                company="PT Galenium Pharmasia Laboratories"
                desc="
Supported ISO/IEC 27001:2022 implementation,
ISMS documentation development,
security risk assessment,
and internal audit activities.
"
                tags={["ISO 27001", "ISMS", "Risk Management"]}
              />

              <Experience
                year="2026"
                title="Cyber Security Researcher"
                company="Bina Nusantara University"
                desc="
Conducted cybersecurity research focusing on
vulnerability analysis, security testing,
URL security, and QR security assessment.
"
                tags={["Research", "Pentest", "Vulnerability Assessment"]}
              />

              <Experience
                year="2025"
                title="Web Developer"
                company="SmartBudget Project"
                desc="
Developed secure web applications using modern
development practices with focus on reliability
and secure coding.
"
                tags={["Next.js", "React", "Secure Development"]}
              />
            </div>
          </div>
        </div>
        {/* ================= FREELANCE SERVICES ================= */}

        <div
          className="
mt-28
"
        >
          <div
            className="
flex
items-center
justify-between
"
          >
            <div
              className="
flex
items-center
gap-5
"
            >
              <div
                className="
w-14
h-[2px]
bg-[#00FF88]
"
              />

              <h2
                className="
text-white
font-bold
text-4xl
"
              >
                FREELANCE SERVICES
              </h2>
            </div>

            <p
              className="
text-[#00FF88]
font-bold
text-lg
"
            >
              Open for Freelance Projects →
            </p>
          </div>

          <div
            className="
grid
grid-cols-4
gap-8
mt-12
"
          >
            <Service
              icon={<Search size={34} />}
              title="Web Security Assessment"
              desc="
Vulnerability assessment,
penetration testing,
and security review.
"
            />

            <Service
              icon={<FileText size={34} />}
              title="GRC & Compliance Support"
              desc="
ISO 27001 documentation,
ISMS implementation,
and security policy.
"
            />

            <Service
              icon={<Code2 size={34} />}
              title="Secure Web Development"
              desc="
Building secure,
reliable,
modern web applications.
"
            />

            <Service
              icon={<Users size={34} />}
              title="Security Consultation"
              desc="
Cybersecurity guidance,
security review,
and advisory.
"
            />
          </div>
        </div>
        {/* ================= SKILLS ================= */}

        <div
          className="
mt-28
pb-10
"
        >
          <div
            className="
flex
items-center
gap-5
"
          >
            <div
              className="
w-14
h-[2px]
bg-[#00FF88]
"
            />

            <h2
              className="
text-white
font-bold
text-4xl
"
            >
              SKILLS & TOOLS
            </h2>
          </div>

          <div
            className="
grid
grid-cols-4
gap-8
mt-12
"
          >
            <SkillCard
              title="Cyber Security"
              icon={<Lock size={28} />}
              items={[
                "Penetration Testing",
                "Vulnerability Assessment",
                "OWASP Top 10",
                "Network Security",
              ]}
            />

            <SkillCard
              title="GRC & Compliance"
              icon={<FileText size={28} />}
              items={["ISO 27001", "Risk Management", "ISMS", "Audit Support"]}
            />

            <SkillCard
              title="Development"
              icon={<Code2 size={28} />}
              items={["Next.js", "React", "PHP", "MySQL"]}
            />

            <SkillCard
              title="Tools"
              icon={<Terminal size={28} />}
              items={["Burp Suite", "Nmap", "Wireshark", "Docker"]}
            />
          </div>
        </div>
        {/* ================= CTA ================= */}

        <div
          className="
          mt-6
          mb-6
          rounded-2xl
          border
          border-[#164E45]
          bg-[#071A18]/80
          px-10
          py-8
          flex
          items-center
          justify-between
          "
        >
          <div>
            <p
              className="
text-[#00FF88]
font-bold
tracking-[3px]
"
            >
              LET'S WORK TOGETHER
            </p>

            <h2
              className="
            text-white
            text-2xl
            font-bold
            mt-2
            "
            >
              Have a project or opportunity in mind?
            </h2>

            <p
              className="
text-gray-400
mt-3
"
            >
              I'm always open to discuss new opportunities, collaboration, and
              cybersecurity projects.
            </p>
          </div>

          <a
            href="#contact"
            className="
flex
items-center
gap-3

border
border-[#00FF88]

text-[#00FF88]

px-8
py-3

rounded-lg

font-bold

hover:bg-[#00FF88]

hover:text-black

transition-all

duration-300

cursor-pointer
"
          >
            Let's Connect
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

// ================= INFO =================

function Info({ icon, title, desc }: any) {
  return (
    <div
      className="
flex
items-center
gap-3
"
    >
      <div
        className="
text-[#00FF88]
"
      >
        {icon}
      </div>

      <div>
        <h4
          className="
text-white
font-bold
"
        >
          {title}
        </h4>

        <p
          className="
text-gray-400
text-sm
"
        >
          {desc}
        </p>
      </div>
    </div>
  );
}

// ================= STAT =================

function Stat({ icon, title, desc }: any) {
  return (
    <div
      className="
flex
items-center
gap-4
mb-5
"
    >
      <div
        className="
text-[#00FF88]
"
      >
        {icon}
      </div>

      <div>
        <h3
          className="
text-white
font-bold
text-xl
"
        >
          {title}
        </h3>

        <p
          className="
text-gray-400
text-sm
"
        >
          {desc}
        </p>
      </div>
    </div>
  );
}

// ================= EXPERIENCE =================
function Experience({ year, title, company, desc, tags }: any) {
  return (
    <div
      className="
relative
pl-12
"
    >
      {/* DOT */}

      <div
        className="
absolute
left-0
top-2
w-5
h-5
rounded-full
bg-[#00FF88]
shadow-[0_0_20px_#00FF88]
"
      />

      <div
        className="
grid
grid-cols-[180px_320px_1fr]
gap-10
items-start
"
      >
        {/* YEAR */}

        <div
          className="
text-[#00FF88]
font-bold
text-xl
"
        >
          {year}
        </div>

        {/* TITLE */}

        <div>
          <h3
            className="
text-white
font-bold
text-xl
"
          >
            {title}
          </h3>

          <p
            className="
text-gray-400
mt-2
"
          >
            {company}
          </p>
        </div>

        {/* DESCRIPTION */}

        <div>
          <p
            className="
text-gray-300
leading-7
"
          >
            {desc}
          </p>

          <div
            className="
flex
gap-3
mt-5
flex-wrap
"
          >
            {tags.map((tag: string, index: number) => (
              <span
                key={index}
                className="
border
border-[#164E45]
rounded-full
px-4
py-2
text-xs
text-[#00FF88]
"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ================= SERVICE =================

function Service({ icon, title, desc }: any) {
  return (
    <div
      className="
rounded-2xl
border
border-[#164E45]
bg-[#071A18]/80
p-8

transition-all
duration-300

hover:-translate-y-2
hover:border-[#00FF88]

hover:shadow-[0_0_30px_rgba(0,255,136,0.15)]

"
    >
      <div
        className="
text-[#00FF88]
mb-6
"
      >
        {icon}
      </div>

      <h3
        className="
text-white
font-bold
text-xl
"
      >
        {title}
      </h3>

      <p
        className="
text-gray-400
mt-4
leading-7
whitespace-pre-line
"
      >
        {desc}
      </p>
    </div>
  );
}

// ================= SKILL CARD =================

function SkillCard({ title, icon, items }: any) {
  return (
    <div
      className="
rounded-2xl
border
border-[#164E45]
bg-[#071A18]/80
p-8

transition-all
duration-300

hover:border-[#00FF88]
hover:-translate-y-2

"
    >
      <div
        className="
flex
items-center
gap-4
mb-6
"
      >
        <div
          className="
text-[#00FF88]
"
        >
          {icon}
        </div>

        <h3
          className="
text-white
font-bold
text-xl
"
        >
          {title}
        </h3>
      </div>

      <div
        className="
flex
flex-wrap
gap-3
"
      >
        {items.map((item: string, index: number) => (
          <span
            key={index}
            className="
border
border-[#164E45]
rounded-full
px-4
py-2
text-sm
text-gray-300
"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
