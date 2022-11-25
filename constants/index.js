import { Babcock, Dstg } from "../public";
import { faReact, faPython, faJava, faSquareJs } from '@fortawesome/free-brands-svg-icons'

export const jobs = [
    {
        id: 'job-1',
        Logo: Babcock,
        company: 'Babcock',
        position: 'Mechanical Engineer',
        date: '2020-2022',
    },
    {
        id: 'job-2',
        Logo: Dstg,
        company: 'Defence Science and Technology Group (DSTG)',
        position: 'Small Satellites Experimentation Team Placement',
        date: '2017-2019',
    },
];

export const languages = [
    {
        id: 'l-1',
        title: 'Python',
        icon: faPython,
    },
    {
        id: 'l-2',
        title: 'React',
        icon: faReact,
    },
    {
        id: 'l-3',
        title: 'Javascript',
        icon: faSquareJs,
    },
    {
        id: 'l-4',
        title: 'Java',
        icon: faJava,
    },
];