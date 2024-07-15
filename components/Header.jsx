import Image from 'next/image'
import logo from '@/public/white-transparent.svg'
import cityBackground from '@/public/guangzhou-downtown-min.jpg'

export default function Header() {

    // Create an array for the links since they are the exact same format
    const linkArr = ['About', 'Experience', 'Projects', 'Contact']

    return (
        <header id='header' className='lg:h-80 md:h-47 ls-phone:h-90 h-40'>
            <div className='absolute -z-10 opacity-75'>
                <Image
                    src={cityBackground}
                    className='lg:h-80 w-screen md:h-47 ls-phone:h-90 h-40'
                    alt='background image of a downtown city'
                    priority={true}
                />
            </div>
            <nav className='flex justify-between md:pt-2'>
                <div className='lg:ml-32 md:ml-16'>
                    <Image
                    src={logo}
                    width={50}
                    height={50}
                    alt='Austin Furlongs Logo'
                    />
                </div>
                <div id='links' className='hidden md:flex self-center lg:mr-32 md:mr-16'>
                    {linkArr.map(link => (
                    <div key={link} className='md:mr-8 hover:text-alt-color-cyan md:pt-3'>
                        <a href={`#${link.toLowerCase()}`}>{link}</a>
                    </div>
                    ))}
                    <a 
                        className='bg-call-to-action-color rounded-md w-20 text-center py-1 mt-2 px-3 font-medium'
                        href='/resume.pdf'
                        target='_blank'
                        rel="noopener noreferrer"
                        aria-label='Austin Furlong resume. Opens a new tab.'
                    >
                        Resume
                    </a>
                </div>
                <div className='md:hidden mt-4 mr-4'>
                    <a 
                        className='bg-call-to-action-color rounded-md w-20 text-center py-1 mt-2 px-3 font-medium'
                        href='/resume.pdf'
                        target='_blank'
                        rel="noopener noreferrer"
                        aria-label='Austin Furlong resume. Opens a new tab.'
                    >
                        Resume
                    </a>
                </div>
            </nav>
            <section className='md:h-3/4 text-center flex flex-col justify-center md:ml-28 md:mr-16 lg:w-screen my-10 lg:mx-0 w-3/4 mx-auto'>
                <h2 className='md:text-3xl md:font-medium mb-2 tracking-wide text-sm'>Hi There!</h2>
                <h1 className='md:text-4xl md:font-bold mb-2 tracking-wide text-xl font-semibold'>I'm Austin Furlong</h1>
                <p>
                    <span className='lg:block md:inline md:font-medium text-sm'>A Full-Stack Developer passionate about creating fast, responsive, and accessible applications. </span>
                     Learn more about me below and the projects I have worked on to see what I'm about.
                </p>
            </section>
        </header>
    )
}