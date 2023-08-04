import Home from './pages/Home'
import Scrimba from './pages/Scrimba'
import Frontendmentor from './pages/Frontendmentor'
import NotFound from './pages/NotFound'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scrimba" element={<Scrimba />} />
        <Route path="/frontendmentor" element={<Frontendmentor />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>

  )
}
