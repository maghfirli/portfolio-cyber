"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  ExternalLink,
  Shield,
  FileText,
  Code2,
} from "lucide-react";

import { projects } from "@/data/projects";

function ProjectIcon({ category }: { category: string }) {
  if (category.includes("Cyber")) {
    return <Shield size={18} />;
  }

  if (category.includes("GRC")) {
    return <FileText size={18} />;
  }

  return <Code2 size={18} />;
}

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="
relative
min-h-screen
overflow-hidden

bg-gradient-to-b
from-[#020617]
to-[#052E25]

py-28
"
    >
      <div
        className="
absolute
right-0
top-40
w-[600px]
h-[600px]

rounded-full

bg-[#00FF88]/10

blur-[120px]
"
      />

      <div
        className="
relative

max-w-[1600px]

mx-auto

px-5

sm:px-8

lg:px-16

xl:px-20
"
      >
        {/* HEADER */}

        <div
          className="
flex
flex-col

lg:flex-row

lg:justify-between

items-start

mb-12

lg:mb-16
"
        >
          <div>
            <div
              className="
flex
items-center

gap-5

mb-6
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

tracking-[5px]

font-bold
"
              >
                FEATURED WORK
              </p>
            </div>

            <h1
              className="
text-white

font-bold

text-4xl

sm:text-5xl

lg:text-[72px]

leading-none
"
            >
              My Portfolio
            </h1>

            <p
              className="
mt-6

max-w-[850px]

text-gray-300

text-base

sm:text-lg

lg:text-xl

leading-8
"
            >
              A collection of selected projects that reflect my passion in
              cybersecurity, governance, and software development.
            </p>
          </div>

          <div
            className="
hidden

lg:block

mt-10

text-right
"
          >
            <p
              className="
text-gray-400

italic

text-2xl

leading-10
"
            >
              "Turning Ideas
              <br />
              into Secure
              <br />
              Solutions"
            </p>

            <div
              className="
w-32

h-[2px]

bg-[#00FF88]

ml-auto

mt-5
"
            />
          </div>
        </div>

        {/* FILTER */}

        <div
          className="
flex

overflow-x-auto

gap-3

mb-10

pb-2

scrollbar-hide
"
        >
          {["All", "Cyber Security", "GRC", "Web Development", "Research"].map(
            (item, index) => (
              <button
                key={item}
                className={`
px-5
py-2

whitespace-nowrap

rounded-full

border

transition


${
  index === 0
    ? "bg-[#00FF88] text-black border-[#00FF88]"
    : "text-gray-300 border-[#164E45] hover:border-[#00FF88] hover:text-[#00FF88]"
}

`}
              >
                {item}
              </button>
            ),
          )}
        </div>

        {/* PROJECT CARD */}

        <div
          className="
grid

grid-cols-1

sm:grid-cols-2

lg:grid-cols-3

gap-5

lg:gap-8
"
        >
          {projects.map((project, index) => (
            <div
              key={project.slug}
              className="
group

rounded-2xl

border

border-[#164E45]

bg-[#071A18]/80

overflow-hidden

transition-all

duration-500

hover:-translate-y-3

hover:border-[#00FF88]

hover:shadow-[0_0_40px_rgba(0,255,136,0.15)]

"
            >
              <div
                className="
relative

h-[220px]

sm:h-[260px]

lg:h-[280px]

overflow-hidden
"
              >
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  sizes="
(max-width:768px) 100vw,
33vw
"
                  className="
object-cover

transition

duration-500

group-hover:scale-110
"
                />

                <div
                  className="
absolute

top-5

left-5

flex

items-center

gap-2

bg-[#071A18]/90

border

border-[#164E45]

px-3

py-1.5

text-xs

rounded-full

text-white

text-sm
"
                >
                  <ProjectIcon category={project.category} />

                  {project.category}
                </div>
              </div>

              <div
                className="
p-5

lg:p-7
"
              >
                <p
                  className="
text-[#00FF88]

font-bold
"
                >
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h2
                  className="
text-white

text-xl

lg:text-2xl

font-bold

mt-3
"
                >
                  {project.title}
                </h2>

                <p
                  className="
text-gray-400

leading-6

lg:leading-7

mt-4
"
                >
                  {project.description}
                </p>

                <div
                  className="
flex

flex-wrap

gap-2

mt-6
"
                >
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
px-3

py-1

rounded-full

text-xs

border

border-[#164E45]

text-gray-300
"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div
                  className="
flex

flex-col

sm:flex-row

gap-4

sm:justify-between

sm:items-center

mt-8
"
                >
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="
text-[#00FF88]

font-bold

flex

items-center

gap-2

hover:gap-4

transition
"
                  >
                    View Case Study
                    <ArrowRight size={18} />
                  </Link>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="
text-white

flex

items-center

gap-2
"
                    >
                      <ExternalLink size={18} />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
