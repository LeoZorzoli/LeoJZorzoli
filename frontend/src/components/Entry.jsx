import { useI18n } from '../i18n/LanguageContext'
import { useDateLabel } from './Timeline'

// Fila de Experiencia / Formación: título, organización, metadatos, descripción y logros.
// Las fechas no van acá: las muestra la columna izquierda de la grilla, salvo en los `roles`
// de una empresa, que llevan su propio rango encima del título.
const Highlights = ({ items }) => {
  const { tx } = useI18n()

  return (
    <ul className="entry-highlights">
      {items.map((item, i) => <li key={i}>{tx(item)}</li>)}
    </ul>
  )
}

const Entry = ({ entry, children }) => {
  const { tx } = useI18n()
  const dateLabel = useDateLabel()

  return (
    <>
      <p className="entry-title">
        {tx(entry.title)}
        {entry.org && <span className="entry-org"> · {tx(entry.org)}</span>}
      </p>
      {(entry.meta || children) && <p className="entry-meta">{tx(entry.meta)}{children}</p>}
      {entry.description && <p className="entry-description">{tx(entry.description)}</p>}
      {entry.highlights && <Highlights items={entry.highlights} />}
      {entry.roles && (
        <ol className="entry-roles">
          {entry.roles.map(role => (
            <li key={role.team} className="entry-role">
              <p className="entry-meta">{role.date} — {dateLabel(role.end)}</p>
              <p className="entry-title">
                {tx(role.title)}
                <span className="entry-org"> · {role.team}</span>
              </p>
              {role.description && <p className="entry-description">{tx(role.description)}</p>}
              {role.highlights && <Highlights items={role.highlights} />}
            </li>
          ))}
        </ol>
      )}
    </>
  )
}

export default Entry
