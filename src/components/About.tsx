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
scroll-mt-20
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
absolute
top-20
left-1/2
-translate-x-1/2
w-[450px]
h-[450px]
rounded-full
bg-[#00FF88]/10
blur-[150px]
pointer-events-none
"
      />

      <div
        className="
relative
max-w-[1600px]
mx-auto
px-5
lg:px-16
"
      >
        {/* ================================================= */}
        {/* ================= MOBILE ======================== */}
        {/* ================================================= */}

        <div
          className="
lg:hidden
"
        >
          <div
            className="
flex
items-center
gap-4
mb-8
"
          >
            <div
              className="
w-10
h-[2px]
bg-[#00FF88]
"
            />

            <p
              className="
text-[#00FF88]
tracking-[5px]
font-bold
text-sm
"
            >
              ABOUT ME
            </p>
          </div>

          <h1
            className="
text-white
font-bold
text-4xl
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

          <div
            className="
relative
mt-10
h-[500px]
rounded-3xl
overflow-hidden
border
border-[#00FF88]/40
bg-[#071A18]
"
          >
            <div
              className="
absolute
inset-0
bg-[#00FF88]/20
blur-[100px]
"
            />

            <Image
              src="/images/profile/profile.png"
              alt="profile"
              fill
              priority
              sizes="100vw"
              className="
object-contain
object-bottom
scale-110
"
            />

            <div
              className="
absolute
bottom-5
left-5
right-5
rounded-2xl
bg-[#020617]/90
border
border-white/10
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
text-[#00FF88]
text-sm
mt-2
"
              >
                Cyber Security Engineer
              </p>

              <p
                className="
text-gray-400
text-xs
mt-1
"
              >
                GRC | Pentester | Secure Developer
              </p>
            </div>
          </div>

          <div
            className="
mt-10
space-y-5
"
          >
            <p
              className="
text-gray-300
leading-7
"
            >
              I am a Cyber Security Engineer focused on cybersecurity,
              Governance Risk and Compliance (GRC), penetration testing, and
              secure software development.
            </p>

            <p
              className="
text-gray-400
leading-7
"
            >
              I combine technical security skills with business understanding to
              build secure and reliable solutions.
            </p>
          </div>

          <div
            className="
mt-10
space-y-4
"
          >
            <Info
              icon={<MapPin size={24} />}
              title="Location"
              desc="Indonesia"
            />

            <Info
              icon={<GraduationCap size={24} />}
              title="Focus"
              desc="Cyber Security & GRC"
            />

            <Info
              icon={<Briefcase size={24} />}
              title="Experience"
              desc="Security Development"
            />
          </div>

          <div
            className="
mt-10
rounded-3xl
border
border-[#164E45]
bg-[#071A18]/80
p-6
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
leading-7
"
            >
              "Securing people, process, and technology for a better tomorrow."
            </p>
          </div>
        </div>

        {/* ================================================= */}
        {/* MOBILE EXPERIENCE */}
        {/* ================================================= */}

        <div
          className="
lg:hidden
mt-16
"
        >
          <div
            className="
flex
items-center
gap-4
"
          >
            <div
              className="
w-10
h-[2px]
bg-[#00FF88]
"
            />

            <p
              className="
text-[#00FF88]
tracking-[5px]
font-bold
text-sm
"
            >
              EXPERIENCE
            </p>
          </div>

          <h2
            className="
text-white
font-bold
text-3xl
mt-4
"
          >
            Building Security Experience
          </h2>

          <div
            className="
mt-8
space-y-4
"
          >
            <MobileExperience
              year="2026"
              title="IT Security (Contract)"
              desc="
Security assessment,
penetration testing support,
and IT Governance Risk Compliance activities.
"
            />

            <MobileExperience
              year="2024 - 2026"
              title="Intern IT Security"
              desc="
ISO 27001 implementation,
ISMS documentation,
risk assessment,
and internal audit activities.
"
            />

            <MobileExperience
              year="2025"
              title="Secure Development"
              desc="
Building secure applications using
security-first coding practices.
"
            />
          </div>
        </div>
        {/* ================================================= */}
        {/* MOBILE SERVICES */}
        {/* ================================================= */}

        <div
          className="
lg:hidden
mt-16
"
        >
          <div
            className="
flex
items-center
gap-4
"
          >
            <div
              className="
w-10
h-[2px]
bg-[#00FF88]
"
            />

            <p
              className="
text-[#00FF88]
tracking-[5px]
font-bold
text-sm
"
            >
              WHAT I DO
            </p>
          </div>

          <h2
            className="
text-white
font-bold
text-3xl
mt-4
"
          >
            Security Services
          </h2>

          <div
            className="
grid
grid-cols-1
gap-4
mt-8
"
          >
            <MobileService
              icon={<Search size={24} />}
              title="Web Security Assessment"
              desc="
Vulnerability assessment,
penetration testing,
and security review.
"
            />

            <MobileService
              icon={<FileText size={24} />}
              title="GRC & Compliance"
              desc="
ISO 27001,
ISMS implementation,
and security policy.
"
            />

            <MobileService
              icon={<Code2 size={24} />}
              title="Secure Development"
              desc="
Building secure,
reliable,
modern applications.
"
            />
          </div>
        </div>

        {/* ================================================= */}
        {/* MOBILE SKILLS */}
        {/* ================================================= */}

        <div
          className="
lg:hidden
mt-16
"
        >
          <div
            className="
flex
items-center
gap-4
"
          >
            <div
              className="
w-10
h-[2px]
bg-[#00FF88]
"
            />

            <p
              className="
text-[#00FF88]
tracking-[5px]
font-bold
text-sm
"
            >
              SKILLS
            </p>
          </div>

          <h2
            className="
text-white
font-bold
text-3xl
mt-4
"
          >
            Security Stack
          </h2>

          <div
            className="
grid
grid-cols-2
gap-3
mt-8
"
          >
            <SkillBox icon={<Lock size={20} />} text="Pentesting" />

            <SkillBox icon={<Shield size={20} />} text="GRC" />

            <SkillBox icon={<Code2 size={20} />} text="Secure Code" />

            <SkillBox icon={<FileText size={20} />} text="ISO 27001" />
          </div>
        </div>

        {/* ================================================= */}
        {/* MOBILE CTA */}
        {/* ================================================= */}

        <div
          className="
lg:hidden
mt-16
rounded-3xl
border
border-[#00FF88]/30
bg-[#071A18]/80
p-6
text-center
"
        >
          <h3
            className="
text-white
font-bold
text-2xl
"
          >
            Let's Build Something Secure
          </h3>

          <p
            className="
text-gray-400
mt-3
leading-6
text-sm
"
          >
            Have a project or security challenge? Let's discuss it together.
          </p>

          <a
            href="#contact"
            className="
mt-6
h-[52px]
rounded-xl
bg-[#00FF88]
text-black
font-bold
flex
items-center
justify-center
gap-3
"
          >
            Contact Me
            <ArrowRight size={18} />
          </a>
        </div>

        {/* ================================================= */}
        {/* ================= DESKTOP VERSION ================ */}
        {/* ================================================= */}

        <div
          className="
hidden
lg:block
"
        >
          <div
            className="
grid
grid-cols-[380px_1fr_380px]
gap-14
items-start
"
          >
            {/* PROFILE */}

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
                sizes="380px"
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

            {/* CENTER ABOUT */}

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
                I am a Cyber Security Engineer focused on cybersecurity,
                Governance Risk and Compliance (GRC), penetration testing, and
                secure software development.
              </p>

              <p
                className="
mt-6
text-gray-400
text-lg
leading-8
"
              >
                I combine technical security skills with business understanding
                to build secure and reliable solutions.
              </p>

              <div
                className="
grid
grid-cols-2
gap-5
mt-12
"
              >
                <AboutStat number="01+" label="Years Learning Security" />

                <AboutStat number="10+" label="Security Projects" />
              </div>
            </div>

            {/* RIGHT PANEL */}

            <div
              className="
space-y-6
"
            >
              <InfoBox
                icon={<Shield />}
                title="Cyber Security"
                desc="Security assessment, vulnerability analysis, and secure implementation."
              />

              <InfoBox
                icon={<Code2 />}
                title="Secure Development"
                desc="Building applications with security-first engineering practices."
              />

              <InfoBox
                icon={<FileText />}
                title="GRC"
                desc="Governance, Risk, Compliance, ISO 27001, and security standards."
              />
            </div>
          </div>
          {/* ================================================= */}
          {/* ================ DESKTOP EXPERIENCE ============= */}
          {/* ================================================= */}

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
Worked on information security improvement initiatives,
security assessment, penetration testing support,
and IT Governance Risk Compliance activities.
"
                  tags={[
                    "Penetration Testing",
                    "IT GRC",
                    "Security Assessment",
                  ]}
                />

                <Experience
                  year="2024 - 2026"
                  title="Intern IT Security"
                  company="PT Galenium Pharmasia Laboratories"
                  desc="
Supported ISO/IEC 27001:2022 implementation,
ISMS documentation,
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
vulnerability analysis,
security testing,
URL security,
and QR security assessment.
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

          {/* ================================================= */}
          {/* ================= SERVICES ====================== */}
          {/* ================================================= */}

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

          {/* ================================================= */}
          {/* ================= SKILLS ======================== */}
          {/* ================================================= */}

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
                items={[
                  "ISO 27001",
                  "Risk Management",
                  "ISMS",
                  "Audit Support",
                ]}
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

          {/* ================================================= */}
          {/* ================= CTA =========================== */}
          {/* ================================================= */}

          <div
            className="
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
"
            >
              Let's Connect
              <ArrowRight size={18} />
            </a>
          </div>
          {/* CTA END */}
        </div>
        {/* END DESKTOP VERSION */}
      </div>
      {/* END CONTAINER */}
    </section>
  );
}
// =================================================
// ================= COMPONENTS ====================
// =================================================

// =================================================
// ================= INFO ==========================
// =================================================

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

// =================================================
// ================= STAT ==========================
// =================================================

function Stat({ icon, title, desc }: any) {
  return (
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

// =================================================
// ================= ABOUT STAT ====================
// =================================================

function AboutStat({ number, label }: any) {
  return (
    <div
      className="
rounded-2xl
border
border-[#164E45]
bg-[#071A18]/80
p-6
"
    >
      <h3
        className="
text-[#00FF88]
text-3xl
font-bold
"
      >
        {number}
      </h3>

      <p
        className="
text-gray-400
text-sm
mt-2
"
      >
        {label}
      </p>
    </div>
  );
}

// =================================================
// ================= INFO BOX ======================
// =================================================

function InfoBox({ icon, title, desc }: any) {
  return (
    <div
      className="
rounded-2xl
border
border-[#164E45]
bg-[#071A18]/80
p-6
hover:border-[#00FF88]
transition-all
duration-300
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
leading-6
mt-3
"
      >
        {desc}
      </p>
    </div>
  );
}

// =================================================
// ================= MOBILE EXPERIENCE =============
// =================================================

function MobileExperience({ year, title, desc }: any) {
  return (
    <div
      className="
rounded-2xl
border
border-[#164E45]
bg-[#071A18]/80
p-5
"
    >
      <p
        className="
text-[#00FF88]
font-bold
"
      >
        {year}
      </p>

      <h3
        className="
text-white
font-bold
text-lg
mt-2
"
      >
        {title}
      </h3>

      <p
        className="
text-gray-400
text-sm
leading-6
mt-3
whitespace-pre-line
"
      >
        {desc}
      </p>
    </div>
  );
}
// =================================================
// ================= MOBILE SERVICE =================
// =================================================

function MobileService({ icon, title, desc }: any) {
  return (
    <div
      className="
rounded-2xl
border
border-[#164E45]
bg-[#071A18]/80
p-5
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

      <h3
        className="
text-white
font-bold
text-lg
"
      >
        {title}
      </h3>

      <p
        className="
text-gray-400
text-sm
leading-6
mt-2
whitespace-pre-line
"
      >
        {desc}
      </p>
    </div>
  );
}

// =================================================
// ================= SKILL BOX =====================
// =================================================

function SkillBox({ icon, text }: any) {
  return (
    <div
      className="
rounded-xl
border
border-[#164E45]
bg-[#071A18]/80
min-h-[90px]
flex
flex-col
items-center
justify-center
gap-2
"
    >
      <div
        className="
text-[#00FF88]
"
      >
        {icon}
      </div>

      <p
        className="
text-white
text-sm
font-bold
"
      >
        {text}
      </p>
    </div>
  );
}

// =================================================
// ================= EXPERIENCE =====================
// =================================================

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
whitespace-pre-line
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
            {tags?.map((tag: string, index: number) => (
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

// =================================================
// ================= SERVICE ========================
// =================================================

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

// =================================================
// ================= SKILL CARD =====================
// =================================================

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
        {items?.map((item: string, index: number) => (
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
