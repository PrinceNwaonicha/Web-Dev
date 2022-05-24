//Async Await


//old way of doing Asynchronous programming
movePlayer(100, 'Left')
    .then(() => movePlayer(400, 'Left'))
    .then(() => movePlayer(10, 'Right'))
    .then(() => movePlayer(330, 'Left'))


//New way using Async await function ES8

async function playerStart() {
    const first = await movePlayer(100, 'Left'); //pause
    const second = await movePlayer(100, 'Left'); //pause
    await movePlayer(10, 'Right'); //pause
    await movePlayer(330, 'Left'); //pause
}



// realistic example
async function fetchUsers( {
    
})
fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(console.log)

//////////////////////////////////
async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json();
    console.log(data);
}
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url =>
    fetch(url).then(people => people.json())
))
  .then(array => {
    console.log('1', array[0])
    console.log('2', array[1])
    console.log('3', array[2])
  })
    .catch(err => console.log('ughhhh fix it!', err));
 // --------------------------------------------------------
  
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