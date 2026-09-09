"use client";

import { ArrowUpRight, Menu, X, Home, User, Folder, Mail } from "lucide-react";

import { useEffect, useState } from "react";

const sections = ["home", "about", "portfolio", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");

  const [open, setOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const position = window.scrollY + 300;

      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (section) {
          const top = section.offsetTop;

          const height = section.offsetHeight;

          if (position >= top && position < top + height) {
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

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      <nav
        className={`

fixed

top-0

left-0

right-0


z-[100]


transition-all

duration-500


backdrop-blur-xl


border-b

border-white/10



${
  scrolled
    ? "bg-[#020617]/95 shadow-[0_10px_40px_rgba(0,255,136,0.15)]"
    : "bg-[#020617]/70"
}

`}
      >
        <div
          className="

max-w-[1800px]

mx-auto


h-[90px]


px-5

lg:px-16



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

relative

text-[#00FF88]

font-black

text-4xl

leading-none

"
            >
              MF
              <span
                className="

absolute

inset-0

bg-[#00FF88]/50

blur-2xl

rounded-full

-z-10

"
              />
            </div>

            <div>
              <h1
                className="

text-white

font-bold

text-sm

lg:text-lg

leading-tight

"
              >
                MaghFirli Alif Al Ayubi
              </h1>

              <p
                className="

hidden

sm:block


text-gray-400


text-xs


tracking-wide

"
              >
                Cyber Security | GRC | Pentester
              </p>
            </div>
          </div>

          {/* DESKTOP MENU */}

          <div
            className="

hidden

md:flex


items-center


gap-16


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


px-8


py-3


rounded-xl


border

border-[#00FF88]


text-[#00FF88]


font-bold


text-lg


transition-all



hover:bg-[#00FF88]


hover:text-black


hover:shadow-[0_0_30px_#00FF88]

"
          >
            Let's Connect
            <span
              className="

w-6

h-6


rounded-full


bg-[#00FF88]


flex

items-center

justify-center

"
            >
              <ArrowUpRight size={15} className="text-black" />
            </span>
          </a>

          {/* MOBILE BUTTON */}

          <button
            onClick={() => setOpen(!open)}
            className="

md:hidden


w-11

h-11


rounded-xl


border

border-[#00FF88]/40


bg-[#071A18]/90


backdrop-blur-xl


flex

items-center

justify-center


text-white


shadow-[0_0_25px_rgba(0,255,136,0.25)]


transition-all

"
          >
            {open ? <X size={27} /> : <Menu size={27} />}
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}

      {open && (
        <div
          onClick={closeMenu}
          className="

fixed

inset-0


top-[90px]


z-[90]


md:hidden


bg-black/60


backdrop-blur-md

"
        />
      )}

      {/* MOBILE MENU */}

      <div
        className={`

fixed


top-[105px]


left-4

right-4


z-[95]


md:hidden



rounded-3xl



bg-[#020617]/95



backdrop-blur-3xl



border

border-[#00FF88]/20



shadow-[0_20px_80px_rgba(0,255,136,0.25)]



transition-all

duration-500



overflow-hidden



${
  open
    ? "max-h-[520px] opacity-100 translate-y-0"
    : "max-h-0 opacity-0 -translate-y-5"
}

`}
      >
        <div
          className="

p-7

flex

flex-col

gap-6

"
        >
          <MobileItem
            href="#home"
            text="Home"
            icon={<Home size={21} />}
            close={closeMenu}
          />

          <MobileItem
            href="#about"
            text="About"
            icon={<User size={21} />}
            close={closeMenu}
          />

          <MobileItem
            href="#portfolio"
            text="Portfolio"
            icon={<Folder size={21} />}
            close={closeMenu}
          />

          <MobileItem
            href="#contact"
            text="Contact"
            icon={<Mail size={21} />}
            close={closeMenu}
          />

          <a
            href="#contact"
            onClick={closeMenu}
            className="
            mt-3

            h-[54px]

            rounded-xl

            bg-[#00FF88]

            text-black

            font-bold

            flex

            items-center

            justify-center

            gap-3

            shadow-[0_0_25px_rgba(0,255,136,0.35)]

            transition-all

            "
          >
            Let's Connect
            <ArrowUpRight size={19} />
          </a>
        </div>
      </div>
    </>
  );
}

// ================= DESKTOP MENU =================

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

text-lg

pb-8

"
    >
      <span
        className={`

transition-all

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


w-[8px]

h-[8px]


rounded-full


bg-[#00FF88]


shadow-[0_0_15px_#00FF88]


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


h-[3px]


rounded-full


bg-[#00FF88]


shadow-[0_0_15px_#00FF88]


transition-all

duration-300



${active ? "w-12" : "w-0 group-hover:w-12"}

`}
      />
    </a>
  );
}

// ================= MOBILE ITEM =================

function MobileItem({
  href,

  text,

  icon,

  close,
}: {
  href: string;

  text: string;

  icon: React.ReactNode;

  close: () => void;
}) {
  return (
    <a
      href={href}
      onClick={close}
      className="

group


flex

items-center

gap-4


text-white


font-bold


text-lg


transition-all


hover:text-[#00FF88]

"
    >
      <span
        className="

text-[#00FF88]


transition-transform


group-hover:scale-110

"
      >
        {icon}
      </span>

      <span>{text}</span>
    </a>
  );
}
