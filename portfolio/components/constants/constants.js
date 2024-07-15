import jsLogo from '@/public/javascript.svg'
import nodeLogo from '@/public/node-js.svg'
import javaLogo from '@/public/java.svg'
import mongoLogo from '@/public/mongodb.svg'
import mysqlLogo from '@/public/mysql.svg'
import githubLogo from '@/public/github.svg'
import figmaLogo from '@/public/figma.svg'
import vscodeLogo from '@/public/vscode.svg'
import reactLogo from '@/public/react.svg'
import postmanLogo from '@/public/postman.svg'
import dockerLogo from '@/public/docker.svg'
import awsLogo from '@/public/aws.svg'
import adventureTimeProjectPhoto from '@/public/adventure-time-min.png'
import bookAppProjectPhoto from '@/public/book-app-min.png'
import foodTruckSitePhoto from '@/public/food-truck-site-min.png'

export const experienceList = [
    {
        companyName: 'Genesis10 Consultant - Northwestern Mutual',
        yearStarted: 'May 2023',
        role: 'Software Engineer',
        description: 'Handled JavaScript backend work related to wealth APIs. These APIs were used by NM financial advisors and customers to build out their financial packages and track their performance.'
    },
    {
        companyName: 'Genesis10 Consultant - KeyBank',
        yearStarted: 'January 2022',
        role: 'Software Engineer',
        description: 'Handled backend work related to money movement APIs. Helped build mobile deposit microservice in Java with SpringBoot.'
    },
    {
        companyName: 'Genesis10',
        yearStarted: 'October 2021',
        role: 'Software Engineer Trainee',
        description: 'Participated in Genesis 10s Dev10 program where they train people in full-stack development. Excelled in weekly projects and tests.'
    }
]

export const technologies = [
    {
        name: 'JavaScript',
        icon: jsLogo
    },
    {
        name: 'NodeJS',
        icon: nodeLogo
    },
    {
        name: 'Java',
        icon: javaLogo
    },
    {
        name: 'MongoDB',
        icon: mongoLogo
    },
    {
        name: 'MySQL',
        icon: mysqlLogo
    },
    {
        name: 'Github',
        icon: githubLogo
    },
    {
        name: 'Figma',
        icon: figmaLogo
    },
    {
        name: 'VsCode',
        icon: vscodeLogo
    },
    {
        name: 'React',
        icon: reactLogo
    },
    {
        name: 'Postman',
        icon: postmanLogo
    },
    {
        name: 'Docker',
        icon: dockerLogo
    },
    {
        name: 'AWS',
        icon: awsLogo
    }
]

export const projects = [
    {
        projectName: 'Adventure Time',
        projectPhoto: adventureTimeProjectPhoto,
        projectDescription: 'Adventure Time is an app that allows you to plan road trips across the US with your friends. You can add stops, add a packing list, add photos you have taken on the trip and comment on your friends photos. You can review your trips and look at past trips you have taken.',
        projectTechnologiesUsed: ['Java', 'React', 'SpringBoot', 'MySQL'],
        projectDemoLink: 'https://loom.com/share/folder/2c9016f8ba7d4cd7bf86b29d99ef0c16',
        projectRepoLink: 'https://github.com/alfurlon/roadtrip-app'
    },
    {
        projectName: 'Food Truck Site',
        projectPhoto: foodTruckSitePhoto,
        projectDescription: 'A sample food truck site that I designed and developed',
        projectTechnologiesUsed: ['Figma', 'JavaScript', 'AstroJs'],
        projectDemoLink: '',
        projectRepoLink: 'https://github.com/alfurlon/food-truck-site'
    },
    {
        projectName: 'The Virtual Bookshelf',
        projectPhoto: bookAppProjectPhoto,
        projectDescription: 'The Virtual Bookshelf is an app that allows you to store books that you own in your own gallery. You can add books, and see your whole library in one place.',
        projectTechnologiesUsed: ['JavaScript', 'NodeJS', 'MongoDB', 'React'],
        projectDemoLink: '',
        projectRepoLink: 'https://github.com/alfurlon/book-app'
    }
]