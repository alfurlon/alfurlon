import { experienceList } from "./constants/constants"

export default function Experience() {

    return (
        <section id="experience" className="md:mt-16">
            <h2 className="md:text-3xl md:font-bold md:mb-16 text-center mb-8 text-xl font-semibold mt-8">Experience</h2>
            <div className="flex flex-col">
                {experienceList.map((exp, i) => (
                    <div key={i} className="grid lg:grid-cols-2 md:grid-cols-1 justify-items-center md:mb-20 md:w-screen w-3/4 mx-auto mb-4">
                        <div className="justify-self-start md:ml-52 md:mb-6 mb-2">
                            <h3 className="md:text-xl md:font-semibold text-sm">{exp.companyName}</h3>
                        </div>
                        <div>
                            <h4 className="md:text-lg font-medium md:mb-2 text-xs mb-1">{exp.role}</h4>
                            <p className="md:text-base font-extralight text-slate-500 md:mb-2 text-xs mb-1">{exp.yearStarted}</p>
                            <p className="md:w-96 md:text-base text-xs mb-1">{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}