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
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
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
          right-[-250px]
          top-[100px]
          w-[900px]
          h-[900px]
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
          px-6
          lg:px-16
          xl:px-24
          min-h-screen
          grid
          lg:grid-cols-[40%_60%]
          items-center
          pt-24
        "
      >
        {/* ================= LEFT ================= */}
        <div className="relative z-30">
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
              text-5xl
              sm:text-6xl
              lg:text-7xl
              xl:text-[88px]
            "
          >
            MaghFirli
            <br />
            <span className="text-[#00FF88]">Alif Al Ayubi</span>
          </h1>

          <p
            className="
              mt-8
              text-white
              text-xl
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
              text-lg
              leading-8
            "
          >
            I build secure, compliant, and reliable digital solutions through
            cybersecurity, governance, risk, and compliance (GRC), and software
            development.
          </p>

          {/* BUTTONS */}
          <div
            className="
              flex
              flex-wrap
              gap-5
              mt-10
            "
          >
            <a
              href="#contact"
              className="
                h-[58px]
                px-8
                rounded-xl
                bg-[#00FF88]
                text-black
                font-bold
                flex
                items-center
                gap-3
                hover:scale-105
                active:scale-[0.98]
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
                px-8
                rounded-xl
                border
                border-white/30
                text-white
                font-bold
                flex
                items-center
                gap-3
                hover:border-[#00FF88]
                hover:text-[#00FF88]
                hover:bg-[#00FF88]/5
                active:scale-[0.98]
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
          <div className="mt-14">
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

            <div className="flex gap-4">
              <Social
                href="https://www.linkedin.com/in/maghfirli-alif-al-ayubi-2595202a5/"
                label="Open MaghFirli Alif Al Ayubi LinkedIn profile"
              >
                <span className="font-bold text-[17px] leading-none">in</span>
              </Social>

              <Social
                href="https://github.com/maghfirli"
                label="Open MaghFirli GitHub profile"
              >
                <GithubLogo />
              </Social>

              <Social
                href="mailto:maghfirliayubi@gmail.com"
                label="Send email to MaghFirli Alif Al Ayubi"
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
            h-[750px]
            lg:h-[900px]
          "
        >
          {/* INNER GLOW */}
          <div
            className="
              absolute
              right-[120px]
              top-[150px]
              w-[620px]
              h-[620px]
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
              right-[100px]
              top-[120px]
              w-[650px]
              h-[650px]
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
              right-[70px]
              top-[90px]
              w-[710px]
              h-[710px]
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
              right-0
              bottom-[-30px]
              w-[840px]
              h-[960px]
              z-20
              pointer-events-none
            "
          >
            <Image
              src="/images/profile/profile.png"
              alt="MaghFirli Alif Al Ayubi"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 840px"
              className="
                object-contain
                object-bottom
              "
            />
          </div>

          {/* GOVERNANCE */}
          <Card
            className="
              top-[180px]
              left-[30px]
            "
            icon={<Shield />}
            title="Governance"
            desc="Risk • Policy • Audit"
          />

          {/* SECURE APPLICATIONS */}
          <Card
            className="
              top-[180px]
              right-[-65px]
            "
            icon={<Code2 />}
            title="Secure Applications"
            desc="Code • Test • Protect"
          />

          {/* CYBER SECURITY */}
          <Card
            className="
              bottom-[220px]
              left-[20px]
            "
            icon={<Lock />}
            title="Cyber Security"
            desc="Analyze • Mitigate • Secure"
          />

          {/* STANDARDS */}
          <Card
            className="
              bottom-[200px]
              right-[-70px]
            "
            icon={<FileText />}
            title="Standards"
            desc="ISO 27001 • NIST • COBIT"
          />

          {/* QUOTE */}
          <div
            className="
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

function Card({ icon, title, desc, className = "" }: CardProps) {
  return (
    <div
      className={`
        absolute
        z-50
        w-[210px]
        rounded-xl
        border
        border-[#164E45]
        bg-[#071A18]/90
        backdrop-blur-xl
        px-5
        py-4
        pointer-events-none
        ${className}
      `}
    >
      <div className="text-[#00FF88] mb-2">{icon}</div>

      <h3 className="text-white font-bold">{title}</h3>

      <p className="text-gray-400 text-sm">{desc}</p>
    </div>
  );
}

type SocialProps = {
  children: ReactNode;
  href: string;
  label: string;
  external?: boolean;
};

function Social({ children, href, label, external = true }: SocialProps) {
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
        active:scale-95
        focus:outline-none
        focus:ring-2
        focus:ring-[#00FF88]
        focus:ring-offset-2
        focus:ring-offset-[#020617]
        transition-all
        duration-300
      "
    >
      {children}
    </a>
  );
}
