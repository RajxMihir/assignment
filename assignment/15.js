const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    const discountAmount = originalPrice - discountedPrice;
    const discountPercentage = (discountAmount / originalPrice) * 100;
    return Math.round(discountPercentage * 100) / 100;
};

const originalPrice = 200;
const discountedPrice = 150;
const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
console.log(`You save ${discountPercentage}%`);


