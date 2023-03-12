function doubleCartQuantities(cart) 
{
    for(let i = 0; i < cart.length; i++)
    {
        cart[i] *= 2;
    }
    return cart;
}

let cart = [50, 75, 125, 250, 325];
cart = doubleCartQuantities(cart);

console.log(cart);
