function checkEligibility(age, isEmployed) {
    if (age > 18 && isEmployed) {
      return "You are eligible for the program.";
    } else if (age > 18 && !isEmployed) {
      return "You are conditionally eligible for the program.";
    } else {
      return "You are not eligible for the program.";
    }
  }  

console.log(checkEligibility(25, true));   // eligible
console.log(checkEligibility(22, false));  // conditionally eligible
console.log(checkEligibility(17, true));   // not eligible