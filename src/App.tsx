import React, { useState } from 'react';
import Header from './components/Header';
import ProductGallery from './components/ProductGallery';
import ProductOptionsForm from './components/ProductOptionsForm';
import Reviews from './components/Reviews';
import RelatedProducts from './components/RelatedProducts';
import FeaturesList from './components/FeaturesList';
import Footer from './components/Footer';
import { mockProduct, mockRelatedProducts, mockReviews } from './data/mockData';
import { PersonalizationData } from './types/product';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [personalizationData, setPersonalizationData] = useState<PersonalizationData>({
    childName: '',
    childAge: 5,
    childGender: 'boy',
    bookTemplate: 'template1',
    uploadedPhoto: null,
    quantity: 1
  });

  const handleAddToCart = () => {
    setCartCount(prev => prev + personalizationData.quantity);
    // Here you would typically send the order to your backend
    console.log('Adding to cart:', { product: mockProduct, personalization: personalizationData });
  };

  const handleBuyNow = () => {
    // Here you would typically redirect to checkout
    console.log('Buy now:', { product: mockProduct, personalization: personalizationData });
  };

  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Promo Bar */}
      <div className="promo-bar animate-bounce-gentle">
        <p className="text-sm font-semibold">
          🔥 Limited Time: Get Flat ₹250 OFF + Free Shipping Today Only!
        </p>
      </div>

      {/* Header */}
      <Header cartCount={cartCount} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 animate-fade-in">
          {/* Product Gallery */}
          <div className="lg:col-span-7 animate-slide-up">
            <ProductGallery product={mockProduct} />
          </div>

          {/* Product Options */}
          <div className="lg:col-span-5 animate-slide-up" style={{animationDelay: '0.1s'}}>
            <ProductOptionsForm
              product={mockProduct}
              personalizationData={personalizationData}
              onPersonalizationChange={setPersonalizationData}
              onAddToCart={handleAddToCart}
              onBuyNow={handleBuyNow}
            />
          </div>
        </div>

        {/* Product Summary */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-full font-bold text-lg mb-8 shadow-large animate-bounce-gentle">
              💰 Pay Online & Save ₹250 Today!
            </div>
            <h2 className="section-title text-gradient mb-6">
              Inspire Your Child's Future Dreams
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-gray-700 text-lg leading-relaxed">
              <p className="text-xl font-medium text-gray-800">
                Transform your child into the hero of their own career adventure with our beautifully personalized book.
            </p>
              <p>
                Watch their eyes light up as they discover exciting career possibilities - from astronaut to entrepreneur, 
                doctor to artist. Each page features stunning illustrations with your child as the main character, 
                building confidence and sparking curiosity about their bright future.
              </p>
              <p>
                Simply upload their photo and personalize their journey. We'll create a premium, one-of-a-kind 
                keepsake that celebrates their unlimited potential. Perfect for birthdays, achievements, or 
                showing them how truly special they are.
              </p>
            </div>
          </div>

          {/* Photo Guidance */}
          <div className="card p-8 max-w-3xl mx-auto shadow-glow">
            <h3 className="font-display font-bold text-xl text-gray-900 mb-6 text-center">
              📸 Photo Guidelines for Best Results
            </h3>
            <div className="flex justify-center items-center space-x-12 mb-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex items-center justify-center mb-3 shadow-medium">
                  <span className="text-white text-3xl font-bold">✓</span>
                </div>
                <p className="text-lg text-green-600 font-bold mb-1">Perfect!</p>
                <p className="text-sm text-gray-600">Smiling + Front-facing</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-red-500 rounded-2xl flex items-center justify-center mb-3 shadow-medium">
                  <span className="text-white text-3xl font-bold">✗</span>
                </div>
                <p className="text-lg text-red-600 font-bold mb-1">Avoid</p>
                <p className="text-sm text-gray-600">Sunglasses, Side view, Blurry</p>
              </div>
            </div>
            <p className="text-center text-gray-600 bg-blue-50 p-4 rounded-xl">
              💡 <strong>Pro Tip:</strong> Use a clear, well-lit photo where your child is looking directly at the camera with a natural smile for the best personalization results.
            </p>
          </div>
        </div>

        {/* Features List */}
        <FeaturesList />

        {/* Related Products */}
        <RelatedProducts products={mockRelatedProducts} />

        {/* Reviews */}
        <Reviews reviews={mockReviews} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Cart Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 glass-effect border-t border-white/30 p-4 z-50 shadow-large">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xl font-bold text-gray-900">
              ₹{mockProduct.salePrice}
              <span className="text-base text-gray-500 line-through ml-2">
                ₹{mockProduct.originalPrice}
              </span>
            </p>
          </div>
          <button
            onClick={handleAddToCart}
            className="btn-primary"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;