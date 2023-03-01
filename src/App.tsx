import { Route, Routes } from 'react-router-dom'

import Layout from './components/Layout'
import Home from './pages/Home'
import Monitoring from './pages/Monitoring'
import Professionnal from './pages/Professional'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='monitoring' element={<Monitoring />} />
        <Route path='professional' element={<Professionnal />} />
      </Route>
    </Routes>
  )
}

export default App
