//----------- ES6 + Wepack2----------
//js1
export const add = (a, b) => a + b;

//or
export default function add() {
    return a + b;
}

//js2
import { add } from "./add";
//or
import add from "./add";

//puts imports at top
//webpack