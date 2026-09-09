"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";

const pages = [
  "/paper-pages/phishing-paper-1.png",
  "/paper-pages/phishing-paper-2.png",
  "/paper-pages/phishing-paper-3.png",
  "/paper-pages/phishing-paper-4.png",
  "/paper-pages/phishing-paper-5.png",
  "/paper-pages/phishing-paper-6.png",
];

export default function PaperViewer() {
  const [page, setPage] = useState(0);

  return (
    <div
      className="
      min-h-screen
      bg-black
      text-white
      px-10
      py-10
      "
    >
      {/* BACK BUTTON */}

      <Link
        href="/portfolio/phishing-detection"
        className="
        inline-flex
        items-center
        gap-3

        mb-8

        px-5
        py-3

        rounded-xl

        border
        border-[#164E45]

        text-gray-300

        hover:text-[#00FF88]

        hover:border-[#00FF88]

        transition
        "
      >
        <ArrowLeft size={18} />
        Back To Research
      </Link>

      <div
        className="
        max-w-7xl
        mx-auto

        grid

        lg:grid-cols-[400px_1fr]

        gap-10
        "
      >
        {/* LEFT INFORMATION */}

        <div>
          <h1
            className="
            text-4xl
            font-bold
            mb-6
            "
          >
            Research Paper Preview
          </h1>

          <p
            className="
            text-gray-400
            mb-10
            "
          >
            A Lightweight Hybrid Rule-Based Framework for Interpretable Phishing
            Detection
          </p>

          <div
            className="
            border
            border-[#00FF88]/40

            rounded-2xl

            p-6

            bg-[#071A18]

            "
          >
            <h2
              className="
              text-[#00FF88]
              text-xl
              font-bold
              mb-6
              "
            >
              Paper Information
            </h2>

            <div
              className="
              space-y-5
              "
            >
              <div>
                <p className="text-gray-400">Title</p>

                <p>
                  A Lightweight Hybrid Rule-Based Framework for Interpretable
                  Phishing Detection
                </p>
              </div>

              <div>
                <p className="text-gray-400">Conference</p>

                <p>
                  International Conference on ICT for Smart Society (ICISS) 2026
                </p>
              </div>

              <div>
                <p className="text-gray-400">Authors</p>

                <p>Muhammad Adam Zuhdi</p>

                <p>Maghfiri Alif Al Ayubi</p>

                <p>Maria Rianti Gadi Djou</p>

                <p>Ayu Maulina</p>
              </div>

              <div>
                <p className="text-gray-400">Status</p>

                <span
                  className="
                  inline-block

                  mt-2

                  px-4
                  py-2

                  rounded-full

                  bg-[#00FF88]/20

                  border

                  border-[#00FF88]

                  text-[#00FF88]
                  "
                >
                  Accepted Paper
                </span>
              </div>
            </div>
          </div>

          {/* NAVIGATION */}

          <div
            className="
            mt-10

            flex

            items-center

            justify-between

            "
          >
            <button
              onClick={() => setPage(Math.max(0, page - 1))}
              className="
              px-5
              py-3

              rounded-xl

              border

              border-[#164E45]

              hover:border-[#00FF88]

              transition
              "
            >
              ← Previous
            </button>

            <p>
              Page {page + 1} / {pages.length}
            </p>

            <button
              onClick={() => setPage(Math.min(pages.length - 1, page + 1))}
              className="
              px-5
              py-3

              rounded-xl

              border

              border-[#164E45]

              hover:border-[#00FF88]

              transition
              "
            >
              Next →
            </button>
          </div>
        </div>

        {/* PAPER VIEWER */}

        <div
          className="
          relative

          bg-white

          rounded-xl

          overflow-hidden

          shadow-2xl

          "
        >
          <Image
            src={pages[page]}
            alt={`Research Paper Page ${page + 1}`}
            width={900}
            height={1200}
            priority
            className="
            w-full
            h-auto
            select-none
            "
          />

          {/* WATERMARK */}

          <div
            className="
            absolute

            inset-0

            pointer-events-none

            flex

            items-center

            justify-center

            "
          >
            <p
              className="
              text-black/20

              text-7xl

              font-black

              rotate-[-35deg]

              tracking-widest

              whitespace-nowrap

              select-none
              "
            >
              MAGHFIRLI ALIF AL AYUBI
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
