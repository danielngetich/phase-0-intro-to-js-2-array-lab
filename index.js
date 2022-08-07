var cats = ["Milo", "Otis", "Garfield"];
cats.length = 0;

cats.push('Milo', 'Otis', 'Garfield');
function destructivelyAppendCat(name){
    return (cats.push(name));
}
cats.length = 0;

cats.push('Milo', 'Otis', 'Garfield');
function destructivelyPrependCat(name){
    return (cats.unshift(name));
}
cats.length = 0;

cats.push('Milo', 'Otis', 'Garfield');
function destructivelyRemoveLastCat(name){
    return (cats.pop(name));
}
cats.length = 0;

cats.push('Milo', 'Otis', 'Garfield');
function destructivelyRemoveFirstCat(name){
    return (cats.shift(name));
}
cats.length = 0;

cats.push('Milo', 'Otis', 'Garfield');
function appendCat(name){
    return [...cats,"Broom"];
}
cats.length = 0;

cats.push('Milo', 'Otis', 'Garfield');
function prependCat(name){
    return ["Arnold",...cats];
}
cats.length = 0;

cats.push('Milo', 'Otis', 'Garfield');
function removeLastCat(name){
    return (cats.slice(0,-1));
}
cats.length = 0;

cats.push('Milo', 'Otis', 'Garfield');
function removeFirstCat(name){
    return (cats.slice(-2));
}