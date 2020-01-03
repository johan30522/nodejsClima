const axios = require('axios');
const getClima = async(lat, long) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=23f6ee7900da4c12ef3096d9ea16e84e&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}