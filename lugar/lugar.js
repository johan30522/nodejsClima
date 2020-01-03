const axios = require('axios');
const getLugarLatLong = async(dir) => {



    const encodedUrl = encodeURI(dir);


    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        timeout: 1000,
        headers: { 'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com', 'x-rapidapi-key': '9620985c0dmsh664d3d8e0a966f7p1a1de5jsn25074b013e92' }
    });
    const resp = await instance.get();
    if (resp.data.Results.lenght === 0) {
        throw new Error(`no hay resultados para ${direccion}`)
    }

    const data = resp.data.Results[0];

    const direccion = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return {
        direccion,
        lat,
        lon
    }

}
module.exports = {
    getLugarLatLong

}