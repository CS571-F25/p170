import { HashRouter, Route, Routes } from 'react-router'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'   

function App() {
  return <HashRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/work" element={<Projects/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
  </HashRouter>  
}

export default App
