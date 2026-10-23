// Grilla de fecha + texto que comparten Inicio (Trayectoria), Experiencia y Formación.
const Timeline = ({ children }) => <ol className="timeline">{children}</ol>

// `end` convierte la fecha en un rango: inicio arriba, fin debajo.
export const TimelineRow = ({ date, end, label, children }) => (
  <li className="timeline-row">
    <span className="timeline-date">
      {date}
      {end && <span className="timeline-end">— {end}</span>}
    </span>
    <div className="timeline-body">
      {label && <span className="timeline-label">{label}</span>}
      {children}
    </div>
  </li>
)

export default Timeline
