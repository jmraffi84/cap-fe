import axios from 'axios';

const BASE_URL = `https://cap-be-0mzm.onrender.com/`;

export const getAllSideImages = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/side-banner-all`);
        console.log('API Response:', response);

        // Log the entire response data
        console.log('Response Data:', response.data);

        // Access the images array within the data property
        const imagesData = response.data;

        // Check if images array exists
        if (imagesData && imagesData.images && Array.isArray(imagesData.images)) {
            return imagesData.images;
        } else {
            console.error('No images data found in the API response.');
            throw new Error('No images data found.');
        }
    } catch (error) {
        console.error('Error fetching images:', error);
        throw error;
    }
};
