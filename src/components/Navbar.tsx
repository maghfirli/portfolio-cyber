"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const sections = ["home", "about", "portfolio", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

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

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav
      className="
        fixed
        top-0
        left-0
        right-0

        z-[100]

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

          px-5

          sm:px-8

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
            gap-3
            sm:gap-4
          "
        >
          <div
            className="
              text-[#00FF88]

              font-bold

              text-3xl

              sm:text-4xl
            "
          >
            MF
          </div>

          <div>
            <h1
              className="
                text-white

                font-bold

                text-sm

                sm:text-base

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

                mt-1
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

        {/* DESKTOP BUTTON */}

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

        {/* MOBILE BUTTON */}

        <button
          onClick={() => setOpen(!open)}
          className="
            md:hidden

            text-white

            hover:text-[#00FF88]

            transition
          "
          aria-label="Toggle mobile menu"
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* MOBILE MENU */}

      <div
        className={`
          md:hidden

          absolute

          top-[90px]

          left-0

          right-0

          bg-[#020617]/95

          backdrop-blur-xl

          border-b

          border-white/10

          overflow-hidden

          transition-all

          duration-300


          ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}

        `}
      >
        <div
          className="
            px-6

            py-8

            flex

            flex-col

            gap-6
          "
        >
          <MobileItem href="#home" text="Home" close={closeMenu} />

          <MobileItem href="#about" text="About" close={closeMenu} />

          <MobileItem href="#portfolio" text="Portfolio" close={closeMenu} />

          <MobileItem href="#contact" text="Contact" close={closeMenu} />

          <a
            href="#contact"
            onClick={closeMenu}
            className="
              mt-2

              flex

              items-center

              justify-center

              gap-3

              px-6

              py-3

              rounded-xl

              border

              border-[#00FF88]

              text-[#00FF88]

              font-bold
            "
          >
            Let's Connect
            <ArrowUpRight size={18} />
          </a>
        </div>
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

      {/* DOT */}

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

      {/* LINE */}

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
      />
    </a>
  );
}

function MobileItem({
  href,
  text,
  close,
}: {
  href: string;
  text: string;
  close: () => void;
}) {
  return (
    <a
      href={href}
      onClick={close}
      className="
        text-white

        text-lg

        font-bold

        hover:text-[#00FF88]

        transition
      "
    >
      {text}
    </a>
  );
}
