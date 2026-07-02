import SEO from './components/SEO'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Pilates from './components/Pilates'
import SocialProof from './components/SocialProof'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <SEO />
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Pilates />
        <SocialProof />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
