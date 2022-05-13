var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var initbody = window.getComputedStyle(body).background
var re = /(rgb\(\d+\, \d+\, \d+\))/g
var rgbre = /(\d+)/g
var nums = initbody.match(re)
var rgb = nums[0].match(rgbre);
var randombtn = document.getElementById("random")

// function that finds the what background is and turns it into a hexidecimal.
function findbackgroundcolor(num, re) {
    var arr = []
    var hexstring = ""
    // loop through array of multiple rgb(r,b,g).
    for (let i = 0; i < num.length; i++) {
        rgb = num[i].match(re)
        // loop through aray of individual values of r, then b, then g.
        for (let j = 0; j < rgb.length; j++) {
            // turn the value into a hexidecimal
            hex = Number(rgb[j]).toString(16);
            // if the value is one digit sets 0 at the begining of value
            if (hex.length === 1) {
                hex = '0' + hex
            }
            hexstring += hex
        }
        // pushes the hexstring to an array
        arr.push(hexstring)
        hexstring = ""
    };
    // returns array of hexstrings
    return arr
}

// sets Gradient of the background
function setGradient() {
    body.style.background =
        "linear-gradient(to right, "
        + color1.value
        + ","
        + color2.value
        + ")";
    css.textContent = body.style.background + ";";
}

// gets a random gradient and returns an array
function getRandomGradient(num, re) {
    var arr = []
    for (let i = 0; i < num.length; i++) {
        //set rgb to replace each number by a function of random.
        rgb = num[i].replace(re, function () {
            return Math.floor(Math.random() * 256).toString()
        });
        arr.push(rgb);
    }
    return arr
}

// Resets the background to a random gradient and updates the colorpicker to reflect the change.
function setRandomGradient() {
    values = getRandomGradient(nums, rgbre);
    body.style.background =
        "linear-gradient(to right, "
        + values[0]
        + ","
        + values[1]
        + ")";
    //Reset css textContent of the color of body background.
    css.textContent = body.style.background + ";";
    //Reset the initial values of color picker to reflect the current bacground change
    initbody = window.getComputedStyle(body).background;
    nums = initbody.match(re);
    hexes1 = findbackgroundcolor(nums, rgbre);

    //Reset color picker.
    color1.value = "#" + hexes1[0];
    color2.value = "#" + hexes1[1];
}

// Sets the css textContent of the body.
css.textContent = initbody;

hexes = findbackgroundcolor(nums, rgbre)
color1.value = "#" + hexes[0];
color2.value = "#" + hexes[1];

// Change color when color1,2 and randombutton change.
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


randombtn.addEventListener("click", setRandomGradient)