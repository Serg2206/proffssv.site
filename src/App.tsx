import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import MolecularPage from './pages/MolecularPage'
import BiomarkersPage from './pages/BiomarkersPage'
import PlaceholderPage from './pages/PlaceholderPage'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/molecular" element={<MolecularPage />} />
          <Route path="/biomarkers" element={<BiomarkersPage />} />
          <Route path="/reference" element={<PlaceholderPage title="Справочник" />} />
          <Route path="/diagnostics" element={<PlaceholderPage title="Маски острого живота" />} />
          <Route path="/algorithms" element={<PlaceholderPage title="Алгоритмы и чек-листы" />} />
          <Route path="/tests" element={<PlaceholderPage title="Тесты для самопроверки" />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
