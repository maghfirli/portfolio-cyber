"use client";

import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

const sections = ["home", "about", "portfolio", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300;

      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (section) {
          const top = section.offsetTop;

          const height = section.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className="
fixed
top-0
left-0
right-0

z-50

h-[90px]

bg-[#020617]/80

backdrop-blur-xl

border-b
border-white/5
"
    >
      <div
        className="
w-full

max-w-[1800px]

mx-auto

h-full

px-8
xl:px-16

flex

items-center

justify-between
"
      >
        {/* LOGO */}

        <div
          className="
flex
items-center
gap-4
"
        >
          <div
            className="
text-[#00FF88]

font-bold

text-4xl
"
          >
            MF
          </div>

          <div>
            <h1
              className="
text-white

font-bold

text-base

leading-tight
"
            >
              MaghFirli Alif Al Ayubi
            </h1>

            <p
              className="
text-gray-400

text-xs

mt-1
"
            >
              Cyber Security | GRC | Pentester
            </p>
          </div>
        </div>

        {/* NAV MENU */}

        <div
          className="
hidden

md:flex

items-center

gap-12
"
        >
          <NavItem href="#home" text="Home" active={active === "home"} />

          <NavItem href="#about" text="About" active={active === "about"} />

          <NavItem
            href="#portfolio"
            text="Portfolio"
            active={active === "portfolio"}
          />

          <NavItem
            href="#contact"
            text="Contact"
            active={active === "contact"}
          />
        </div>

        {/* BUTTON */}

        <a
          href="#contact"
          className="
hidden

lg:flex

items-center

gap-3

px-7

py-3

rounded-xl

border

border-[#00FF88]

text-[#00FF88]

font-bold

transition

hover:bg-[#00FF88]

hover:text-black

hover:shadow-[0_0_25px_#00FF88]
"
        >
          Let's Connect
          <span
            className="
w-5

h-5

rounded-full

bg-[#00FF88]

flex

items-center

justify-center
"
          >
            <ArrowUpRight size={13} className="text-black" />
          </span>
        </a>
      </div>
    </nav>
  );
}

function NavItem({
  href,

  text,

  active,
}: {
  href: string;

  text: string;

  active: boolean;
}) {
  return (
    <a
      href={href}
      className="
relative

group

font-bold

text-sm

pb-8

transition

"
    >
      <span
        className={`
transition

duration-300

${active ? "text-[#00FF88]" : "text-white group-hover:text-[#00FF88]"}

`}
      >
        {text}
      </span>

      {/* DOT BAWAH */}

      <span
        className={`
absolute

left-1/2

-translate-x-1/2


bottom-3


w-[7px]

h-[7px]


rounded-full


bg-[#00FF88]


transition-all

duration-300


${
  active
    ? "opacity-100 scale-100"
    : "opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"
}

`}
      />

      {/* GARIS BAWAH */}

      <span
        className={`
absolute

left-1/2

-translate-x-1/2


bottom-0


h-[2px]


bg-[#00FF88]


transition-all

duration-300


${active ? "w-10" : "w-0 group-hover:w-10"}

`}
      ></span>
    </a>
  );
}
