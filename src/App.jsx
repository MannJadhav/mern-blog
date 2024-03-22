import { BrowserRouter,Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/about'
import SignIn from './pages/signin'
import SignUp from './pages/signup'
import Dashboard from "./pages/Dashboard" 
import Projects from './pages/pojects'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Home />}/>
      <Route  path="/about" element={<About/> }/>
      <Route  path="/Sign-In" element={<SignIn /> }/>
      <Route path="/Sign-Up" element={<SignUp/>} />
      <Route path="dashboard" element={<Dashboard/>} />
      <Route path="projects" element={<Projects />} />
  
    </Routes>

    </BrowserRouter>
  )
}
