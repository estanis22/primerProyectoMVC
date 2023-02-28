const express = require ("express");
const router = express.Router();
const mainControllers = require ("../controllers/mainControllers")

// Implemento el controlador, el primer parametro es la ruta que ingreso el cliente (path) 
// y el segundo es el metodo definido en mainControllers.js que queremos ejecutar.
router.get("/", mainControllers.index)
router.get("/about", mainControllers.about)





module.exports = router