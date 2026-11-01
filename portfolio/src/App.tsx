import { useEffect, useState } from 'react'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import SkillsExperiencePage from './pages/SkillsExperiencePage'
import LearningPage from './pages/LearningPage'
import ContactPage from './pages/ContactPage'

function getPath() {
  return window.location.hash.slice(1) || '/'
}

export default function App() {
  const [path, setPath] = useState(getPath)

  useEffect(() => {
    function handleHashChange() {
      setPath(getPath())
      window.scrollTo(0, 0)
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  let page

  switch (path) {
    case '/':
      page = <HomePage />
      break
    case '/projects':
      page = <ProjectsPage />
      break
    case '/skills-experience':
      page = <SkillsExperiencePage />
      break
    case '/learning':
      page = <LearningPage />
      break
    case '/contact':
      page = <ContactPage />
      break
    default:
      page = (
        <div className="page-container">
          <div className="story-preview">
            <h1 className="mb-4 text-3xl font-bold">Page not found</h1>
            <a href="#/" className="retro-button">
              Back to Home
            </a>
          </div>
        </div>
      )
  }

  return <Layout>{page}</Layout>
}