import axios from 'axios';
import { Product } from './productModel';

export const fetchProducts = async () => {
  try {
    const response = await axios.get('/api/product');
    return response.data.map(product => new Product(product));
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}