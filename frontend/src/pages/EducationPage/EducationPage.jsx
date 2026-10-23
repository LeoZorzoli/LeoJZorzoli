import './EducationPage.css'
import educationList from '../../utilities/educationList';

const Education = ({ edu }) => {
    return (
        <div className="edu-row">
            <a href={edu.dip} target="_blank" rel="noreferrer"><img src={edu.img} width="36" alt="" /></a>
            <div className="education">
                <p className="edu-title">{edu.title}</p>
                <p className="edu-school">{edu.school}, <span className="edu-date">{edu.date}</span></p>
            </div>
        </div>
    )
}

const EducationPage = () => {
    return (
        <div>
            <p className="education-info">I am a person who currently studies online on his own but wants to start a career in software engineering in the future.</p>
            {
                educationList.map(education => <Education key={education.id} edu={education} /> )
            }
        </div>
    )
}

export default EducationPage;
