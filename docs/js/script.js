'use strict';

/*
   Your task:
   1. Choose a strategy below (if/else or switch statement)
   2. Uncomment the starter lines
   3. Add other statements for the following operations: subtract, multiply, divide
   4. Add another operation that when selected javascript to change the page entirely
*/

const calcForm = document.getElementById('calculator__form');
const operation = document.getElementById('operation__select');
const result = document.getElementById('operation__result');

calcForm.addEventListener('submit', function (e) {
   // Prevent page refresh
   e.preventDefault();
   // placeholder for result
   let calculatorResult;
   let firstNumber = parseInt(e.target[0].value);
   let secondNumber = parseInt(e.target[2].value);
   // already defined operation and result container outside of the form

   // another strategy is to use a switch statement (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
   switch (operation.value) {
      case 'add':
         calculatorResult = firstNumber + secondNumber;
         break;
      case 'subtract':
         calculatorResult = firstNumber - secondNumber;
         break;
      case 'multiply':
         calculatorResult = firstNumber * secondNumber;
         break;
      case 'divide':
         calculatorResult = firstNumber / secondNumber;
         break;
      case 'partymode':
         document.body.classList = 'partymode';
         calculatorResult = 'party!';
         break;
      default:
         calculatorResult = 0;
   }

   result.value = calculatorResult;
});