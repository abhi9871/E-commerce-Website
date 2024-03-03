import axios from "axios";
const API_BASE_URL = 'https://fakestoreapi.com';

export const fetchCategories = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/products/categories`);
      return response.data;
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
};

export const fetchSpecificCategory = async (categoryName) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/products/category/${categoryName}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};