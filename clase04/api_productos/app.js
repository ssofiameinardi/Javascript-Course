const express = require('express');
const app = express();
const routeProductos = require("./routes/productos");
const errorHandler = require("./middlewares/errorHandler");

app.use(express.json()); //para el body parameters

app.use('/productos', routeProductos)

app.use(errorHandler);


const port = 3000;

app.listen(port, () => {
    console.log(`Servidor Express.js en funcionamiento en el puerto ${port}`);  //no me muestra el 3000
});