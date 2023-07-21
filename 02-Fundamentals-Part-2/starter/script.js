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

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);
console.log(friends[0]);
console.log(friends.length)
console.log(friends[friends.length - 1])
friends[2] = 'Adam';
console.log(friends)

const firstName = 'John';
const jonas = [firstName, 'Doe', 2023 - 1991, 'teacher', friends]
console.log(jonas);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

function calcAge(birthYear) {
    return 2023 - birthYear;
}

const age1 = calcAge(years[0]);
console.log(age1);

const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Adam'); // adds
console.log(friends);
console.log(newLength);

friends.unshift('John'); // adds to first element
console.log(friends);

friends.pop(); // removes
console.log(friends);

const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // removes first element
console.log(friends);

console.log(friends.indexOf('Steven')); // returns index

console.log(friends.includes('Bob')); // returns boolean

function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.2;
    }
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])];

console.log(bills, tips, totals)

const john = {
    firstName: 'John',
    lastName: 'Doe',
    age: 2023 - 1999,
    job: 'Teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(john);
console.log(john.lastName);
console.log(john['lastName']);

const nameKey = 'Name';
console.log(john['first' + nameKey]);
console.log(john['last' + nameKey]);

const interested = prompt('What field?');

if (john[interested]) {
    console.log(john[interested]);
} else {
    console.log('Not exist');
}

john.location = 'Spain';
john['social'] = '@johndoe'
console.log(john)
*/

const john = {
    firstName: 'John',
    lastName: 'Doe',
    birthYear: 1991,
    job: 'Teacher',
    friends: ['Michael', 'Peter', 'Steven'],

    calcAge: function () {
        this.age = 2023 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job}`
    }
};

console.log(john.calcAge());
console.log(john.age);

console.log(john.getSummary());