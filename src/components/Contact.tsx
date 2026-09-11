"use client";

import Image from "next/image";
import { useState } from "react";

import {
  Mail,
  Phone,
  Send,
  ShieldCheck,
  Users,
  MessageCircle,
  Lock,
} from "lucide-react";

/* =========================
   SOCIAL ICONS
========================= */

const GithubLogo = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.58.1.8-.25.8-.56v-2.1c-3.22.7-3.9-1.55-3.9-1.55-.53-1.35-1.3-1.7-1.3-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.35.96.1-.75.4-1.26.73-1.55-2.57-.3-5.27-1.28-5.27-5.7 0-1.26.45-2.3 1.2-3.1-.12-.3-.52-1.52.1-3.16 0 0 .98-.31 3.2 1.18a11 11 0 0 1 5.8 0c2.22-1.49 3.2-1.18 3.2-1.18.62 1.64.22 2.86.1 3.16.75.8 1.2 1.84 1.2 3.1 0 4.43-2.7 5.4-5.28 5.7.42.36.78 1.08.78 2.18v3.23c0 .31.2.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

const LinkedinLogo = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.32V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2 2 0 1 1 0-3.96 2 2 0 0 1 0 3.96ZM7 20.45H3.67V9H7v11.45ZM22.23 0H1.77C.8 0 0 .77 0 1.73v20.54C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.2 0 22.23 0Z" />
  </svg>
);

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = () => {
    if (!name || !email || !subject || !message) {
      alert("Please complete all fields before sending.");

      return;
    }

    if (!email.includes("@")) {
      alert("Please enter a valid email address.");

      return;
    }

    const body = `Name:${name}  Email:${email}
Message:
${message}
`;

    const gmailURL =
      "https://mail.google.com/mail/?view=cm&fs=1" +
      `&to=${encodeURIComponent("maghfirliayubi@gmail.com")}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.open(gmailURL, "_blank");
  };

  return (
    <section
      id="contact"
      className="
py-24
scroll-mt-32
"
    >
      {/* BACKGROUND GLOW */}

      <div
        className="
absolute
right-[10%]
top-[120px]

w-[650px]
h-[650px]

rounded-full

bg-[#00FF88]/20

blur-[130px]

"
      />

      <div
        className="
relative

max-w-[1600px]

mx-auto

px-8
xl:px-16

"
      >
        {/* ================= MOBILE VERSION ================= */}

        <div
          className="
lg:hidden
"
        >
          {/* TITLE */}

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
              CONTACT
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
            Let's Work
            <br />
            <span
              className="
text-[#00FF88]
"
            >
              Together
            </span>
          </h1>

          <p
            className="
text-gray-400
mt-5
leading-7
"
          >
            Have a project, opportunity, or collaboration idea? Let's discuss
            cybersecurity, GRC, secure development, and technology solutions.
          </p>

          {/* FEATURE */}

          <div
            className="
grid
grid-cols-1
gap-4
mt-8
"
          >
            <Feature icon={<MessageCircle size={22} />} text="Fast Response" />

            <Feature
              icon={<ShieldCheck size={22} />}
              text="Professional Security"
            />

            <Feature icon={<Users size={22} />} text="Open Collaboration" />
          </div>

          {/* CONTACT CARD */}

          <div
            className="
grid
grid-cols-2
gap-3
mt-10
"
          >
            <ContactCard
              icon={<Phone size={22} />}
              title="WhatsApp"
              desc="Chat"
              value="Open"
              link="https://wa.link/wip801"
            />

            <ContactCard
              icon={<Mail size={22} />}
              title="Email"
              desc="Business"
              value="Send"
              link="mailto:maghfirliayubi@gmail.com"
            />

            <ContactCard
              icon={<LinkedinLogo />}
              title="LinkedIn"
              desc="Profile"
              value="View"
              link="https://www.linkedin.com/in/maghfirli-alif-al-ayubi-2595202a5"
            />

            <ContactCard
              icon={<GithubLogo />}
              title="GitHub"
              desc="Projects"
              value="Open"
              link="https://github.com/maghfirli"
            />
          </div>

          {/* FORM MOBILE */}

          <div
            className="
mt-10
rounded-3xl

border
border-[#164E45]

bg-[#071A18]/80

p-5
"
          >
            <h2
              className="
text-white
font-bold
text-xl
"
            >
              Send Message
            </h2>

            <p
              className="
text-gray-400
text-sm
mt-2
"
            >
              Your message will open in Gmail.
            </p>

            <div
              className="
space-y-4
mt-6
"
            >
              <Input placeholder="Your Name" value={name} setValue={setName} />

              <Input
                placeholder="Your Email"
                value={email}
                setValue={setEmail}
              />

              <Input
                placeholder="Subject"
                value={subject}
                setValue={setSubject}
              />

              <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="
w-full
h-[140px]

rounded-xl

bg-[#020617]

border

border-[#164E45]

p-4

text-white

outline-none

focus:border-[#00FF88]
"
              />

              <button
                onClick={sendEmail}
                className="
w-full

h-[55px]

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
                <Send size={18} />
                Send Message
              </button>
            </div>

            <div
              className="
flex
items-center
gap-2
text-gray-400
text-sm
mt-5
"
            >
              <Lock size={15} />
              Your information is safe.
            </div>
          </div>

          {/* CTA MOBILE */}

          <div
            className="
mt-8

rounded-3xl

border

border-[#164E45]

bg-[#071A18]/80

p-6

text-center
"
          >
            <h2
              className="
text-white
font-bold
text-xl
"
            >
              Open For Collaboration
            </h2>

            <p
              className="
text-gray-400
text-sm
mt-3
leading-6
"
            >
              Security assessment, web development, and GRC consultation.
            </p>

            <p
              className="
text-[#00FF88]
italic
text-sm
mt-5
"
            >
              "Security, Governance, and Technology."
            </p>
          </div>
        </div>
        <div
          className="
hidden

lg:grid

grid-cols-[42%_33%_25%]

gap-10

items-start

"
        >
          {/* ================= LEFT CONTENT ================= */}

          <div>
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
w-12
h-[2px]

bg-[#00FF88]

"
              />

              <p
                className="
text-[#00FF88]

font-bold

tracking-[5px]

"
              >
                CONTACT
              </p>
            </div>

            <h1
              className="
text-white

font-bold

text-[64px]

xl:text-[72px]

leading-[0.95]

"
            >
              Let's Work
              <br />
              <span
                className="
text-[#00FF88]
"
              >
                Together
              </span>
            </h1>

            <p
              className="
mt-8

text-gray-300

text-lg

leading-8

max-w-[520px]

"
            >
              Have a project, opportunity, or collaboration idea? I am always
              open to discussing cybersecurity, GRC, secure development, and
              technology solutions.
            </p>

            <div
              className="
flex

gap-8

mt-10

"
            >
              <Feature icon={<MessageCircle />} text="Fast Response" />

              <Feature icon={<ShieldCheck />} text="Professional" />

              <Feature icon={<Users />} text="Open Opportunity" />
            </div>

            <div
              className="
grid

grid-cols-2

gap-5

mt-10

"
            >
              <ContactCard
                icon={<Phone />}
                title="WhatsApp"
                desc="Chat directly"
                value="Open WhatsApp"
                link="https://wa.link/wip801"
              />

              <ContactCard
                icon={<Mail />}
                title="Email"
                desc="Business inquiry"
                value="Send Email"
                link="mailto:maghfirliayubi@gmail.com"
              />

              <ContactCard
                icon={<LinkedinLogo />}
                title="LinkedIn"
                desc="Professional network"
                value="View Profile"
                link="https://www.linkedin.com/in/maghfirli-alif-al-ayubi-2595202a5"
              />

              <ContactCard
                icon={<GithubLogo />}
                title="GitHub"
                desc="My projects"
                value="View Repository"
                link="https://github.com/maghfirli"
              />
            </div>
          </div>

          {/* ================= FORM ================= */}

          <div
            className="
mt-16

rounded-2xl

border

border-[#164E45]

bg-[#071A18]/80

backdrop-blur

p-8

"
          >
            <h2
              className="
text-white

text-2xl

font-bold

"
            >
              Send a Message
            </h2>

            <p
              className="
text-gray-400

mt-2

"
            >
              Your message will open directly in Gmail.
            </p>

            <div
              className="
space-y-5

mt-8

"
            >
              <Input
                placeholder="Your Name or Company"
                value={name}
                setValue={setName}
              />

              <Input
                placeholder="Your Email"
                value={email}
                setValue={setEmail}
              />

              <Input
                placeholder="Subject"
                value={subject}
                setValue={setSubject}
              />

              <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="
w-full

h-[150px]

rounded-xl

bg-[#020617]

border

border-[#164E45]

p-4

text-white

outline-none

focus:border-[#00FF88]

"
              />

              <button
                onClick={sendEmail}
                className="
w-full

py-4

rounded-xl

bg-[#00FF88]

text-black

font-bold

flex

justify-center

items-center

gap-3

hover:shadow-[0_0_30px_#00FF88]

transition

"
              >
                <Send size={18} />
                Send Message
              </button>
            </div>

            <div
              className="
flex

items-center

gap-2

text-gray-400

text-sm

mt-6

"
            >
              <Lock size={16} />
              Your information is safe.
            </div>
          </div>
          {/* ================= IMAGE ================= */}

          <div
            className="
relative

h-[760px]

mt-10

"
          >
            <div
              className="
absolute

bottom-0

right-[-120px]

w-[620px]

h-[760px]

"
            >
              <Image
                src="/images/profile/profile.png"
                alt="profile"
                fill
                priority
                className="
object-contain
"
              />
            </div>
          </div>
        </div>

        {/* ================= CTA ================= */}

        <div
          className="
mt-8

rounded-2xl

border

border-[#164E45]

bg-[#071A18]/80

px-10

py-8

flex

flex-col

xl:flex-row

justify-between

items-center

gap-6

"
        >
          <div>
            <h2
              className="
text-white

text-2xl

font-bold

"
            >
              Open for Freelance & Collaboration
            </h2>

            <p
              className="
text-gray-400

mt-1

"
            >
              Security assessment, web development, and GRC consultation.
            </p>
          </div>

          <p
            className="
text-[#00FF88]

italic

text-xl

text-center

"
          >
            "Security, Governance, and Technology for a Better Tomorrow."
          </p>
        </div>
      </div>
    </section>
  );
}

/* =========================
   FEATURE COMPONENT
========================= */

function Feature({ icon, text }: any) {
  return (
    <div
      className="
flex

items-center

gap-3

text-gray-300

"
    >
      <div
        className="
text-[#00FF88]

"
      >
        {icon}
      </div>

      <span>{text}</span>
    </div>
  );
}

/* =========================
   CONTACT CARD
========================= */

function ContactCard({
  icon,

  title,

  desc,

  value,

  link,
}: any) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="
rounded-xl

border

border-[#164E45]

bg-[#071A18]/80

p-5

hover:border-[#00FF88]

hover:-translate-y-1

hover:shadow-[0_0_25px_rgba(0,255,136,0.2)]

transition-all

duration-300

"
    >
      <div
        className="
text-[#00FF88]

mb-3

"
      >
        {icon}
      </div>

      <h3
        className="
text-white

font-bold

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

      <p
        className="
text-[#00FF88]

text-sm

mt-3

"
      >
        {value}
      </p>
    </a>
  );
}

/* =========================
   INPUT COMPONENT
========================= */

function Input({
  placeholder,

  value,

  setValue,
}: any) {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="
w-full

rounded-xl

bg-[#020617]

border

border-[#164E45]

p-4

text-white

outline-none

focus:border-[#00FF88]

transition

"
    />
  );
}
