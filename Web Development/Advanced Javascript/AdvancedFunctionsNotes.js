const first = () => {
    const greet = 'Hi';
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

//Closures - a function ran, the function executed. It's never going to execute again.
// But it's going to remember that there are references to those variables
// so the child scope always has access to the paent scope.

//Currying - Process of taking a function that takes multiple arguments
// into a function that takes them one at a time.
const multiply = (a, b) => a * b;
multiply(a, b)
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(a)(b)
const multiplyBy5 = curriedMultiply(5);
multiplyBy5(5)
// 25

//Compose - puts two functions where the output of one function
//is the input of another.
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5)

//Best thing you can do while creating code is Avoiding Side Effects
// Having functional purity.

