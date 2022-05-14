// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

dragons.includes("John")
// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
let arr = dragons.filter(item => {
    if (item.includes('John')) {
        return item
    }
})

// #3) Create a function that calulates the power of 100 of a number entered as a parameter
const curriedPower = (a) => (b) => b ** a
const powerOf100 = curriedPower(100)

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result
powerOf100(10000)
// Javascript can only represent big numbers up until the big_max_safe value after that it becomes infinity.
//In order to work with bigger numbers you need to use libraries that handle them.