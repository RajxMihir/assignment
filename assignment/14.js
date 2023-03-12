const calculateTotalCost = (cart) => {
    return cart.reduce((total, item) => {
        return total + item.unitPrice * item.quantity;
    }, 0);
}

const cart = [
    { unitPrice: 10, quantity: 2},
    { unitPrice: 20, quantity: 1},
    { unitPrice: 30, quantity: 3}
];

const totalCost = calculateTotalCost(cart);
console.log(totalCost);