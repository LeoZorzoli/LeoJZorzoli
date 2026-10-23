import { Link } from 'react-router'

const NotFound = () => (
  <>
    <title>Página no encontrada · Leonel Zorzoli</title>

    <h1 className="page-title">Página no encontrada</h1>
    <p className="lead">
      Esta dirección no existe. <Link to="/">Volver al inicio</Link>.
    </p>
  </>
)

export default NotFound
