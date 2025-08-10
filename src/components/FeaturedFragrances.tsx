import { Star, ArrowRight } from 'lucide-react'

const FeaturedFragrances = () => {
  const fragrances = [
    {
      id: 1,
      name: 'Midnight Elegance',
      rating: 4.8,
      originalPrice: 220,
      currentPrice: 189,
      badge: 'NEW',
      badgeColor: 'bg-accent text-white',
      image: 'chanel-n5'
    },
    {
      id: 2,
      name: 'Rose Garden Dreams',
      rating: 4.9,
      price: 165,
      badge: 'BESTSELLER',
      badgeColor: 'bg-purple-500 text-white',
      image: 'rose-garden'
    },
    {
      id: 3,
      name: 'Ocean Breeze',
      rating: 4.7,
      originalPrice: 180,
      currentPrice: 142,
      badge: 'SALE',
      badgeColor: 'bg-red-500 text-white',
      image: 'coco-chanel'
    },
    {
      id: 4,
      name: 'Vanilla Sunset',
      rating: 4.6,
      price: 198,
      badge: 'LIMITED',
      badgeColor: 'bg-purple-500 text-white',
      image: 'vanilla-sunset'
    }
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Featured Fragrances
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Handpicked selections from our most coveted collection.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {fragrances.map((fragrance) => (
            <div key={fragrance.id} className="card group hover:shadow-lg transition-shadow duration-300">
              {/* Badge */}
              {fragrance.badge && (
                <div className={`absolute top-4 left-4 px-2 py-1 rounded text-xs font-medium ${fragrance.badgeColor}`}>
                  {fragrance.badge}
                </div>
              )}

              {/* Product Image */}
              <div className="relative mb-4">
                <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="w-20 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mx-auto"></div>
                    <p className="text-text-secondary text-sm">{fragrance.name}</p>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-2">
                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {renderStars(fragrance.rating)}
                  <span className="text-sm text-text-secondary ml-1">
                    ({fragrance.rating})
                  </span>
                </div>

                {/* Name */}
                <h3 className="font-semibold text-text-primary group-hover:text-primary transition-colors">
                  {fragrance.name}
                </h3>

                {/* Price */}
                <div className="flex items-center space-x-2">
                  {fragrance.currentPrice && fragrance.originalPrice ? (
                    <>
                      <span className="text-lg font-bold text-text-primary">
                        ${fragrance.currentPrice}
                      </span>
                      <span className="text-sm text-text-secondary line-through">
                        ${fragrance.originalPrice}
                      </span>
                    </>
                  ) : (
                    <span className="text-lg font-bold text-text-primary">
                      ${fragrance.price}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="btn-primary flex items-center mx-auto group">
            View All Products
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedFragrances
