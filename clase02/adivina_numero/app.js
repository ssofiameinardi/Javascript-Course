const readlineSync = require('readline-sync');
const {generarNumeroAleatorio, verificarAdivinanza} = require('./adivinanza');

const obtenerNumeroUsuario = () => {
    return readlineSync.question('\nIngrese un numero = ');
}

const juegoAdivinanza = () => {
    const numeroSecreto = generarNumeroAleatorio();
    let numeroAdivinado = 0;

    console.log('¡Bienvenido a Adivina el Numero Secreto!');
    console.log('Intenta adivinar un numero del 1 al 100! \n');

    while(numeroSecreto !== numeroAdivinado){
        numeroAdivinado = obtenerNumeroUsuario();
        verificarAdivinanza(numeroSecreto, numeroAdivinado);
    }
}

juegoAdivinanza();