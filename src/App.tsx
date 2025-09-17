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
    <div className="min-h-screen bg-white">
      {/* Promo Bar */}
      <div className="bg-lavender-light text-center py-2 px-4">
        <p className="text-sm text-gray-700">
          Due to High Demand: We're Limiting Orders — Grab Yours Today!
        </p>
      </div>

      {/* Header */}
      <Header cartCount={cartCount} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Product Gallery */}
          <div className="lg:col-span-7">
            <ProductGallery product={mockProduct} />
          </div>

          {/* Product Options */}
          <div className="lg:col-span-5">
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
        <div className="mb-16">
          <div className="text-center mb-8">
            <p className="text-red-600 font-semibold text-lg mb-4">
              Pay Online and Get Flat Rs. 250 OFF Today
            </p>
            <div className="max-w-4xl mx-auto space-y-4 text-gray-700">
              <p className="text-lg">
                Give your child the gift of imagination and inspiration with The Dream Career Book - 
                a personalized journey through exciting career possibilities that will spark their curiosity 
                and build confidence for the future.
              </p>
              <p>
                Each book features your child as the hero of their own career adventure, with beautiful 
                illustrations and engaging activities that make learning about different professions fun 
                and memorable. From doctor to astronaut, teacher to entrepreneur - watch your child's 
                eyes light up as they see themselves in these important roles.
              </p>
              <p>
                Simply upload your child's photo, choose their preferences, and we'll create a one-of-a-kind 
                keepsake that celebrates their potential and dreams. Perfect for birthdays, holidays, or 
                any time you want to show your child how special they are.
              </p>
            </div>
          </div>

          {/* Photo Guidance */}
          <div className="bg-gray-50 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="font-semibold text-gray-900 mb-4 text-center">
              SEND A SMILING & FRONT FACING PHOTO
            </h3>
            <div className="flex justify-center items-center space-x-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
                  <span className="text-green-600 text-2xl">✓</span>
                </div>
                <p className="text-sm text-green-600 font-medium">Good</p>
                <p className="text-xs text-gray-600">Smile + front face</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-2">
                  <span className="text-red-600 text-2xl">✗</span>
                </div>
                <p className="text-sm text-red-600 font-medium">Avoid</p>
                <p className="text-xs text-gray-600">Sunglasses, profile, blurry</p>
              </div>
            </div>
            <p className="text-center text-sm text-gray-600 mt-4">
              Avoid blurry, profile, sunglasses — upload front-facing, well-lit photo.
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
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg font-bold text-gray-900">
              ₹{mockProduct.salePrice}
              <span className="text-sm text-gray-500 line-through ml-2">
                ₹{mockProduct.originalPrice}
              </span>
            </p>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-purple-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;