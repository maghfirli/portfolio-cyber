import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { projects } from "@/data/projects";

import {
  ArrowLeft,
  Calendar,
  User,
  Award,
  ShieldCheck,
  FileText,
} from "lucide-react";

const GithubLogo = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.58.1.8-.25.8-.56v-2.1c-3.22.7-3.9-1.55-3.9-1.55-.53-1.35-1.3-1.7-1.3-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.35.96.1-.75.4-1.26.73-1.55-2.57-.3-5.27-1.28-5.27-5.7 0-1.26.45-2.3 1.2-3.1-.12-.3-.52-1.52.1-3.16 0 0 .98-.31 3.2 1.18a11 11 0 0 1 5.8 0c2.22-1.49 3.2-1.18 3.2-1.18.62 1.64.22 2.86.1 3.16.75.8 1.2 1.84 1.2 3.1 0 4.43-2.7 5.4-5.28 5.7.42.36.78 1.08.78 2.18v3.23c0 .31.2.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main
      className="
min-h-screen
bg-gradient-to-b
from-[#020617]
to-[#052E25]
text-white
px-6
py-24
"
    >
      <div
        className="
max-w-7xl
mx-auto
"
      >
        {/* BACK */}

        <Link
          href="/#portfolio"
          className="
inline-flex
items-center
gap-2
text-gray-300
hover:text-[#00FF88]
mb-12
"
        >
          <ArrowLeft size={18} />
          Back To Portfolio
        </Link>

        {/* HERO */}

        <section
          className="
max-w-5xl
"
        >
          <div
            className="
inline-flex
items-center
gap-2
px-5
py-2
rounded-full
border
border-[#00FF88]
bg-[#00FF88]/10
text-[#00FF88]
"
          >
            <Award size={18} />

            {project.status}
          </div>

          <h1
            className="
mt-8
text-4xl
md:text-6xl
font-bold
leading-tight
"
          >
            {project.title}
          </h1>

          <p
            className="
mt-8
text-xl
text-gray-300
leading-9
"
          >
            {project.description}
          </p>
        </section>

        {/* COVER */}

        <div
          className="
relative
h-[550px]
rounded-3xl
overflow-hidden
border
border-[#164E45]
mt-16
"
        >
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* INFO */}

        <section
          className="
grid
md:grid-cols-3
gap-6
mt-20
"
        >
          <InfoCard icon={<Calendar />} title="Year" value={project.year} />

          <InfoCard icon={<User />} title="Role" value={project.role} />

          <InfoCard
            icon={<ShieldCheck />}
            title="Category"
            value={project.category}
          />
        </section>

        <ResearchSection title="Research Overview">
          <p>{project.researchOverview}</p>
        </ResearchSection>

        <ResearchSection title="Research Problem">
          <div className="space-y-4">
            {project.researchProblem?.map((item) => (
              <div
                key={item}
                className="
flex
gap-3
bg-[#071A18]
border
border-[#164E45]
rounded-xl
p-5
"
              >
                <ShieldCheck className="text-[#00FF88]" />

                <p>{item}</p>
              </div>
            ))}
          </div>
        </ResearchSection>

        <ResearchSection title="Proposed Framework">
          <div
            className="
grid
md:grid-cols-2
gap-6
"
          >
            {project.methodology?.map((item) => (
              <div
                key={item.title}
                className="
bg-[#071A18]
border
border-[#164E45]
rounded-2xl
p-6
"
              >
                <h3
                  className="
text-xl
font-bold
text-[#00FF88]
"
                >
                  {item.title}
                </h3>

                <p
                  className="
mt-4
text-gray-300
leading-7
"
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </ResearchSection>

        <ResearchSection title="Result">
          <div
            className="
grid
md:grid-cols-4
gap-6
"
          >
            {project.metrics?.map((item) => (
              <div
                key={item.label}
                className="
bg-[#071A18]
border
border-[#164E45]
rounded-2xl
p-6
text-center
"
              >
                <p className="text-gray-400">{item.label}</p>

                <p
                  className="
text-4xl
font-bold
text-[#00FF88]
mt-3
"
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <p
            className="
mt-8
text-gray-300
leading-8
"
          >
            {project.results}
          </p>
        </ResearchSection>

        <ResearchSection title="Documentation">
          <div
            className="
grid
md:grid-cols-2
gap-8
"
          >
            {project.images.slice(1).map((image) => (
              <div
                key={image}
                className="
relative
h-[380px]
rounded-2xl
overflow-hidden
border
border-[#164E45]
bg-black
"
              >
                <Image
                  src={image}
                  alt="Documentation"
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </ResearchSection>

        {/* BUTTON */}

        <section
          className="
mt-24
flex
flex-wrap
gap-5
"
        >
          {project.action?.enabled && (
            <Link
              href={`/portfolio/${project.slug}${project.action.url}`}
              className="
flex
items-center
gap-3
px-8
py-4
rounded-xl
bg-[#00FF88]
text-black
font-bold
"
            >
              <FileText size={20} />

              {project.action.label}
            </Link>
          )}

          <a
            href={project.github}
            target="_blank"
            className="
flex
items-center
gap-3
px-8
py-4
rounded-xl
border
border-[#00FF88]
"
          >
            <GithubLogo />
            Github
          </a>
        </section>
      </div>
    </main>
  );
}

function ResearchSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className="
mt-24
"
    >
      <h2
        className="
text-3xl
font-bold
mb-8
"
      >
        {title}
      </h2>

      <div
        className="
text-gray-300
leading-8
"
      >
        {children}
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  title,
  value,
}: {
  icon: any;
  title: string;
  value: string;
}) {
  return (
    <div
      className="
bg-[#071A18]
border
border-[#164E45]
rounded-2xl
p-6
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

      <p
        className="
text-gray-400
text-sm
"
      >
        {title}
      </p>

      <h3
        className="
text-xl
font-bold
mt-2
"
      >
        {value}
      </h3>
    </div>
  );
}
