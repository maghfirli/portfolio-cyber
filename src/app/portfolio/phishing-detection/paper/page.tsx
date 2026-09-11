"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
      <Link
        href="/portfolio/phishing-detection"
        className="
inline-flex
items-center
mb-8
px-5
py-3
rounded-xl
border
border-[#00FF88]
text-[#00FF88]
"
      >
        ← Back To Project
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

          <p className="text-gray-400">
            A Lightweight Hybrid Rule-Based Framework for Interpretable Phishing
            Detection
          </p>

          <div
            className="
mt-8
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
font-bold
text-xl
mb-5
"
            >
              Paper Information
            </h2>

            <p>
              Conference:
              <br />
              ICISS 2026
            </p>

            <br />

            <p>Authors:</p>

            <p>Muhammad Adam Zuhdi</p>

            <p>Maghfiri Alif Al Ayubi</p>

            <p>Maria Rianti Gadi Djou</p>

            <p>Ayu Maulina</p>
          </div>

          <div
            className="
mt-10
flex
justify-between
items-center
"
          >
            <button
              onClick={() => setPage(Math.max(0, page - 1))}
              className="
px-5
py-3
border
rounded-xl
"
            >
              ← Previous
            </button>

            <p>Page {page + 1}/6</p>

            <button
              onClick={() => setPage(Math.min(5, page + 1))}
              className="
px-5
py-3
border
rounded-xl
"
            >
              Next →
            </button>
          </div>
        </div>

        <div
          className="
bg-white
rounded-xl
overflow-hidden
"
        >
          <Image
            src={pages[page]}
            alt="Research Paper"
            width={900}
            height={1200}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
