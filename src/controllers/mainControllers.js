// CONTROLADOR
// Puente entre la vista y el modelo.
// mainControllers es un objeto con distintos metodos donde cada uno te lleva a un archivo del proyecto.
// Los metodos manejan los pedidos.



const path = require ("path")
let mainControllers = {
    index: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/home.html"))
    },
    about: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/about.html"))
    }
}




module.exports = mainControllers;