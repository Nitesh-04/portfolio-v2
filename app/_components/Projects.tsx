import { Kanit } from "next/font/google";
import GitHubCalendar from "react-github-calendar";
import { GitHub, Visibility } from "@mui/icons-material";

const league1 = Kanit({ subsets: ["latin"], weight: "400" });


export default function Projects() {
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
              <div className="text-slate-400 text-sm mb-4 text-justify mt-2">
                <ul className="list-disc list-inside mt-5">
                {item.description.split("\n").map((line, index) => (
                    line.trim() && (
                      <li key={index} className="mb-4 md:mb-3">{line.trim()}</li>
                    )
                  ))}
                </ul>
              </div>

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
          <GitHubCalendar username="Nitesh-04" colorScheme="dark"/>
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
        "\n Built a dynamic platform for managing internship applications, cutting down management time amongst students. \nImplemented features like application logging, company specific rounds, interview dates, automated reminders, and an intuitive dashboard.",
      skills: ["NextJS", "TypeScript","PrismaORM", "CockroachDB","Cron Jobs"],
    },
    {
      title: "ExamCooker",
      gitlink : "https://github.com/ACM-VIT/ExamCooker-2024",
      wlink: "https://examcooker.acmvit.in/",
      description:
        "\nLed a team of 20 individuals in development of ExamCooker, an exam preparation platform, managing a 5,500-line codebase, and supporting a user base of 6000+ students. \nReviewed and merged pull requests, driving high code quality and ensuring timely delivery within agile workflows.",
      skills: ["NextJS", "PrismaORM", "Typescript", "Redis", "Google Cloud"],
    },
    {
      title: "Blog-Sphere",
      gitlink: "https://github.com/Nitesh-04/BlogSphere",
      wlink: "https://blog-sphere-nk.vercel.app/",
      description:
        "\nEngineered a seamless, user-friendly interface for the blog platform. \nIntegrated Clerk for authentication and Prisma ORM with Supabase for backend and Redis for caching.",
      skills: ["NextJS", "Typescript","PrismaORM","Redis","Supabase"],
    },
];