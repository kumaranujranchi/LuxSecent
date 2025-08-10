import Header from './components/Header'
import Hero from './components/Hero'
import Collections from './components/Collections'
import FeaturedFragrances from './components/FeaturedFragrances'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Collections />
        <FeaturedFragrances />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default App
