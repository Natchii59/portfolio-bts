import { Navigate, Route, Routes } from 'react-router-dom'

import Layout from './components/Layout'
import {
  AlternanceC2B,
  BTSSIO,
  Experiences,
  StagePicwicToys,
  Competences,
  Home,
  Monitoring,
  Projects,
  MarieTeam,
  Restorat
} from './pages'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='competences' element={<Competences />} />
        <Route path='monitoring' element={<Monitoring />} />
        <Route path='experiences'>
          <Route index element={<Experiences />} />
          <Route path='alternance-c2b' element={<AlternanceC2B />} />
          <Route path='stage-picwictoys' element={<StagePicwicToys />} />
          <Route path='bts-sio' element={<BTSSIO />} />
        </Route>
        <Route path='projects'>
          <Route index element={<Projects />} />
          <Route path='marieteam' element={<MarieTeam />} />
          <Route path='restorat' element={<Restorat />} />
        </Route>

        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </Layout>
  )
}

export default App
