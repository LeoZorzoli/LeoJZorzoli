// Fila de Experiencia / Formación: título, organización, metadatos, descripción y logros.
// Las fechas no van acá: las muestra la columna izquierda de la grilla, salvo en los `roles`
// de una empresa, que llevan su propio rango encima del título.
const Highlights = ({ items }) => (
  <ul className="entry-highlights">
    {items.map(item => <li key={item}>{item}</li>)}
  </ul>
)

const Entry = ({ entry, children }) => (
  <>
    <p className="entry-title">
      {entry.title}
      {entry.org && <span className="entry-org"> · {entry.org}</span>}
    </p>
    {(entry.meta || children) && <p className="entry-meta">{entry.meta}{children}</p>}
    {entry.description && <p className="entry-description">{entry.description}</p>}
    {entry.highlights && <Highlights items={entry.highlights} />}
    {entry.roles && (
      <ol className="entry-roles">
        {entry.roles.map(role => (
          <li key={role.team} className="entry-role">
            <p className="entry-meta">{role.date} — {role.end}</p>
            <p className="entry-title">
              {role.title}
              <span className="entry-org"> · {role.team}</span>
            </p>
            {role.description && <p className="entry-description">{role.description}</p>}
            {role.highlights && <Highlights items={role.highlights} />}
          </li>
        ))}
      </ol>
    )}
  </>
)

export default Entry
