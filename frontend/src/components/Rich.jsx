// Muestra un texto de los archivos de datos convirtiendo **así** en <strong>.
const Rich = ({ text }) =>
  text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  )

export default Rich
