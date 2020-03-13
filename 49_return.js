// 2. Ejercicios con return

// 1 - Crear una función que se llame obtenerNombre y retorne tu nombre como string
// Probarlo con la siguiente linea de codigo
// console.log("Mi nombre es " + obtenerNombre());

let nombreUsuario = prompt("Decime tu nombre")

const obtenerNombre = (nombre) => {
    return nombre
};

console.log("Mi nombre es " + obtenerNombre(nombre))

// 2 - En el mismo código, crear una función llamada obtenerSaludo, que retorne un valor string
// Dentro de esta función obtener tu nombre utilizando la función obtenerNombre(), y guardarlo en una variable.
// Retornar un texto de la forma: ¡Hola, ${nombre}!, donde nombre tiene que ser el valor guardado en la variable de arriba.
// Ejecutar la función obtenerSaludo y mostrar el resultado por consola.
// console.log(obtenerSaludo());

const obtenerSaludo = () => {
    let nombre = obtenerNombre();
    return `Hola, ${nombre}!`
};

console.log(obtenerSaludo())

// 3 - Crear la funcion obtenerResto(a, b) que retorne el resto de dividir a y b.

const obtenerResto = (a, b) => {
    return a % b
};

console.log(obtenerResto(1, 2))

// 4 - Crear la funcion esPar(num) que retorne true si el numero es par, y false si es impar.
// Dentro de esa funcion debe utilizarse lo retornado por la funcion obtenerResto creada en 2.3.
const esPar = num => {
let resto = obtenerResto(num, 2)
    if (resto === 0) {
        return true;
    }
    else {
        return false;
    }
};

console.log(esPar(2))

// 5 - Declarar la siguiente variable:
// const listaDeNumeros = [ 43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32 ];
// Crear una funcion llamada encontrarImpares() que recorre el array recibido por parametros
// y retorna un nuevo array compuesto solo por los numeros impares.
// Para saber si un número es par debe utilizarse la funcion esPar() creada en 2.4.

const listaDeNumeros = [ 43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32 ];

const encontrarImpares = arr => {
    let numerosImpares = [];
    for (let i = 0; i < arr.length; i++) {
        if (!esPar(arr[i])) {
            numerosImpares.push(arr[i])
        }
    }
    return numerosImpares
};

console.log(encontrarImpares(listaDeNumeros));

// 6 - Crear la funcion exclamar() que recibe un parametro string y retorna ese mismo string con signos
// de exclamacion al principio y al final.

const exclamar = (string) => {
    return "¡" + string + "!"
};

let string = "QUE RETORNE POR FAVOR"
console.log(exclamar(string));

// 7 - Crear la funcion unirNombre() que recibe dos parametros (nombre y apellido), y debe retornarlos
// en un solo string, separados por un espacio
// // ('Ada', 'Lovelace') => 'Ada Lovelace'

const unirNombre = (nombre, apellido) => {
    return nombre + " " + apellido
};

console.log(unirNombre("Ada", "Lovelace"));

// 8 - Crear la funcion saludar() que reciba un nombre y un apellido.
// La funcion saludar() debe concatenar ambos parametros usando la funcion unirNombre()
// Luego debe darle signos de exclamacion usando la funcion exclamar()
// Y finalmente retornar el resultado.

const saludar = (nombre, apellido) => {
    let nombreUnido = unirNombre(nombre, apellido);
    let resultado = exclamar(nombreUnido)
    return resultado;
};

console.log(saludar("Gabriela", "Peralta"));