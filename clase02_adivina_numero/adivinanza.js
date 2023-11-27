const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 100) + 1;
}

const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {
    if(numeroSecreto == numeroAdivinado){
        console.log('¡Felicitaciones, has adivinado el numero!');
    }else if(numeroSecreto < numeroAdivinado){
        console.log('El numero secreto es menor. ¡Sigue intentando!');
    }else{
        console.log('El numero secreto es mayor. ¡Sigue intentando!');
    }
}

module.exports = {generarNumeroAleatorio, verificarAdivinanza}