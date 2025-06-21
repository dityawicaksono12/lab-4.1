function formatFullName(firstName, lastName) {
    if (!firstName || !lastName) {
      return "Invalid name input."
    }
  
    firstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase()
    lastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase()
  
    return `${lastName}, ${firstName}`
  }

  console.log(formatFullName("john", "doe"))