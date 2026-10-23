import { Navigate, Route, Routes } from 'react-router'

import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Education from './pages/Education'
import Technologies from './pages/Technologies'
import NotFound from './pages/NotFound'

// URLs del sitio anterior. firebase.json también las redirige con 301.
const redirects = {
  '/bio': '/sobre-mi',
  '/projects': '/proyectos',
  '/experience': '/experiencia',
  '/education': '/formacion',
  '/technologies': '/tecnologias',
  '/publications': '/',
}

function App() {
  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <div className="layout">
        <Sidebar />
        <div className="content">
          <main id="contenido">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre-mi" element={<About />} />
              <Route path="/proyectos" element={<Projects />} />
              <Route path="/experiencia" element={<Experience />} />
              <Route path="/formacion" element={<Education />} />
              <Route path="/tecnologias" element={<Technologies />} />
              {Object.entries(redirects).map(([from, to]) => (
                <Route key={from} path={from} element={<Navigate to={to} replace />} />
              ))}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
