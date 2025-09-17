import React, { useState } from 'react';
import { Product } from '../types/product';

interface ProductGalleryProps {
  product: Product;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-6">
      {/* Main Image */}
      <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl overflow-hidden shadow-large hover:shadow-glow transition-all duration-300 group">
        <img
          src={product.images[selectedImage]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Thumbnail Images */}
      <div className="flex space-x-4 overflow-x-auto pb-2">
        {product.images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`flex-shrink-0 w-24 h-24 rounded-2xl overflow-hidden border-3 transition-all duration-200 hover-lift ${
              selectedImage === index 
                ? 'border-primary-500 shadow-medium ring-4 ring-primary-100' 
                : 'border-gray-200 hover:border-primary-300'
            }`}
          >
            <img
              src={image}
              alt={`${product.name} ${index + 1}`}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-200"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;