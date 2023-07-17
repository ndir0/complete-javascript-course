/*
'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');

// const interface = 'Audio';
// const private = 123;

function logger() {
    console.log('My name is Jonas');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const fruitJuice = fruitProcessor(2, 3);
console.log(fruitJuice);

const num = Number('23');
console.log(num);

// function declaration
function calcAge1(birthYear) {
    return (2023 - birthYear);
}
const age1 = calcAge1(1991);

// function expression
const calcAge2 = function (birthYear) {
    return (2023 - birthYear);
}
const age2 = calcAge2(1991);

console.log(age1, age2);

// arrow function

const calcAge3 = birthYear => 2023 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearLeft = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    // return retirement
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearLeft(1991, 'John'));

function cutFruit(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruit(apples);
    const orangePieces = cutFruit(oranges);

    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
    return juice;
}
*/

function calcAverage(firstNum, secondNum, thirdNum) {
    return (firstNum + secondNum + thirdNum) / 3;
}

function checkWinner() {
    const scoreDolphins = calcAverage(44, 23, 71);
    const scoreKoalas = calcAverage(65, 54, 49);
    if (scoreDolphins > scoreKoalas) {
        console.log(`Dolphins win!`)
    } else {
        console.log(`Koalas win!`)
    }
}