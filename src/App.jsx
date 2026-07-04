import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import CaseStudy from './components/CaseStudy'
import Process from './components/Process'
import About from './components/About'
import Industries from './components/Industries'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <CaseStudy />
      <Process />
      <About />
      <Industries />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
