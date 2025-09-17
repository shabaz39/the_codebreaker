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
    <div className="card p-12 mb-20 bg-gradient-soft">
      <h2 className="section-title text-gradient mb-4">
        Why Choose The Dream Career Book?
      </h2>
      <p className="section-subtitle">
        Premium quality, personalized storytelling that inspires and delights children worldwide.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="text-center group hover-lift">
            <div className="feature-icon group-hover:shadow-glow transition-all duration-300">
              <feature.icon className="w-10 h-10 text-primary-600 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="font-display font-bold text-xl text-gray-900 mb-3">{feature.title}</h3>
            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesList;