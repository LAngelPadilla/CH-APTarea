// //User profile

// function getUserData() {
//     let Nombre = prompt("¿Cómo te llamas?");
//     let Edad = prompt("¿Que edad tienes?");
//     let pelicula = prompt("¿Cúal es tu pelicula favorita?");
    
  
   
  
//     // Display the user's data
//     console.log(`Nombre: ${Nombre}`);
//     console.log(`Edad: ${Edad}`);
//     console.log(`The film "${pelicula}" is one of my favorites.`);
    
//   }
  
//   getUserData();

function pedirDatos()
{
    let salida = "";
    let nombre = prompt("Ingrese su nombre");
    let edad = prompt("Ingrese su edad");
    let pelicula = prompt("Ingrese su pelicula favorita");
    salida = nombre + " tiene " + edad + " años y su pelicula favorita es " + pelicula;
    return salida;
}

console.log(pedirDatos());


//Highest Number

// function findHighestNumber() {
//     let numbers = [];
  
    
//     for (let i = 1; i <= 10; i++) {
//       let num = parseFloat(prompt("Enter number ${i}:"));
      
      
//       if (!isNaN(num)) {
//         numbers.push(num);
//       } else {
//         console.log("Invalid input. Please enter a valid number.");
//         i--;  
//       }
//     }
  
//     let highestNumber = Math.max(...numbers);
  
//      console.log("The highest number is: ${highestNumber}");
//   }
  
 
//   findHighestNumber();

// //Palindromo
//   function isPalindrome(input) {
  
//     let textoLimpio = input.replace(/[^A-Za-z0-9]/g, " ").toLowerCase();
  
//     let reversedInput = textoLimpio.split("").reverse().join("");
  
//     return textoLimpio === reversedInput;
//   }
  
//   let userInput = prompt("Enter a word or sentence:");
  
//   if (isPalindrome(userInput)) {
//     console.log(""${userInput}" is a palindrome!");
//   } else {
//     console.log(""${userInput}" is not a palindrome.");
//   }

//Suma resistencias

function sumaResist(resist)
{
    let suma = 0;
    for (let i = 0; i < resist.length; i++)
        suma += Math.abs(resist[i]);
    return suma;
}

let resistencias = [-1, 10, 5, 14];

console.log(sumaResist(resistencias));


// function arrayMultiples(number, length) {
//     const multiples = [];
//     for (let i = 1; i <= length; i++) {
//     multiples.push(number * i);
//         }
//         return multiples;
//     }

// console.log(arrayMultiples(2, 10));
// console.log(arrayMultiples(17, 6));

function generarMultiplos(numero, multiplos)
{
    let respuesta = new Array(multiplos);
    for(let i=1; i<=multiplos; i++)
    {
        respuesta[i-1] = numero * i;
    }
    return respuesta;
}

let numero = 8;
let multiplos = 10;

console.log(generarMultiplos(numero, multiplos));


function secretSociety(arreglo)
{
    let respuesta = "";
    for (let i = 0; i < arreglo.length; i++)
    {
        respuesta += arreglo[i][0];
    }
    return respuesta;
}

let nombres = ["Luis", "Angel", "Lalo", "Tommy"];

console.log(secretSociety(nombres));