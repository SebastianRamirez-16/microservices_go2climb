const axios = require('axios');

const getTourists = async () => {
    try {
        const response = await axios.get('http://localhost:3000/tourists');
        return response.data;
    } catch (error) {
        console.error("Error fetching tourists:", error);
        return null;
    }
};

module.exports = {
    getTourists
};
