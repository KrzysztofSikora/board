import axios from 'axios';

const API_URL = 'http://localhost:3002/task';

const ApiService = {
    async getAdvertisement() {
        try {
            const response = await axios.get(`${API_URL}/advertisement`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
};

export default ApiService;