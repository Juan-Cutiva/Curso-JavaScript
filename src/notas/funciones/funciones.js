function calculateDiscountedPrice ( a, b ){
    return a - (a * b / 100);
}
const originalPrice = 1000
const discountPercentage = 25
const finalPrice = calculateDiscountedPrice( originalPrice, discountPercentage )
console.log(`
    Original Price: $${originalPrice}
    Discount Percentage: ${discountPercentage}%
    Price with discount: $${finalPrice}
    `)