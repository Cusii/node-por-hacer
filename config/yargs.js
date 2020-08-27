const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completo o pendiente la tarea'

}

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completo de las tareas', {

        descripcion,
        completado
    })
    .command('borrar', 'Borra una de las tareas', {
        descripcion

    })
    .help()
    .argv;

module.exports = {
    argv
}