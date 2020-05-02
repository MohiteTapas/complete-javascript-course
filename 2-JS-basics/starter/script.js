/********************************
* Varibles and data types
*/
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 30;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';

// Variable naming rules

var $3years = 3;
var function = 34;
*/

/********************************
* Varible mutation and type coercion
*/
/*
var firstName = 'John';
var age = 30;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;

job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he marries? ' + isMarried);

// Variable mutation
age = 'thirty';
job = 'Driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he marries? ' + isMarried);

var lastName = prompt('What is his last name');
console.log(lastName);
*/

/****************************************
 * Basic Operators
 */

 var currentYear, yearJohn, yearMark, ageJohn, ageMark;
currentYear = 2020;
ageJohn = 30;
ageMark = 35;

// Math operators
yearJohn = currentYear - 30;
yearMark = currentYear - 35;
console.log(yearJohn);

console.log(currentYear + 2);
console.log(currentYear /12 );
console.log(currentYear * 2);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operatos
console.log(typeof johnOlder);
console.log(typeof ageMark);

var x;
console.log(typeof x);

