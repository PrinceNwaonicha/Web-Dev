// Iterable vs Enumeratable
const baset = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
}





// for of
// Iterating - arrays, strings
for (item of detailedBasket) {
    console.log(item);
}



// for in - properties
// enumerating - objects
for (item in detailedBasket) {
    console.log(item)
}
