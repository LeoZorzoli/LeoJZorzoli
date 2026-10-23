import { useI18n } from '../i18n/LanguageContext'

// Grilla de fecha + texto que comparten Inicio (Trayectoria), Experiencia y Formación.
const Timeline = ({ children }) => <ol className="timeline">{children}</ol>

// Los archivos de datos usan 'hoy' para lo que sigue vigente; se muestra traducido.
export const useDateLabel = () => {
  const { t } = useI18n()
  return value => (value === 'hoy' ? t('date.present') : value)
}

// `end` convierte la fecha en un rango: inicio arriba, fin debajo.
export const TimelineRow = ({ date, end, label, children }) => {
  const dateLabel = useDateLabel()

  return (
    <li className="timeline-row">
      <span className="timeline-date">
        {date}
        {end && <span className="timeline-end">— {dateLabel(end)}</span>}
      </span>
      <div className="timeline-body">
        {label && <span className="timeline-label">{label}</span>}
        {children}
      </div>
    </li>
  )
}

export default Timeline
