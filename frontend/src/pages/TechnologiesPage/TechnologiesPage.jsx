import technologiesList from '../../utilities/technologiesList'
import './TechnologiesPage.css'

const Technology = ({technology}) => {
    return (
        <div className="technology">
            <p className="technology-name">{technology.name}</p>
            <img src={technology.src} height="60" alt="" title={technology.tooltip} />
        </div>
    )
}

const TecnologiesPage = () => {
    return (
        <div className="technologies">
            {technologiesList.map(tec => 
                <Technology key={tec.id} technology={tec}/>
            )}
        </div>
    )
}

export default TecnologiesPage
