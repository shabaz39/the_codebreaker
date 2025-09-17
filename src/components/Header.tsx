import React from 'react';
import { ShoppingCart, Menu } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
}

const Header: React.FC<HeaderProps> = ({ cartCount }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-purple-600">
              The Dream Career Book
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">
              Products
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">
              Contact
            </a>
          </nav>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-700 hover:text-purple-600 transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button className="md:hidden p-2 text-gray-700 hover:text-purple-600 transition-colors">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;