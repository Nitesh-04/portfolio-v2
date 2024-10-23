import {Kanit} from "next/font/google"
import Skills from "./Skills";

const league1 = Kanit({ subsets: ["latin"], weight: "400" });

export default function About() {
    return (
        <section id="about" className=" lg:scroll-mt-24 md:mb-24 lg:mb-32 lg:mt-6">
            <div className={`${league1.className} text-slate-400 text-justify`}>
                <span className="text-slate-100 block lg:hidden mb-5 text-2xl">About</span>
                Full-stack developer with a proven track record of building scalable, user-centric web applications.
                Experienced in developing innovative solutions that drive user engagement.
                <br></br><br></br>
                Proficient in modern web technologies, dedicated to writing clean, maintainable code and following best practices. Seeking opportunities to contribute to dynamic teams and create impactful digital experiences.
                <br></br><br></br>
                <Skills/>
            </div>
        </section>
    )
}