function capitalized(name) 
{
    let firstLetter = name.charAt(0);
    return firstLetter === firstLetter.toLowerCase() ? firstLetter.toUpperCase() + name.slice(1) : name;   
}

console.log(capitalized('maria'));
console.log(capitalized('Firoz'));
console.log(capitalized('taal'));