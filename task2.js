function calculateTotalCost(price, quantity, taxRate) {
    if (
      typeof price !== 'number' || isNaN(price) ||
      typeof quantity !== 'number' || isNaN(quantity) ||
      typeof taxRate !== 'number' || isNaN(taxRate)
    ) {
      return "Invalid input"
    }
  
    const totalCost = (price * quantity) * (1 + taxRate)
    return totalCost
  }

console.log(calculateTotalCost(10, 3, 0.07));
console.log(calculateTotalCost("10", 3, 0.07));