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
*/

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