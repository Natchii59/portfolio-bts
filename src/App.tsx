import { Navigate, Route, Routes } from 'react-router-dom'

import Layout from './components/Layout'
import Home from './pages/Home'
import Monitoring from './pages/Monitoring'
import Experiences from './pages/Experiences'
import AlternanceC2B from './pages/experiences/AlternanceC2B'
import StagePicwicToys from './pages/experiences/StagePicwicToys'
import BTSSIO from './pages/experiences/BTSSIO'
import Competences from './pages/Competences'
import Projects from './pages/Projects'
import MarieTeam from './pages/projects/Marieteam'
import Restorat from './pages/projects/Restorat'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='monitoring' element={<Monitoring />} />
        <Route path='experiences'>
          <Route index element={<Experiences />} />
          <Route path='alternance-c2b' element={<AlternanceC2B />} />
          <Route path='stage-picwictoys' element={<StagePicwicToys />} />
          <Route path='bts-sio' element={<BTSSIO />} />
        </Route>
        <Route path='competences' element={<Competences />} />
        <Route path='projects'>
          <Route index element={<Projects />} />
          <Route path='marieteam' element={<MarieTeam />} />
          <Route path='restorat' element={<Restorat />} />
        </Route>
      </Route>

      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  )
}

export default App
