import React from 'react';
import { Shield, Truck, Heart, Award } from 'lucide-react';

const FeaturesList: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'Your data is protected with industry-standard security'
    },
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'Free delivery on orders over ₹500'
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Each book is carefully crafted for your child'
    },
    {
      icon: Award,
      title: 'Quality Guaranteed',
      description: '100% satisfaction guarantee or your money back'
    }
  ];

  return (
    <div className="bg-gray-50 rounded-lg p-8 mb-16">
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
        Why Choose The Dream Career Book?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <feature.icon className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesList;