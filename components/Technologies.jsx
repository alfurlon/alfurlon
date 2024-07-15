import Image from "next/image"
import { technologies } from "./constants/constants"

export default function Technologies() {

    return (
        <section id="technologies" className="flex flex-col text-center bg-main-text-color md:mt-32">
            <h2 className="md:text-3xl md:font-bold md:mb-16 text-main-bg-color md:mt-16 mb-8 text-xl font-semibold mt-8">Technologies I've Used</h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 justify-items-center grid-cols-2">
                {technologies.map((technology, i) => (
                    <div key={i} className="mb-8 rounded-md flex flex-col justify-center md:p-8 text-main-bg-color">
                        <Image
                            src={technology.icon}
                            alt={`Logo for ${technology.name}`}
                            className="md:mx-auto md:mb-2 lg:w-175 lg:h-175 md:w-150 md:h-150 h-100 w-100 mb-4"
                        />
                        {/* Have a hover animation for this to appear? */}
                        {/* <p className="text-xl font-medium">{technology.name}</p> */}
                    </div>
                ))}
            </div>
        </section>
    )
}