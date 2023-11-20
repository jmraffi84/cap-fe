import axios from 'axios';

const BASE_URL = `https://cap-be-0mzm.onrender.com`;

export const getAllImages = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/all`);
        console.log('API Response:', response);

        // Log the entire response data
        console.log('Response Data:', response.data);

        // Access the images array within the data property
        const images = response.data;

        // Check if images array exists
        if (images && images.images && Array.isArray(images.images)) {
            return images.images;
        } else {
            console.error('No images data found in the API response.');
            throw new Error('No images data found.');
        }
    } catch (error) {
        console.error('Error fetching images:', error);
        throw error;
    }
};
