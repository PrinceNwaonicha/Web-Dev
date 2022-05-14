// reference type

var object1 = { value: 10 };
var obbject2 = object1;
var object3 = { value: 10 };
`object1 === object2 BUT object1 != object3 because they are pointing
at two different places in memory`




// context vs scope

const object4 = {
    a: function () {
        console.log(this);
    }
}
    `Normally this would be in the context of the window but since your running a function within a function
the function within is within the context of the outer function`
    `scope is talking about the area in which variables and objects are defined.`

// instantiation
class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`HI I am ${this.name}, I'm a ${this.type}`)
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
    }
    play() {
        console.log(`WWWWWWWWWW I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magician');


`Creates multiple instances of a an object`