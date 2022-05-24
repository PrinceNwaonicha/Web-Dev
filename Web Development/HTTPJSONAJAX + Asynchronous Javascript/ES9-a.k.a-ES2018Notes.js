//Object spread operator

const animals = {
    tiger: 23,
    lion: 5,
    monkey: 2,
    bird: 40
}

const { tiger1, ...rest1 } = animals;

const array = [1, 2, 3, 4, 5]

function sum(a, b, c, d, e) {
    return a + b + c + d + e;
}
sum(...array)
//returns 15

const { tiger, lion, ...rest } = animals

console.log(tiger, lion, animals)

// finally
const urls = [
  'http://swapi.dev/api/people/1',
  'http://swapi.dev/api/people/2',
  'http://swapi.dev/api/people/3',
  'http://swapi.dev/apifa/people/4'
]

Promise.all(urls.map(url => {
    return fetch(url).then(people => people.json())
}))
    .then(array => {
        throw Error;
        console.log('1', array[0])
        console.log('2', array[1])
        console.log('3', array[2])
        console.log('4', array[3])
    })
    .catch(err => console.log('ughhhh fix it!', err))
    .finally(() => console.log('extra'));

//for await of

//for of loops
const loopThroughURLS = url => {
    for (url of urls) {
        console.log(url)
    }
}
const getData = async function () {
    try {
        const [users, posts, albums] = await Promise.all(urls.map(url =>
            fetch(url).then(people => people.json())
        ))
        console.log('1', array[0])
        console.log('2', array[1])
        console.log('3', array[2])
    } catch (err){
        console.log('oops', err)
    }
}

const getData2 = async function() {
    const arrayOfPromises = urls.map(url => fetch(url));
    for await (let request of arrayOfPromises) {
        const data = await request.json();
        console.log(data);
    }
}