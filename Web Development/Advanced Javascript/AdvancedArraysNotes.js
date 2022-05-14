//Advanced Arrays

const array = [1, 2, 10, 16];

const double = []
const newArray = array.forEach((num) => {
    double.push(num * 2);
})

console.log('forEach', double);

// map, filter, reduce

const mapArray = array.map(num => num * 2);

console.log('map', mapArray);
// returns [2,4,,20,32] Just like above with forEach but it has a condition
// that it must have a return statement but forEach does not.

// filter

const filterArray5 = array.filter(num => num > 5)
// returns [10,16]

// reduce

const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num
}, 0);
// Accumulator is a place where you can store what is happening to the body
// of the function
// returns everything inarray when you start
// at another value it goes up.