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
    <div className="card p-8 space-y-8 shadow-glow">
      {/* Product Title and Rating */}
      <div>
        <h1 className="text-4xl font-display font-bold text-gray-900 mb-4 leading-tight">{product.name}</h1>
        <div className="flex items-center space-x-3 mb-6">
          <div className="rating-stars">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-6 h-6 ${
                  i < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-base text-gray-600 font-medium">({product.reviewCount} reviews)</span>
        </div>
      </div>

      {/* Price */}
      <div className="space-y-3 bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-2xl">
        <div className="flex items-center space-x-4 flex-wrap">
          <span className="text-4xl font-bold text-gray-900">₹{product.salePrice}</span>
          <span className="text-2xl text-gray-500 line-through">₹{product.originalPrice}</span>
          <span className="price-tag">
            {Math.round(((product.originalPrice - product.salePrice) / product.originalPrice) * 100)}% OFF
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-2xl">🚚</span>
          <p className="text-green-600 font-semibold text-lg">FREE Shipping + ₹250 Online Discount!</p>
        </div>
      </div>

      {/* Personalization Form */}
      <div className="space-y-6 border-t border-gray-100 pt-8">
        <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">✨ Personalize Your Book</h3>
        
        {/* Child Name */}
        <div>
          <label className="block text-base font-semibold text-gray-700 mb-2">
            Child's Name *
          </label>
          <input
            type="text"
            value={personalizationData.childName}
            onChange={(e) => handleInputChange('childName', e.target.value)}
            className="input-field text-lg"
            placeholder="Enter child's name"
          />
        </div>

        {/* Child Age */}
        <div>
          <label className="block text-base font-semibold text-gray-700 mb-2">
            Child's Age
          </label>
          <select
            value={personalizationData.childAge}
            onChange={(e) => handleInputChange('childAge', parseInt(e.target.value))}
            className="input-field text-lg"
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
          <label className="block text-base font-semibold text-gray-700 mb-2">
            Gender
          </label>
          <div className="flex space-x-6">
            <label className="flex items-center cursor-pointer bg-gray-50 px-6 py-3 rounded-xl hover:bg-primary-50 transition-colors">
              <input
                type="radio"
                value="boy"
                checked={personalizationData.childGender === 'boy'}
                onChange={(e) => handleInputChange('childGender', e.target.value)}
                className="mr-3 w-5 h-5 text-primary-600"
              />
              <span className="font-medium">👦 Boy</span>
            </label>
            <label className="flex items-center cursor-pointer bg-gray-50 px-6 py-3 rounded-xl hover:bg-primary-50 transition-colors">
              <input
                type="radio"
                value="girl"
                checked={personalizationData.childGender === 'girl'}
                onChange={(e) => handleInputChange('childGender', e.target.value)}
                className="mr-3 w-5 h-5 text-primary-600"
              />
              <span className="font-medium">👧 Girl</span>
            </label>
          </div>
        </div>

        {/* Photo Upload */}
        <div>
          <label className="block text-base font-semibold text-gray-700 mb-2">
            Upload Child's Photo
          </label>
          <div className="border-2 border-dashed border-primary-200 rounded-2xl p-8 text-center bg-primary-25 hover:bg-primary-50 transition-colors cursor-pointer group">
            <Upload className="w-12 h-12 text-primary-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <p className="text-lg text-gray-700 font-medium mb-2">
              📸 Click to upload or drag and drop
            </p>
            <p className="text-sm text-gray-500">
              JPG, PNG or JPEG (Max 5MB)
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
          <label className="block text-base font-semibold text-gray-700 mb-2">
            Quantity
          </label>
          <select
            value={personalizationData.quantity}
            onChange={(e) => handleInputChange('quantity', parseInt(e.target.value))}
            className="input-field text-lg"
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
      <div className="space-y-4 pt-8">
        <button
          onClick={onBuyNow}
          className="w-full btn-primary text-xl py-4"
        >
          🚀 Buy Now - Get ₹250 OFF
        </button>
        <button
          onClick={onAddToCart}
          className="w-full btn-secondary text-xl py-4"
        >
          🛒 Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductOptionsForm;