// 5.2.1
function getProperty(object, nameOfProperty) {
    return object[nameOfProperty];
}
var obj = { key: 'value'};
var output = getProperty(obj, 'key'); console.log(output); // --> 'value'

// 5.2.2
function addProperty(obj, propertyName) {
    obj[propertyName] = true;
}

var myObj = {};
addProperty(myObj, "myProperty");
console.log(myObj.myProperty); //--> true

// 5.2.3
function removeProperty(obj, propertyName) {
    delete obj[propertyName];
}

var obj = {
    name: 'Sam',
    age: 20
};
removeProperty(obj, 'name');
console.log(obj.name); // --> undefined

// 5.2.4
function getFullName(name, surname) {
    return (name + ' ' + surname);
}
var output = getFullName('Joe', 'Smith'); console.log(output); //--> 'Joe Smith'

//5.2.5
function getLengthOfWord(word)
{
    return word.length;
}
var output = getLengthOfWord('some'); console.log(output); // -> 4

//5.2.6
function getLengthOfTwoWords(word1, word2) {
    return word1.length + word2.length;
}

var output = getLengthOfTwoWords('some', 'words'); console.log(output); // -> 9

//5.2.7
function isGreaterThan(number1, number2) {
    return number1 > number2;
}

var output = isGreaterThan(11, 10); console.log(output); // --> false

// 5.2.8
function isEven(number) {
    return (number % 2 == 0);
}

var output = isEven(11);
console.log(output);

//5.2.9
function isSameLength(word1, word2) {
    return (word1.length == word2.length);
}

var output = isSameLength('words', 'super'); console.log(output); //--> true

//5.2.10
function isEvenAndGreaterThanTen(number) {
    return (number % 2 === 0) && (number > 10);
}
var output = isEvenAndGreaterThanTen(13); console.log(output); // --> false

// 5.2.11
function computeAreaOfATriangle(height, base) {
    return 0.5 * height * base;
}
var output = computeAreaOfATriangle(4, 6); console.log(output); // --> 12