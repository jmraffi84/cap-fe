import axios from 'axios';

const BASE_URL = `https://cap-be-0mzm.onrender.com`;

export const postContactForm = async (formData) => {
    try {
        const response = await axios.post(`${BASE_URL}/submitForm`, formData);
        return response.data; // Return the response data if needed

        // Check if data array exists

    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
