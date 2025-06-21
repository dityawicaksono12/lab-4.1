function calculateTotalCost(price, quantity, taxRate, discount = 0) {
    // Subtract discount if provided
    const subtotal = (price * quantity) - discount;
  
    // Apply tax
    const tax = subtotal * taxRate;
  
    // Return total cost
    return subtotal + tax;
  }

console.log(calculateTotalCost(10, 3, 0.08));          // No discount → $32.4
console.log(calculateTotalCost(10, 3, 0.08, 5));       // $5 discount → $27.4
