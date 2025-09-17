import { Product, Review } from '../types/product';

export const mockProduct: Product = {
  id: '1',
  name: 'The Dream Career Book - Personalized Edition',
  description: 'A personalized book that takes your child on an exciting journey through different career possibilities.',
  originalPrice: 1299,
  salePrice: 899,
  images: [
    'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=800'
  ],
  rating: 5,
  reviewCount: 127,
  features: [
    'Personalized with child\'s name and photo',
    'High-quality printing and binding',
    'Educational and inspiring content',
    'Suitable for ages 3-15',
    'Free shipping included'
  ]
};

export const mockRelatedProducts: Product[] = [
  {
    id: '2',
    name: 'Adventure Story Book',
    description: 'An exciting adventure story personalized for your child.',
    originalPrice: 999,
    salePrice: 699,
    images: ['https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=400'],
    rating: 4,
    reviewCount: 89,
    features: []
  },
  {
    id: '3',
    name: 'Fairy Tale Collection',
    description: 'Classic fairy tales with your child as the main character.',
    originalPrice: 1199,
    salePrice: 799,
    images: ['https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=400'],
    rating: 5,
    reviewCount: 156,
    features: []
  },
  {
    id: '4',
    name: 'Science Explorer Book',
    description: 'Explore the wonders of science with your child as the scientist.',
    originalPrice: 1099,
    salePrice: 749,
    images: ['https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400'],
    rating: 4,
    reviewCount: 73,
    features: []
  }
];

export const mockReviews: Review[] = [
  {
    id: '1',
    customerName: 'Priya Sharma',
    rating: 5,
    comment: 'My daughter absolutely loves her personalized book! The quality is excellent and she reads it every night. Highly recommended!',
    date: '2024-01-15'
  },
  {
    id: '2',
    customerName: 'Rajesh Kumar',
    rating: 5,
    comment: 'Amazing concept! My son was so excited to see himself in the book. Great way to inspire children about different careers.',
    date: '2024-01-10'
  },
  {
    id: '3',
    customerName: 'Anita Patel',
    rating: 4,
    comment: 'Beautiful book with great illustrations. My child loves reading about different professions. Fast delivery too!',
    date: '2024-01-05'
  }
];