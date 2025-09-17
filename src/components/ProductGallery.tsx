import React, { useState } from 'react';
import { Product } from '../types/product';

interface ProductGalleryProps {
  product: Product;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
        <img
          src={product.images[selectedImage]}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnail Images */}
      <div className="flex space-x-2 overflow-x-auto">
        {product.images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
              selectedImage === index ? 'border-purple-600' : 'border-gray-200'
            }`}
          >
            <img
              src={image}
              alt={`${product.name} ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;