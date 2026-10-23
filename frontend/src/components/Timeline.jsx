// Grilla de fecha + texto que comparten Inicio (Trayectoria) y CV.
const Timeline = ({ children }) => <ol className="timeline">{children}</ol>

export const TimelineRow = ({ date, label, children }) => (
  <li className="timeline-row">
    <span className="timeline-date">{date}</span>
    <div className="timeline-body">
      {label && <span className="timeline-label">{label}</span>}
      {children}
    </div>
  </li>
)

export default Timeline
