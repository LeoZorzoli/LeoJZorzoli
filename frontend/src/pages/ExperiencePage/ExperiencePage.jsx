import './ExperiencePage.css'
import workList from '../../utilities/workList'

const Work = ({experience}) => {
    return (
        <div>
            <p className="experience-title">{experience.name}, <span className="experience-date">{experience.date}</span></p>
            <ul className="experience">
                {experience.work.map(work => <li key={work}>{work}</li>)}
            </ul>
        </div>
    )
}

const ExperiencePage = () => {
    return (
        <div>
            <p className="experience-info">Although I still have no experience in any company, I am always doing work as a freelancer and my own projects.</p>
            {workList.map(work => 
                <Work key={work.id} experience={work} />    
            )}
        </div>
    )
}

export default ExperiencePage
