//BigInt

// Max_Safe_Integer is the maximum value javascript can handle.
// use i(n) ex. 1n to handle large numbers




//Optional Chaining Operator

let will_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6
    }
}

let weight = will_pokemon.pikachu.weight
console.log('weight:', weight)


let andrei_pokemon = {
    raichu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30,
        power: 0
    }
}

let raichu_weight = andrei_pokemon.pikachu.weight
console.log('weight:', weight)

// the above doesn't work because andrei doesn't havve the object pikkachu
// to check this in the past we would have to do.
if (andrei_pokemon.pikachu && andrei_pokemon.pikkachu.weight) {
    let weight2 = andrei_pokemon.pikachu.weight
} else {
    let weight2 = undefined
}
// The new way we do it. through optional chaining Operator if it doesn't find it it returns undefined.
let weight3 = andrei_pokemon?.pikachu?.weight || 'no power'
console.log(weight3)


//Nullish checks if the item is null or undefined if its there it returns the item. instead of the default 'no power' 
let weight3 = andrei_pokemon?.pikachu?.weight ?? 'no power'
console.log(weight3)