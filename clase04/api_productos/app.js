const express = require('express');
const app = express();
const routerProductos = require('./routes/productos');

app.use(express.json()); //para el body parameters

app.get('/', (req, res) => {
    res.send('Hola, Mundo');
});



app.use('/productos', routerProductos);

const port = 3000;

app.listen(port, () => {
    console.log(`Servidor Express.js en funcionamiento en el puerto ${port}`);  //no me muestra el 3000
});