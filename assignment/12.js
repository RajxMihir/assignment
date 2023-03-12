function CalculateCarRental (numdays, cartType)
{
    let rentalCost;
    switch (cartType.toLowerCase()) {
        case 'ecnomy':
           rentalCost = 4000; 
            break;
        
        case 'midsize':
            rentalCost = 10000; 
            break;
            
        case 'luxury':
            rentalCost = 20000;
            break;

        default:
            return 'Invalid car type';
    }
    return rentalCost * numdays;
}

const numdays = 5;
const cartType = 'midsize';
const rentalCost = CalculateCarRental(numdays, cartType);
console.log(`The rental cost for ${numdays} days of ${cartType} car is Rs. ${rentalCost}`);