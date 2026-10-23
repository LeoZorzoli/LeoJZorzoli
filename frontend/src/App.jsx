import { Routes, Route } from 'react-router'

import HomePage from './pages/Home/HomePage'
import BioPage from './pages/BioPage/BioPage'
import EducationPage from './pages/EducationPage/EducationPage'
import ExperiencePage from './pages/ExperiencePage/ExperiencePage'
import ProjectPage from './pages/ProjectsPage/ProjectsPage'
import TechnologiesPage from './pages/TechnologiesPage/TechnologiesPage'
import PublicationsPage from './pages/PublicationsPage/PublicationsPage'

import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <div className="layout">
        <Sidebar />
        <div className="content">
          <main id="contenido">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/sobre-mi" element={<BioPage />} />
              <Route path="/proyectos" element={<ProjectPage />} />
              <Route path="/cv" element={<ExperiencePage />} />
              <Route path="/bio" element={<BioPage />} />
              <Route path="/education" element={<EducationPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/projects" element={<ProjectPage />} />
              <Route path="/technologies" element={<TechnologiesPage />} />
              <Route path="/publications" element={<PublicationsPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
