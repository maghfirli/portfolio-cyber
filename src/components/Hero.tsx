"use client";

import Image from "next/image";
import type { ReactNode } from "react";

import {
  Shield,
  Lock,
  Code2,
  FileText,
  Phone,
  Folder,
  ArrowRight,
  Mail,
} from "lucide-react";

const GithubLogo = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.58.1.8-.25.8-.56v-2.1c-3.22.7-3.9-1.55-3.9-1.55-.53-1.35-1.3-1.7-1.3-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.35.96.1-.75.4-1.26.73-1.55-2.57-.3-5.27-1.28-5.27-5.7 0-1.26.45-2.3 1.2-3.1-.12-.3-.52-1.52.1-3.16 0 0 .98-.31 3.2 1.18a11 11 0 0 1 5.8 0c2.22-1.49 3.2-1.18 3.2-1.18.62 1.64.22 2.86.1 3.16.75.8 1.2 1.84 1.2 3.1 0 4.43-2.7 5.4-5.28 5.7.42.36.78 1.08.78 2.18v3.23c0 .31.2.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

export default function Hero() {
  return (
    <section
      id="home"
      className="
relative
min-h-screen
overflow-hidden
bg-[#020617]
scroll-mt-20
"
    >
      {/* BACKGROUND */}

      <div
        className="
absolute
inset-0
bg-gradient-to-r
from-[#020617]
via-[#020617]
to-[#052E25]
pointer-events-none
"
      />

      {/* GREEN AURA */}

      <div
        className="
absolute

right-[-200px]

top-[100px]

w-[350px]
h-[350px]

sm:w-[600px]
sm:h-[600px]

lg:w-[900px]
lg:h-[900px]

rounded-full

bg-[#00FF88]/10

blur-[180px]

pointer-events-none
"
      />

      <div
        className="
relative
z-10

w-full

max-w-[1800px]

mx-auto


px-5

sm:px-8

lg:px-16

xl:px-24


min-h-screen

grid

grid-cols-1

lg:grid-cols-[40%_60%]


items-start

lg:items-center


pt-28

lg:pt-24

gap-8

lg:gap-0

"
      >
        {/* ================= LEFT ================= */}

        <div
          className="
relative
z-30
"
        >
          <p
            className="
text-[#00FF88]

tracking-[7px]

font-bold

mb-6
"
          >
            HELLO, I&apos;M
          </p>

          <h1
            className="
text-white

font-bold

leading-[0.95]


text-4xl

sm:text-6xl

lg:text-7xl

xl:text-[88px]

"
          >
            MaghFirli
            <br />
            <span
              className="
text-[#00FF88]
"
            >
              Alif Al Ayubi
            </span>
          </h1>

          <p
            className="
mt-8

text-white

text-lg

sm:text-xl

xl:text-2xl

tracking-[2px]
"
          >
            Cyber Security Engineer | GRC | Secure Developer
          </p>

          <p
            className="
mt-6

max-w-[600px]

text-gray-400

text-base

sm:text-lg

leading-8
"
          >
            I build secure, compliant, and reliable digital solutions through
            cybersecurity, governance, risk, and compliance (GRC), and software
            development.
          </p>

          {/* BUTTON */}

          <div
            className="
flex

flex-col

sm:flex-row

gap-4

mt-10
"
          >
            <a
              href="#contact"
              className="
h-[58px]

w-full

sm:w-auto

px-8

rounded-xl

bg-[#00FF88]

text-black

font-bold

flex

items-center

justify-center

gap-3

hover:scale-105

transition-all

duration-300
"
            >
              <Phone size={20} />
              Contact Me
              <ArrowRight size={20} />
            </a>

            <a
              href="#portfolio"
              className="
h-[58px]

w-full

sm:w-auto

px-8

rounded-xl

border

border-white/30

text-white

font-bold

flex

items-center

justify-center

gap-3


hover:border-[#00FF88]

hover:text-[#00FF88]

transition-all

duration-300
"
            >
              <Folder size={20} />
              View My Work
              <ArrowRight size={20} />
            </a>
          </div>

          {/* SOCIAL */}

          <div
            className="
hidden

sm:block

mt-8

sm:mt-14

relative

z-[200]
"
          >
            <p
              className="
text-gray-400

tracking-[5px]

text-sm

mb-4
"
            >
              FIND ME ON :
            </p>

            <div
              className="
flex

gap-4
"
            >
              <Social
                href="https://www.linkedin.com/in/maghfirli-alif-al-ayubi-2595202a5/"
                label="LinkedIn"
              >
                <span
                  className="
font-bold
text-[17px]
"
                >
                  in
                </span>
              </Social>

              <Social href="https://github.com/maghfirli" label="Github">
                <GithubLogo />
              </Social>

              <Social
                href="mailto:maghfirliayubi@gmail.com"
                label="Email"
                external={false}
              >
                <Mail size={20} />
              </Social>
            </div>
          </div>
        </div>
        {/* ================= RIGHT ================= */}

        <div
          className="
relative

h-[330px]

sm:h-[650px]

lg:h-[900px]

mt-[-40px]

lg:mt-0
"
        >
          {/* INNER GLOW */}

          <div
            className="
            absolute

            right-1/2

            translate-x-1/2

            lg:right-[120px]

            lg:translate-x-0


            top-[150px]


            w-[300px]

            h-[300px]


            sm:w-[450px]

            sm:h-[450px]


            lg:w-[620px]

            lg:h-[620px]


            rounded-full


            bg-[#00FF88]/20


            blur-[90px]


            pointer-events-none
            "
          />

          {/* OUTER CIRCLE */}

          <div
            className="
            absolute


            right-1/2

            translate-x-1/2


            lg:right-[100px]

            lg:translate-x-0



            top-[70px]


            w-[320px]

            h-[320px]


            sm:w-[500px]

            sm:h-[500px]


            lg:w-[650px]

            lg:h-[650px]



            rounded-full


            border

            border-[#00FF88]/30


            bg-[#00FF88]/5


            pointer-events-none
            "
          />

          {/* SECOND RING */}

          <div
            className="
            absolute


            right-1/2

            translate-x-1/2


            lg:right-[70px]

            lg:translate-x-0



            top-[50px]


            w-[360px]

            h-[360px]


            sm:w-[560px]

            sm:h-[560px]


            lg:w-[710px]

            lg:h-[710px]



            rounded-full


            border

            border-[#00FF88]/10


            pointer-events-none
            "
          />

          {/* PROFILE IMAGE */}

          <div
            className="
            absolute


            right-1/2

            translate-x-1/2


            lg:right-0

            lg:translate-x-0



bottom-[-10px]


w-[250px]

h-[360px]


                sm:w-[520px]

                sm:h-[700px]


                lg:w-[840px]

                lg:h-[960px]


            z-20


            pointer-events-none
            "
          >
            <Image
              src="/images/profile/profile.png"
              alt="MaghFirli Al Ayubi"
              fill
              priority
              sizes="(max-width: 640px) 330px, (max-width: 1024px) 520px, 840px"
              className="
    object-contain
    object-bottom
  "
            />
          </div>

          {/* GOVERNANCE */}

          <Card
            className="
top-[40px]
left-[0px]


            lg:top-[180px]

            lg:left-[30px]
            "
            icon={<Shield />}
            title="Governance"
            desc="Risk • Policy • Audit"
          />

          {/* SECURE APPLICATIONS */}

          <Card
            className="
top-[40px]

right-[0px]


            lg:top-[180px]

            lg:right-[-65px]
            "
            icon={<Code2 />}
            title="Secure Applications"
            desc="Code • Test • Protect"
          />

          {/* CYBER SECURITY */}

          <Card
            className="
          bottom-[40px]

            left-[5px]


            lg:bottom-[220px]

            lg:left-[20px]
            "
            icon={<Lock />}
            title="Cyber Security"
            desc="Analyze • Mitigate • Secure"
          />

          {/* STANDARD */}

          <Card
            className="
            bottom-[40px]

            right-[5px]


            lg:bottom-[200px]

            lg:right-[-70px]
            "
            icon={<FileText />}
            title="Standards"
            desc="ISO 27001 • NIST • COBIT"
          />

          {/* QUOTE */}

          <div
            className="
            hidden

            lg:block


            absolute

            right-[-60px]

            top-[310px]


            w-[260px]


            text-[#00FF88]


            text-[32px]


            leading-[1.4]


            font-signature


            pointer-events-none


            z-40
            "
          >
            Turning Security,
            <br />
            Governance,
            <br />
            and Technology
            <br />
            into Real Impact.
          </div>
        </div>
      </div>
    </section>
  );
}

type CardProps = {
  icon: ReactNode;

  title: string;

  desc: string;

  className?: string;
};

function Card({
  icon,

  title,

  desc,

  className = "",
}: CardProps) {
  return (
    <div
      className={`
absolute

z-50


w-[135px]

sm:w-[210px]


rounded-xl


border

border-[#164E45]


bg-[#071A18]/90


backdrop-blur-xl


px-4

sm:px-5


py-4


pointer-events-none


${className}

`}
    >
      <div
        className="
text-[#00FF88]

mb-2
"
      >
        {icon}
      </div>

      <h3
        className="
text-white

font-bold

text-sm

sm:text-base
"
      >
        {title}
      </h3>

      <p
        className="
text-gray-400

text-xs

sm:text-sm
"
      >
        {desc}
      </p>
    </div>
  );
}

type SocialProps = {
  children: ReactNode;

  href: string;

  label: string;

  external?: boolean;
};

function Social({
  children,

  href,

  label,

  external = true,
}: SocialProps) {
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="
relative

z-[100]


w-11

h-11


rounded-lg


border

border-white/20


bg-white/10


flex

items-center

justify-center


text-white


cursor-pointer


hover:text-[#00FF88]


hover:border-[#00FF88]


hover:bg-[#00FF88]/10


hover:scale-110


transition-all


duration-300
"
    >
      {children}
    </a>
  );
}
