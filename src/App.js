import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/navbar/navbar'
import Header from './components/header/Header'
import AboutMe from './components/about/AboutMe'
import Services from './components/services/Services'

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
    </>
  )
}

export default App
