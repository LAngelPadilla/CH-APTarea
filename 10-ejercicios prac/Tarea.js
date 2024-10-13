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