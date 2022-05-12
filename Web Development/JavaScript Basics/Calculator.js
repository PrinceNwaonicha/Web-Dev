var on = true
var result = 0
do {
    var num1 = prompt("Please input the first number. ");
    if (String(Number(num1)) !== num1) {
        alert("You must enter an integer.");
        continue;
    } else {
        num1 = Number(num1)
        do {

            var num2 = prompt("Please input the second number. ")
            if (String(Number(num2)) !== num2) {
                alert("You must enter an integer.");
                continue;
            } else {
                num2 = Number(num2)
                do {
                    sign = prompt("What operation do you want to use. ex. +-*/%");
                    if (sign == "+") {
                        result = num1 + num2
                        on = false
                    } else if (sign == "-") {
                        result = num1 - num2
                        on = false
                    } else if (sign == "*") {
                        result = num1 * num2
                        on = false
                    } else if (sign == "/") {
                        result = num1 / num2
                        on = false
                    } else if (sign == "%") {
                        result = num1 % num2
                        on = false
                    } else {
                        alert("Please input a valid operation!");
                        continue;
                    }
                } while (on);
            }
        } while (on);
    }
    alert(`The result of ${num1} ${sign} ${num2} = ${result}`)
    again = prompt("Do you want to calculate anything else? reply y or n")
    if (again == 'y') {
        on = true
    }
}
while (on);