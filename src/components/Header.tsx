import { Search, Heart, ShoppingBag, User } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">
              <span className="text-text-primary">Luxe</span>
              <span className="text-primary">Scents</span>
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-primary font-medium">Home</a>
            <a href="#" className="text-text-secondary hover:text-text-primary transition-colors">Shop</a>
            <a href="#" className="text-text-secondary hover:text-text-primary transition-colors">Deals</a>
            <a href="#" className="text-text-secondary hover:text-text-primary transition-colors">Subscription</a>
          </nav>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search fragrances..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Heart className="h-5 w-5 text-text-secondary" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
              <ShoppingBag className="h-5 w-5 text-text-secondary" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <User className="h-5 w-5 text-text-secondary" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
