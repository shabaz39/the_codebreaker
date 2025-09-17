import React from 'react';
import { ShoppingCart, Menu } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
}

const Header: React.FC<HeaderProps> = ({ cartCount }) => {
  return (
    <header className="glass-effect shadow-medium border-b border-white/20 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-3xl font-display font-bold text-gradient">
              The Dream Career Book
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-primary-600 transition-colors font-medium hover-lift">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-primary-600 transition-colors font-medium hover-lift">
              Products
            </a>
            <a href="#" className="text-gray-700 hover:text-primary-600 transition-colors font-medium hover-lift">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-primary-600 transition-colors font-medium hover-lift">
              Contact
            </a>
          </nav>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button className="relative p-3 text-gray-700 hover:text-primary-600 transition-all duration-200 hover:bg-primary-50 rounded-xl">
              <ShoppingCart className="w-7 h-7" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-medium animate-bounce-gentle">
                  {cartCount}
                </span>
              )}
            </button>
            <button className="md:hidden p-3 text-gray-700 hover:text-primary-600 transition-all duration-200 hover:bg-primary-50 rounded-xl">
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;