// Fila de Experiencia / Formación: título, organización, período y descripción.
const Entry = ({ entry, children }) => (
  <>
    <p className="entry-title">
      {entry.title}
      {entry.org && <span className="entry-org"> · {entry.org}</span>}
    </p>
    <p className="entry-meta">
      {entry.period}
      {children}
    </p>
    {entry.description && <p className="entry-description">{entry.description}</p>}
  </>
)

export default Entry
