import { Kanit } from "next/font/google";

const league1 = Kanit({ subsets: ["latin"], weight: "400" });


export default function Experience() {
  return (
    <section id="experience" className={`${league1.className} p-2 md:p-6 mt-16 lg:mt-0`}>
      <div className="text-slate-400 text-justify">
        <p className="text-slate-100 text-2xl font-semibold">Experience</p>
      </div>

      <div className="mt-6">
        {work.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:px-5 py-4 md:grid md:grid-cols-4 gap-4 border-t border-slate-700 pb-4 mb-4 hover:md:scale-105 transition-transform duration-300 ease-in-out hover:md:border-teal-500/40 bg-transparent hover:md:bg-slate-600/20 hover:md:rounded-lg"
          >
            <div className="text-slate-400 md:col-span-1 md:text-left md:pr-6">
              {item.date}
            </div>

            <div className="md:col-span-3">
              <p className="text-slate-100 font-semibold text-lg">{item.title}</p>
              <p className="text-teal-300 text-sm mb-2">{item.company}</p>
              <p className="text-slate-400 text-sm mb-4 text-justify">{item.description}</p>

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
    </section>
  );
}


const work = [
    {
      title: "PRISM Research Intern",
      company: "Samsung R&D Institute India",
      date: "OCT 2024 - PRESENT",
      description:
        "Working on an Enhanced Wakeup Detection System, under the PRISM program. The work-let objective is to explore spoof-proof wakeup detection techniques tailored for the Samsung voice assistant Bixby.",
      skills: ["Machine Learning", "Deep Learning"],
    },
    {
      title: "Engineering Team Intern",
      company: "Reserve Bank Innovation Hub",
      date: "JUN - JUL 2024",
      description:
        "Conducted in-depth research on various financial calculators and terms, aimed to enhance financial literacy among new users and address common issues. Undertook the development of innovative and user-centric financial calculators with visualizers using ReactJS.",
      skills: ["ReactJS", "Financial Calculations","Figma"],
    },
];