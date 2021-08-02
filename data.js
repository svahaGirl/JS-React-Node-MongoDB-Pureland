//this is after connect to MongoDB

//backend/data.js

import bcrypt from 'bcryptjs';

const data = {
  users:[
    {
    name:'Basir',
    email:'admin@example.com',
    password: bcrypt.hashSync('1234', 8),
    isAdmin: true,
    },

    {
      name: 'Doe',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  
  ],

  products: [
    {      
      name: 'Mile Buddha 1',
      category: 'Buddha Statue',
      image: '/images/mile1.jpg',
      price: 590,
      countInStock: 10,
      brand: 'Asian',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
  
    {      
      name: 'Incense 1',
      category: 'Incense',
      image: '/images/i2.jpg',
      price: 89,
      countInStock: 20,
      brand: 'Lily',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
    
    },
    
    {    
      name: 'Thai Buddha 1',
      category: 'Buddha Statue',
      image: '/images/m6.jpg',
      price: 680,
      countInStock: 12,
      brand: 'Thai',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {      
      name: 'Incense 2',
      category: 'Incense',
      image: '/images/i5.jpg',
      price: 78,
      countInStock: 120,
      brand: 'Fine Forest',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {      
      name: 'Thai Buddha 2',
      category: 'Buddha Statue',
      image: '/images/b3.jpg',
      price: 1189,
      countInStock: 30,
      brand: 'Lily',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
      
    },
    
    {    
      name: 'Budda Statue 3',
      category: 'Buddha Statue',
      image: '/images/m2.jpg',
      price: 89,
      countInStock: 19,
      brand: 'Lily',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
    },
    {    
      name: 'Incense 3',
      category: 'Incense',
      image: '/images/i3.jpg',
      price: 58,
      countInStock: 20,
      brand: 'Aroma',
      rating: 4.8,
      numReviews: 17,
      description: 'high quality product',
    },
    {      
      name: 'Souvenir 1',
      category: 'Souvenir',
      image: '/images/m7.jpg',
      price: 65,
      countInStock: 20,
      brand: 'Stream',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {      
      name: 'Lotus 1',
      category: 'Lotus',
      image: '/images/lot7.jpg',
      price: 89,
      countInStock: 0,
      brand: 'Lily',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
    },
  ],
};
export default data;
