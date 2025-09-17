import React from 'react';
import { Upload, Star } from 'lucide-react';
import { Product, PersonalizationData } from '../types/product';

interface ProductOptionsFormProps {
  product: Product;
  personalizationData: PersonalizationData;
  onPersonalizationChange: (data: PersonalizationData) => void;
  onAddToCart: () => void;
  onBuyNow: () => void;
}

const ProductOptionsForm: React.FC<ProductOptionsFormProps> = ({
  product,
  personalizationData,
  onPersonalizationChange,
  onAddToCart,
  onBuyNow,
}) => {
  const handleInputChange = (field: keyof PersonalizationData, value: any) => {
    onPersonalizationChange({
      ...personalizationData,
      [field]: value,
    });
  };

  return (
    <div className="space-y-6">
      {/* Product Title and Rating */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
        <div className="flex items-center space-x-2 mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">({product.reviewCount} reviews)</span>
        </div>
      </div>

      {/* Price */}
      <div className="space-y-2">
        <div className="flex items-center space-x-3">
          <span className="text-3xl font-bold text-gray-900">₹{product.salePrice}</span>
          <span className="text-xl text-gray-500 line-through">₹{product.originalPrice}</span>
          <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">
            {Math.round(((product.originalPrice - product.salePrice) / product.originalPrice) * 100)}% OFF
          </span>
        </div>
        <p className="text-green-600 font-medium">Free shipping on orders over ₹500</p>
      </div>

      {/* Personalization Form */}
      <div className="space-y-4 border-t pt-6">
        <h3 className="text-lg font-semibold text-gray-900">Personalize Your Book</h3>
        
        {/* Child Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Child's Name *
          </label>
          <input
            type="text"
            value={personalizationData.childName}
            onChange={(e) => handleInputChange('childName', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter child's name"
          />
        </div>

        {/* Child Age */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Child's Age
          </label>
          <select
            value={personalizationData.childAge}
            onChange={(e) => handleInputChange('childAge', parseInt(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            {[...Array(13)].map((_, i) => (
              <option key={i + 3} value={i + 3}>
                {i + 3} years old
              </option>
            ))}
          </select>
        </div>

        {/* Child Gender */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Gender
          </label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="boy"
                checked={personalizationData.childGender === 'boy'}
                onChange={(e) => handleInputChange('childGender', e.target.value)}
                className="mr-2"
              />
              Boy
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="girl"
                checked={personalizationData.childGender === 'girl'}
                onChange={(e) => handleInputChange('childGender', e.target.value)}
                className="mr-2"
              />
              Girl
            </label>
          </div>
        </div>

        {/* Photo Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Upload Child's Photo
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-600">
              Click to upload or drag and drop
            </p>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleInputChange('uploadedPhoto', e.target.files?.[0] || null)}
            />
          </div>
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Quantity
          </label>
          <select
            value={personalizationData.quantity}
            onChange={(e) => handleInputChange('quantity', parseInt(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            {[...Array(10)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3 pt-6">
        <button
          onClick={onBuyNow}
          className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
        >
          Buy Now
        </button>
        <button
          onClick={onAddToCart}
          className="w-full bg-white text-purple-600 border-2 border-purple-600 py-3 px-6 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductOptionsForm;