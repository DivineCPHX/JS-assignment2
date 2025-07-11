//Regular variables and constants
let firstName = 'John'; //  ---------
console.log(firstName);   //        |
let lastName = 'Doe';     //        |
const PI = 3.14159;       //        |
console.log(PI);          //        |
                        //          |
let age = 18;             //        |
console.log(age);         //        |
                          //        |
let isStudent = true;   //          |---- This are correctly declared variables @Timi-php
console.log(isStudent);      //     |
                        //          |
let favoriteColor = null;    //     |
console.log(favoriteColor);  //     |
                             //     |
let undefinedVariable          //   |
console.log(undefinedVariable);  // |
                                //  |  
age = 25;                       //  |
console.log(age);   //  -------------


//Constant Object
const person = {
    name: 'Prosper',
    age: 32,
    city: 'losAngeles',
    hobbies: ['gaming', 'fishing', 'cooking'],
    email: 'cgvbn@gmail.com'
}

city: 'SanDiego' // You dont need this line
                    //How then will I change the city, cause I was asked to reassign the city

console.log(person)

//Constant array
const numbers = [2,3,3,4,5,4]
numbers[2] = 3,4;
numbers.splice = 2
console.log(numbers[3])
console.log(numbers)



//Perform a task(greeting) function
function greetUser(userName) {
    console.log('Hello, ' + userName, '!' + ' Welcome');

}

greetUser('DivineC');

//Calculating function
// function calculateArea(length, width) {
//     return length * width;
// }

// let length, width = calculateArea(3,2)

// console.log(length, width);

//----- @Timi-php Calculating function
function calculateArea(length, width)
{
    return length * width;
}
let area = calculateArea(3, 2);
console.log('The area is: ' + area);



//Arrow function
function squareNumber(number) {   // @Timi-php
return number * number;           // you can just say 
                                 // let number = 3;
                                 // console.log(squareNumber(number));
}                                // Same as on your Function to demonstrate a simple higher-order function

let number = squareNumber(3);  
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
function displayInfo(data) {                // @Timi-php you got the output wrong
    if (typeof data === 'string') {
        console.log('This is a string: '+data); //  console.log('This is a string: '+data);
    } else if (typeof data === 'number') {
        console.log('This is a number: '+data);    // console.log('This is a number: '+data);
    } else if (typeof data === 'object' && data != null) {
        console.log('This is an object: '+JSON.stringify(data));   // console.log('This is an object: '+JSON.stringify(data));
    }                                                              //*Correction taken*
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

function renderProfile() {    // @Timi-php you got this wrong
    if (userProfile.isActive === true) {   // you should use userProfile.isActive
        // console.log('Online')
        return 'Online';
    } else if (userProfile.isActive === false) { // you should use userProfile.isActive
        // console.log('Offline') 
        return 'Offline'                     // Then call the function renderProfile();
    }
                                                    //Correction taken
}

    const modifiedArray = userProfile.permissions;
    console.log(modifiedArray);                                // also you should use userProfile.permissions
                                                            // like const modifiedArray = userProfile.permissions;
                                                            // then console.log(modifiedArray);

    // renderProfile();
console.log(renderProfile())



// @Timi-php Displaying user profile correctly

