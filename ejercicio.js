console.log('Hola mundo');
// Mi primera funcion
// Declaro la funcion mas no la ejercuto
const calcularEdad = (nombre, edad) => {
    const mayoriaEdad = 18;
    debugger
    let mensaje = nombre + ' tiene ' + edad;
    console.log(mensaje);
    if ( edad > mayoriaEdad ) {
        mensaje = mensaje + ' años es mayor de edad';
    } else {
        mensaje = mensaje + ' tiene ' + edad + ' años es menor de edad';
    }
    console.log(mensaje);
}
// variables const let
// const son variables que no van sufrir cambios
// let o pueden sufrir cambios

// invocacion de function
calcularEdad('Luis Antonio', 37);
// calcularEdad('Pedro', 10);
// calcularEdad('Juan', 5);
// calcularEdad('Claudia', 40);