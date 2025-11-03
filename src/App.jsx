import { HashRouter, Route, Routes } from 'react-router'
import './App.css'
import Home from './components/Home'
import Contact from './components/Contact'   

function App() {
  return <HashRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
  </HashRouter>  
}

export default App
