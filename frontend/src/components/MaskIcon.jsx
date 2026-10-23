// Ícono PNG usado como máscara: toma el color de `currentColor`, así sigue al tema.
const MaskIcon = ({ src, size = 32, className = '' }) => (
  <span
    className={`mask-icon ${className}`.trim()}
    // Comillas: Vite puede entregar los SVG chicos como data URI con espacios.
    style={{ '--icon': `url("${src}")`, '--size': `${size}px` }}
    aria-hidden="true"
  />
)

export default MaskIcon
