import { Kanit } from "next/font/google";
import GitHubCalendar from "react-github-calendar";
import { GitHub, Visibility } from "@mui/icons-material";

const league1 = Kanit({ subsets: ["latin"], weight: "400" });


export default function Projects() {

  const year = new Date().getFullYear();

  return (
    <section id="projects" className={`${league1.className} p-2 md:p-6 mt-8 lg:mt-6 `}>
      <div className="text-slate-400 text-justify">
        <p className="text-slate-100 text-2xl font-semibold">Projects</p>
      </div>

      <div className="mt-6">
        {work.map((item, index) => (
          <div
            key={index}
            className="md:px-5 py-4 border-t border-slate-700 pb-4 mb-4 hover:md:scale-105 transition-transform duration-300 ease-in-out hover:md:border-teal-500/40 bg-transparent hover:md:bg-slate-600/20 hover:md:rounded-lg"
          >
            <div className="">
              <p className="text-slate-100 font-semibold text-lg flex justify-between">{item.title} <span className="flex gap-4"><a href={item.gitlink} target="_blank" rel="noopener noreferrer"><GitHub/></a><a href={item.wlink} target="_blank" rel="noopener noreferrer"><Visibility/></a></span></p>
              <p className="text-slate-400 text-sm mb-4 text-justify mt-2">{item.description}</p>

              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="calendar lg:hidden block mt-20">
          <GitHubCalendar username="Nitesh-04" colorScheme="dark" year={year}/>
      </div>
    </section>
  );
}


const work = [
    {
      title: "Track-Hub",
      gitlink : "https://github.com/Nitesh-04/track-hub",
      wlink: "https://track-hub.vercel.app/",
      description:
        "Developed a dynamic application addressing the common challenge of managing internship applications using Next.js, Prisma ORM, CockroachDB, Redis. Integrated user input features to log application statuses, coding rounds, interview dates, and company-specific details.  Implemented a cron job to send their next round reminders via email.",
      skills: ["NextJS", "TypeScript","PrismaORM", "CockroachDB","Cron Jobs"],
    },
    {
      title: "Blog-Sphere",
      gitlink: "https://github.com/Nitesh-04/BlogSphere",
      wlink: "https://blog-sphere-nk.vercel.app/",
      description:
        "Engineered a seamless, user-friendly interface for the blog platform using Next.js, TypeScript, TailwindCSS. Integrated Clerk for authentication and Prisma ORM with Supabase for backend and Redis for caching.",
      skills: ["NextJS", "Typescript", "TailwindCSS","PrismaORM","Redis","Supabase", "Clerk"],
    },
    {
        title: "ExamCooker",
        gitlink : "https://github.com/ACM-VIT/ExamCooker-2024",
        wlink: "https://examcooker.acmvit.in/",
        description:
          "Led the development of ExamCooker as the project maintainer, an exam preparation platform utilising TypeScript, Next.js, Redis, GCB managing a 5,500-line codebase, and supporting a user base of 3,500+ students. Reviewed and merged pull requests, driving high code quality and ensuring timely delivery within agile workflows.",
        skills: ["NextJS", "PrismaORM", "Typescript", "Redis", "Google Cloud"],
      },
];