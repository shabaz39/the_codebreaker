export interface Product {
  id: string;
  name: string;
  description: string;
  originalPrice: number;
  salePrice: number;
  images: string[];
  rating: number;
  reviewCount: number;
  features: string[];
}

export interface PersonalizationData {
  childName: string;
  childAge: number;
  childGender: 'boy' | 'girl';
  bookTemplate: string;
  uploadedPhoto: File | null;
  quantity: number;
}

export interface Review {
  id: string;
  customerName: string;
  rating: number;
  comment: string;
  date: string;
}