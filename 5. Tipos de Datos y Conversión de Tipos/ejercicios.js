// Ejercicio 5.1: Declara una variable 'cadenaNumero' y asígnale el valor "123". Convierte esta cadena a un número y almacénalo en una nueva variable 'numeroConvertido'. Muestra ambos valores en la consola.
// Ejercicio 5.2: Declara una variable 'booleano' y asígnale el valor 'true'. Convierte este valor a una cadena y almacénalo en una nueva variable 'cadenaBooleano'. Muestra ambos valores en la consola.

const cadenaNumero = "123"
console.log(typeof (cadenaNumero))

const numeroConvertido = Number(cadenaNumero)
console.log(typeof (numeroConvertido))

console.log(cadenaNumero, numeroConvertido)

const booleano = true
console.log(typeof (booleano))

const cadenaBooleano = String(booleano)
console.log(typeof (cadenaBooleano))

console.log(booleano, cadenaBooleano)
