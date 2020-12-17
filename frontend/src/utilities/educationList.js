import diploma from './icons/diploma.png'
import graduated from './icons/graduated.png'

import cs50w from './diplome/CS50W.pdf'
import cs50x from './diplome/CS50X.pdf'
import google from './diplome/Google.pdf'
import fullstack from './diplome/Fullstack.png'

const EducationList = [
    {
        id: 1,
        school: "University of Helsinki",
        title: "Full Stack Open",
        date: "Nov 2020 - Present",
        img : diploma,
        dip: fullstack,
        learned: [
            "React, Redux, Hooks, Router.",
            "Node.js, Express.js, MongoDB.",
            "Currently learning GraphQL, TypeScript, React Native."
        ]
    },
    {
        id: 2,
        school: "Google for education",
        title: "IT Support",
        date: "Aug 2020 - Oct 2020",
        img : diploma,
        dip: google,
        learned: [
            "Customer service, problem solving",
            "Protocols and network model, cloud computing.",
            "Windows operating system, Linux command line.",
            "Systems administration, debugging."
        ]
    },
    {
        id: 3,
        school: "HarvadX",
        title: "CS50's Web Programming with Python and JavaScript",
        date: "Jun 2020 - Aug 2020",
        img : diploma,
        dip: cs50w,
        learned: [
            "User experience, APIs, Database design.",
            "Cloud services, scalability, security.",
            "Git, Python / Flask / Django, Javascript."
        ]
    },
    {
        id: 4,
        school: "HarvadX",
        title: "CS50: Introduction to Computer Science",
        date: "Apr 2020 - Jun 2020",
        img : diploma,
        dip: cs50x,
        learned: [
            "Abstraction, Algorithms, Data structures.",
            "Encapsulation, Resource Management, Security.",
            "C, Python, SQL."
        ]
    },
    {
        id: 5,
        school: "Instituto Comercial Crespo",
        title: "Bachellor in Economy",
        date: "2007 - 2012",
        img : graduated,
        learned: [
            "Participation in math olympics."
        ]
    }
]

export default EducationList