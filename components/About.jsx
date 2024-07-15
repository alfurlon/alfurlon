import Image from "next/image"
import me from '@/public/circle-cropped.png'
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function About() {
    return (
        <section id="about" className="flex flex-col w-screen content-center lg:h-60 md:h-55 ls-phone:h-full justify-center text-center lg:mt-32 md:mt-16 mt-8">
            <h2 className="md:text-3xl md:font-bold md:mb-12 mb-8 text-xl font-semibold">About Me</h2>
            <Image
                src={me}
                className="self-center md:mb-6 md:h-250 md:w-250 h-150 w-150 mb-4"
                alt="picture of austin"
            />
            <p className="lg:w-80 w-3/4 self-center md:text-xl font-light tracking-wide md:mb-6 text-sm mb-3">As a software engineer, I am eager to apply my knowledge and skills to contribute to the development of high-quality software solutions. I am committed to continuously learning and growing in this field. I am a quick learner with strong problem-solving skills, and I am excited to work collaboratively with a team to deliver outstanding results. Find out more about me below.</p>
            <div className="flex self-center md:text-5xl mb-8 text-3xl">
                <a href="https://www.linkedin.com/in/austin-furlong-5b7189174/" aria-label="Link to LinkedIn profile for Austin Furlong" target='_blank' className="md:mr-4 hover:text-call-to-action-color mr-2"><AiFillLinkedin /></a>
                <a href="https://github.com/alfurlon" aria-label="Link to GitHub profile for Austin Furlong" target='_blank' className="hover:text-call-to-action-color"><AiFillGithub /></a>
            </div>
        </section>
    )
}