import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import PlayerView from './pages/PlayerView'
import ClubView from './pages/ClubView'
import AgentView from './pages/AgentView'
import TechnologyView from './pages/TechnologyView'
import DashboardView from './pages/DashboardView'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <div className="app-container w-100">
      <Navbar />
      <main className="w-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/player" element={<PlayerView />} />
          <Route path="/club" element={<ClubView />} />
          <Route path="/agent" element={<AgentView />} />
          <Route path="/technology" element={<TechnologyView />} />
          <Route path="/dashboard" element={<DashboardView />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
