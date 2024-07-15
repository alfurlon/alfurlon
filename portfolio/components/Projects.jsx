import { projects } from "./constants/constants"
import Image from "next/image"

export default function Projects() {

    return (
        <section id="projects" className="md:mt-16 mt-8">
            <h2 className="md:text-3xl md:font-bold md:mb-16 text-center mb-8 text-xl font-semibold mt-8">Projects</h2>
            {projects.map(project => (
                <div key={project.projectName} className="grid grid-cols-1 md:justify-items-center md:w-screen md:mb-16 w-3/4 mx-auto mb-8">
                    <Image
                        src={project.projectPhoto}
                        alt={`Photo of ${project.projectName} project`}
                        className="md:w-3/4 rounded-md self-center md:mb-6 mb-2"
                    />
                    <div className="md:w-3/4 md:mb-3 mb-1">
                        <h3 className="md:text-2xl md:font-medium self-center text-lg">{project.projectName}</h3>
                    </div>
                    <p className="md:w-3/4 self-center md:mb-3 md:text-base text-sm mb-2">{project.projectDescription}</p>
                    <div className="md:w-3/4 md:mb-3">
                        {project.projectTechnologiesUsed.map(technology => (
                            <span key={technology} className="mr-2 inline-block bg-call-to-action-color rounded-full md:px-3 md:py-1 p-1 text-sm mb-1 md:text-base">{`#${technology}`}</span>
                        ))}
                    </div>
                    <div className="md:w-3/4">
                        {project.projectDemoLink && <a href={project.projectDemoLink} className="md:mr-4 hover:text-call-to-action-color underline mr-2">Demo</a>}
                        {project.projectRepoLink && <a href={project.projectRepoLink} className="hover:text-call-to-action-color underline">Repo</a>}
                    </div>
                </div>
            ))}
        </section>
    )
}