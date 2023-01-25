/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Bob";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
let $function = 27;
let person = "Jonas";
let PI = 3.141;
let myFirstJob = "Coder";
let mySecondJob = "Teacher";

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'YES';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2023;
console.log(typeof year);

console.log(typeof null);

let age = 30; // let is mutable
age = 31;

const birthYear = 1999; // const is immutable

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = 'Jonas';
const lastName = 'Smith';
console.log(firstName + ' ' + lastName);

let x = 10 + 5; //15
x += 10 //25
x *= 4; //100
x++; //101
x--; //100
console.log(x);

console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 20);

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10, assignment is right to left
console.log(x, y);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

//////////////////////////////////////////////////
// CODING CHALLENGE #1

const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 95;
const johnHeight = 1.88;

const markBMI = markWeight / (markHeight ** 2);
const johnBMI = johnWeight / (johnHeight ** 2);
const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2023;

const jonas = "I'm " + firstName + ' a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName} a ${year - birthYear} years old ${job}!`; // backticks found above tab
console.log(jonasNew)

console.log('string with \n\
multiple \n\
lines');

console.log(`string with
multiple
lines`);

const age = 16;
if (age >= 18) {
    console.log('Can start driving');
} else {
    const yearsLeft = 18 - age;
    console.log(`Cannot start driving, wait ${yearsLeft} years`)
}

const birthYear = 1998;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

const weightMark = 78;
const heightMark = 1.69;
const BMIMark = weightMark / heightMark ** 2
const weightJohn = 92;
const heightJohn = 1.95;
const BMIJohn = weightJohn / heightJohn ** 2
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI of ${BMIMark} is higher than John's`);
} else {
    console.log(`John's BMI of ${BMIJohn} is higher than Mark's'`);
}

// type conversion
const inputYear = '1991';
console.log(Number(inputYear) + 18);
console.log(inputYear + 18);
console.log(Number('Jonas'));
console.log(typeof NaN);
console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old'); // converts the 23 to string
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);
*/

// falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log("Don't spend it all")
} else {
    console.log("Get a job");
}

let height = 123;;
if (height) {
    console.log("Height is defined");
} else {
    console.log("Height is undefined")
}