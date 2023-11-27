const readLineSync = require('readline-sync');

const {mostrarListaEstudiantes} = require('./listaEstudiantes');

const registrarEstudiantes = () => {
    console.log("Iniciando registro de estudiantes");
    
    const cantidadEstudiantes = readLineSync.question("Ingrese la cantidad de estudiantes que seran registrados: ")
    console.log("Cantidad de estudiantes a registrar: " + cantidadEstudiantes)
    
    let estudiantes = [];
    
    for(let i = 0; i < cantidadEstudiantes; i++){
        const nombre = readLineSync.question("Ingrese nombre del estudiante " + i + ": ")
        
        const edad = readLineSync.question("Ingrese edad de "+ nombre +" : ")
        
        const estudiante = {
            nombre: nombre,
            edad: edad
        }
        
        estudiantes.push(estudiante);
    }
    
    mostrarListaEstudiantes(estudiantes);    
}

registrarEstudiantes();

