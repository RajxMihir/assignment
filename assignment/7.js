let cart = ["apple", "banana", "grapes", "orange", "banana", "orange"];

let cartNoDublicate = [...new Set(cart)];

console.log("Shopping cart(without duplicates):");
for(let items of cartNoDublicate)
{
    console.log(items);
}