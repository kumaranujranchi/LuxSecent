import { Clock, Star, Gift, ArrowRight } from 'lucide-react'

const Collections = () => {
  const collections = [
    {
      icon: Clock,
      title: 'Limited-Time Deals',
      description: 'Up to 40% off selected fragrances.',
      color: 'text-red-500',
      bgColor: 'bg-red-50'
    },
    {
      icon: Star,
      title: 'New Arrivals',
      description: 'Discover the latest luxury scents.',
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      icon: Gift,
      title: 'Gift Ideas',
      description: 'Perfect presents for every occasion.',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Explore Our Collections
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            From exclusive deals to the latest arrivals, find exactly what you're looking for.
          </p>
        </div>

        {/* Collection Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div key={index} className="card hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg ${collection.bgColor}`}>
                  <collection.icon className={`h-6 w-6 ${collection.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    {collection.title}
                  </h3>
                  <p className="text-text-secondary mb-4">
                    {collection.description}
                  </p>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors group"
                  >
                    Explore
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Collections
