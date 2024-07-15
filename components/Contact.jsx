import { FaArrowUp } from "react-icons/fa6";

export default function Contact() {


    return (
        <section id="contact" className="bg-main-text-color md:mt-16 lg:h-55 md:h-47 ls-phone:h-screen text-main-bg-color mt-8">
            <h2 className="md:text-3xl md:font-bold md:mb-16 text-center md:pt-16 mb-8 text-xl font-semibold pt-8">Contact</h2>
            <div className="grid grid-cols-1 justify-items-center w-3/4 mx-auto">
                <div className="lg:w-1/2 mb-6 md:w-3/4">
                    <p className="text-center">Thank you for taking the time to look over my portfolio. If you want to reach me for a role or have any questions please feel free to email me or reach me at any of my links in my <a href="#about" className="underline text-call-to-action-color">about</a> section.</p>
                </div>
                <div className="md:mb-12 mb-6">
                    <a target='_blank' href="https://mail.google.com/mail/?view=cm&source=mailto&to=furlong.austin@gmail.com" className="bg-call-to-action-color rounded-md w-20 text-center py-2 px-4 text-main-text-color text-lg font-semibold">Contact Me</a>
                </div>
                <div className="mb-4">
                    <a href="#header">Go back to the top<FaArrowUp className="inline ml-1" /></a>
                </div>
            </div>
        </section>
    )
}