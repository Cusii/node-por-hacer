const fs = require('fs');
const { deflateSync } = require('zlib');

let listaPorHacer = [];
const guardarDB = () => {
    let data = JSON.stringify(listaPorHacer);
    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) {
            throw new Error('No se pudo cargar los datos', err)

        }
    })


}
const cargarDB = () => {
    try {
        listaPorHacer = require('../db/data.json');
    } catch (err) {
        listaPorHacer = [];
    }
}
const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false

    };

    listaPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const getListado = () => {
    cargarDB()
    return listaPorHacer;

}

const actualizarDB = (descripcion, completado = True) => {
    cargarDB()
    let index = listaPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })
    if (index >= 0) {
        listaPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;

    }

}
const borrar = (descripcion) => {
    cargarDB()
    let nuevoListado = listaPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion
    })
    if (listaPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listaPorHacer = nuevoListado;
        guardarDB();
        return true
    }
    /***
    let index = listaPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })
    if (index >= 0) {
        listaPorHacer.splice([index], 1);
        guardarDB()
        return true;

    } else {
        return false
    }

 */
}


module.exports = {
    crear,
    getListado,
    actualizarDB,
    borrar
}