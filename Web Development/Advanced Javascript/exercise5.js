// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
let double = []
const newAerray = array.forEach((item) => {
  double.push(item["username"] + "!");
})
console.log.arrayNum(double)
//Create an array using map that has all the usernames with a "? to each of the usernames
const newerArray = array.map(item => item["username"] + "?")

//Filter the array to only include users who are on team: red
const filterArray = array.filter(item => item["team"] === "red");

//Find out the total score of all users using reduce
const reduceArray = array.reduce((accumulator, item) => {
  return item['score'] + accumulator
}, 0)
// (1), what is the value of i?
//71
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
  return num * 2;
})

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const newerArray = array.map(player => {
  player.items = player.items.map(item => {
    return item + "!"
  });
  return player;
})