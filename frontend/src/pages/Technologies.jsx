import MaskIcon from '../components/MaskIcon'
import technologies from '../data/technologies'

const Technologies = () => (
  <>
    <title>Tecnologías · Leonel J Zorzoli</title>

    <h1 className="page-title">Tecnologías</h1>
    {technologies.map(({ group, items }) => (
      <section key={group} className="tech-group" aria-labelledby={`tech-${group}`}>
        <h2 id={`tech-${group}`} className="section-title">{group}</h2>
        <ul className="tech-grid">
          {items.map(item => (
            <li key={item.name} className="tech-item">
              <MaskIcon src={item.icon} size={40} />
              <span className="tech-name">{item.name}</span>
            </li>
          ))}
        </ul>
      </section>
    ))}
  </>
)

export default Technologies
