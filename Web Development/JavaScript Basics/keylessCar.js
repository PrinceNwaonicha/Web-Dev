on = true;

do {
    age = prompt("What is your age?");
    if (Number(age) < 18) {
        alert("Sorry You are too young! Powering off...");
        on = false;
    } else if (String(Number(age)) !== age) {
        alert("Invalid input! Please input only numbers!");
    } else {
        alert("Thank you, You are old enough you may now drive!");
        alert("Vroom Vroom!");
        on = false;
    }
} while (on);

