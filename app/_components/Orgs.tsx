import { Kanit } from "next/font/google";

const league1 = Kanit({ subsets: ["latin"], weight: "400" });


export default function Organisations() {
  return (
    <div id="experience" className={`${league1.className} p-2 md:p-6 mt-20 lg:mt-12`}>
      <div className="text-slate-400 text-justify">
        <p className="text-slate-100 text-2xl font-semibold">Organisations</p>
      </div>

      <div className="mt-6">
        {orgs.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:px-5 py-4 md:grid md:grid-cols-4 gap-4 border-t border-slate-700 pb-4 mb-4 hover:md:scale-105 transition-transform duration-300 ease-in-out hover:md:border-teal-500/40 bg-transparent hover:md:bg-slate-600/20 hover:md:rounded-lg"
          >
            <div className="text-slate-400 md:col-span-1 md:text-left md:pr-6">
              {item.date}
            </div>

            <div className="md:col-span-3">
              <p className="text-slate-100 font-semibold text-lg mb-1">{item.position}</p>
              <p className="text-teal-300 text-sm mb-2">{item.name}</p>
              <p className="text-slate-400 text-sm mb-4 text-justify">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


const orgs = [
    {
        "name": "Association for Computing Machinery (ACM-VIT)",
        "position": "Senior Core Committee",
        "date": "MAY 2023 - OCT 2024",
        "description": "Organised and executed multiple flagship events, including Cryptic Hunt, an intricate cryptic clue solving competition, and Reverse Coding, where participants reverse-engineered problem outputs. Played a pivotal role in the web domain in building event portals using Next.js and shadcn/ui, enabling seamless participation for over 700+ attendees.",
    },
    {
        "name": "Indian Society for Technical Education (ISTE-VIT)",
        "position": "Senior Core Committee Member",
        "date": "FEB 2023 - APR 2024",
        "description": "Built an email categorising application for college students. Implemented oAuth 2.0 and Gmail API integration, used to extract the needed specifics from mails. Achieved efficient sorting of college emails into multiple categories like academics, hostel, events, etc. ",
    }
]