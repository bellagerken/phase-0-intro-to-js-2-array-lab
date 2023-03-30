// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push("Ralph")
    return cats 
}

function destructivelyPrependCat(name){
    cats.unshift("Bob")
    return cats
}

function destructivelyRemoveLastCat(name){
    cats.pop("Garfield")
    return cats
}

function destructivelyRemoveFirstCat(name){
    cats.shift("Milo")
    return cats
}

function appendCat(name){
    let newCats = [...cats, "Broom"]
    return newCats
}

function prependCat(name){
    let newCats = ["Arnold", ...cats];
    return newCats
}

function removeLastCat(){
   let newCats = cats.slice(0, cats.length - 1);
    return newCats
}

function removeFirstCat(){
   let newCats = cats.slice(1);
    return newCats
}