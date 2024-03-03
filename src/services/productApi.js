import axios from "axios";
const API_BASE_URL = 'https://fakestoreapi.com';

export const fetchProductDetail = async (productId) => {
    try {
       const response = await axios.get(`${API_BASE_URL}/products/${productId}`);
       return response.data;
    } catch (error) {
        console.log(error);
    }
}