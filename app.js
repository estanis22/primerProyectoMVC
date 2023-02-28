const express = require ("express");
// guardo las rutas definidas en main.js en la constante.
const mainRoutes = require ("./src/routes/main");
const app = express ();


app.use(express.static("public"))



app.listen (3000, () => {
    console.log("Servidor funcionando")
});

// El primer parametro es la ruta, el segundo la constante definida arriba.
app.use("/", mainRoutes);

// sudo npm install --location=global nodemon -- instalar nodemon.
// npm i ejs -- instalar ejs.
// editar en package.json el start "nodemon app.js"