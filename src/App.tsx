import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Welcome from './pages/Welcome'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Register from './pages/Register'
import Home from './pages/Home'
import ProblemSet from './pages/ProblemSet'
import Contact from './pages/Contact'
import AboutUs from './pages/AboutUs'
import { useAuthContext } from './services/providers/AuthContext'

function App() {

  const { auth } = useAuthContext()
  const showNavBar: boolean = [''].includes(window.location.pathname)

  return (
    <BrowserRouter>
      {!showNavBar && <Navbar />}
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/home' element={auth.user ? <Home /> : <Navigate to={'/login'} />} />
        <Route path='/login' element={!auth.user ? <Login /> : <Navigate to={'/home'} />} />
        <Route path='/register' element={!auth.user ? <Register /> : <Navigate to={'/home'} />} />
        <Route path='/contact' element={auth.user ? <Contact /> : <Navigate to={'/login'} />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/problem-set/:problemSetId/:exerciceId' element={<ProblemSet />} />
      </Routes>
      <Footer />
    </BrowserRouter >
  )
}

export default App
