const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'direccion de la ciudad para el clima',
        demand: true
    }
}).argv;




const getInfo = async(direccion) => {

    try {
        const resp = await lugar.getLugarLatLong(direccion);
        const cords = await clima.getClima(resp.lat, resp.lon);
        return `El clima de ${resp.direccion} es de ${cords}`
    } catch (error) {
        return `No se pudo determinar el clima para  ${direccion} `
    }

}

getInfo(argv.direccion)
    .then(resp => { console.log(resp); })
    .catch(err => {
        console.log("error al consultar");
    });