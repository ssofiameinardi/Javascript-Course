const express = require('express');
const routerProductos = express.Router();

routerProductos.put('/', (req, res) => {
    res.send('Producto modificado correctamente');
}); 

routerProductos.get('/:id', (req,res) => {
    const productoId = req.params.id;                                                           //path parameters
    res.send(`Informacion del producto con id "${productoId}"`);
});

routerProductos.post('/', (req, res) => {
    const producto = req.body                                                                   //body parameters
    // Aquí puedes guardar el nuevo producto en la base de datos o realizar otras operaciones relacionadas con el producto
    res.send(`Guardar nuevo producto: "${JSON.stringify(producto)}"`);
});

/*routerProductos.get('/', (req, res) => {
    const authToken = req.header('Authorization');                                              //header parameters
    // Aquí puedes usar el authToken para autenticar al usuario o realizar validaciones adicionales 
    res.send(`Token de autorización: ${authToken}`);
});*/

routerProductos.get('/', (req, res) => {
    const productos = [
        { id: 1, nombre: 'Tablet'},
        { id: 2, nombre: 'PC'}
        ];
        res.json(productos);
});

module.exports = routerProductos;