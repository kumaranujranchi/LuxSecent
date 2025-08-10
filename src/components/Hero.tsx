import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-text-primary">
                Discover Your{' '}
                <span className="text-primary">Signature Scent</span>
              </h1>
              <p className="text-xl text-text-secondary leading-relaxed">
                Explore our curated collection of luxury fragrances from the world's most prestigious perfume houses.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex items-center justify-center group">
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary">
                View Deals
              </button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="bg-primary/20 rounded-2xl p-8">
              <div className="relative">
                {/* Placeholder for perfume bottle image */}
                <div className="w-full h-96 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-48 bg-gradient-to-br from-orange-300 to-orange-400 rounded-lg mx-auto relative">
                      <div className="absolute top-2 left-2 right-2 bottom-2 bg-white rounded-md flex items-center justify-center">
                        <span className="text-xs font-medium text-text-primary text-center">
                          N°5 CHANEL<br/>EAU DE PARFUM
                        </span>
                      </div>
                    </div>
                    <p className="text-text-secondary text-sm">Premium Fragrance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
