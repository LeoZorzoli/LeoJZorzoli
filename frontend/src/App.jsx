import { Routes, Route } from 'react-router'

import HomePage from './pages/Home/HomePage'
import BioPage from './pages/BioPage/BioPage'
import EducationPage from './pages/EducationPage/EducationPage'
import ExperiencePage from './pages/ExperiencePage/ExperiencePage'
import ProjectPage from './pages/ProjectsPage/ProjectsPage'
import TechnologiesPage from './pages/TechnologiesPage/TechnologiesPage'
import PublicationsPage from './pages/PublicationsPage/PublicationsPage'

import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <div className="layout">
      <Navbar />
      <main className="principal">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bio" element={<BioPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/technologies" element={<TechnologiesPage />} />
          <Route path="/publications" element={<PublicationsPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
