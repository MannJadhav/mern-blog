/*React Routing*/ 

import { BrowserRouter,Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/about'
import SignIn from './pages/signin'
import SignUp from './pages/signup'
import Dashboard from "./pages/Dashboard" 
import Projects from './pages/projects'
import Header from './components/Header'

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/signIn" element={<SignIn/>}/>
      <Route path="/signUp" element={<SignUp/>}/>
      <Route path="Dashboard" element={<Dashboard/>}/>
      <Route path="projects" element={<Projects/>}/>
  
    </Routes>

    </BrowserRouter>
  )
}
