const axios = require('axios');

const getServices = async () => {
    try {
        const response = await axios.get('http://localhost:3000/services');
        return response.data;
    } catch (error) {
        console.error("Error fetching services:", error);
        return null;
    }
};

module.exports = {
    getServices
};
