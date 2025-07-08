//Regular variables and constants
let firstName = 'John';
console.log(firstName);

const PI = 3.14159;
console.log(PI);

let age = 18;
console.log(age);

let isStudent = true;
console.log(isStudent);

let favoriteColor = null;
console.log(favoriteColor);

let undefinedVariable
console.log(undefinedVariable);

age = 25;
console.log(age);


//Constant Object
const person = {
    name: 'Prosper',
    age: 32,
    city: 'losAngeles',
    hobbies: ['gaming', 'fishing', 'cooking'],
    email: 'cgvbn@gmail.com'
}

city: 'SanDiego'

console.log(person)

//Constant array
const numbers = [2,3,3,4,5,4]
numbers[2] = 3,4;
numbers.splice = 2
console.log(numbers[3])
console.log(numbers)



//Perform a task(greeting) functio
function greetUser(userName) {
    console.log('Hello, ' + userName, '!' + ' Welcome');

}

greetUser('DivineC');

//Calculating function
function calculateArea(length, width) {
    return length * width;
}

let length, width = calculateArea(3,2)

console.log(length, width);


//Arrow function
function squareNumber(number) {
return number * number;
}

let number = squareNumber(3)
console.log(number);


//processArray and callback function
function processArray(array, callback) {
    const modifiedArray = [];
    array.forEach((element) => {
        modifiedArray.push(callback(element))
    });

    return modifiedArray;
}

//Doubling of numbers array
    const numbersof = [2,3,3,4,5,4];
    const doubledNumbers = processArray(numbersof, (number) => number * 2);

console.log(doubledNumbers);

//A Higher-order function is a function that takes another function as an arguement or returns a function as output.

//Function to demonstrate a simple higher-order function
function creatMultipler (multiplyBy5) {
    return multiplyBy5;

}

let multiplyBy5 = creatMultipler(5 * 10)
console.log(multiplyBy5)


//Dynamic typing with functions
function displayInfo(data) {
    if (typeof data === 'string') {
        console.log('This is a string: [data]');
    } else if (typeof data === 'number') {
        console.log('This is a number: [data]');    
    } else if (typeof data === 'object' && data != null) {
        console.log('This is an object: [data]');
    }
}

displayInfo('Hello Suckers')
displayInfo(67)
const personA = { name: 'Prosper', age: 32, city: 'losAngeles' };
displayInfo(personA)



// UserProfile Display
let userProfile = {
    id: 4567890,
    username: 'Guge',
    isActive: false,
    permissions: ['fgyhj','fghj','trt77o8uihg']
}

function renderProfile() {
    if (isActive === true) {
        console.log('Online')
    } else if (isActive === false) {
        console.log('Offline')
    }

}

    const modifiedArray = ['fgyhj','fghj','trt77o8uihg'];



console.log(renderProfile)