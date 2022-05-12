var credentials = {
    username: "Prince",
    password: "notapassword"

};

var Database = [
    {
        username: "Prince",
        password: "notapassword"

    },
    {
        username: "Sally",
        password: "DaBomb"
    },
    {
        username: "Brock",
        password: "NotLesnar"
    }
];

var newsfeed = [
    {
        username: "Logic",
        timeline: "Yo this is fun!"
    },
    {
        username: "Tatsuma",
        timeline: "Never give up!"
    },
    {
        username: "Connor Mcgregor",
        timeline: "Who da fuck is that guy?"
    }
];

function isUserValid(username, password) {
    for (var i = 0; i < Database.length; i++) {
        if (Database[i].username === username &&
            Database[i].password === password) {
            return true;
        }

    }
    return false;
}
function signIn(username, password) {
    if (isUserValid(username, password)) {
        alert("Login confirmed")
        console.log(newsfeed);
    } else {
        alert("Sorry, wrong username and password");
    }
}

var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");

signIn(userNamePrompt, passwordPrompt);