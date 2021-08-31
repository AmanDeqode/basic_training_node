function validateString(input, callback) {

    setTimeout(function () {
  
      // input is said to be valid if it is a lowercase string
  
      if (typeof input === "string" && input === input.toLowerCase()) {
          
  
        return callback(null, true)
  
      }
  
      return callback(new Error('Invalid string'), null)
  
    }, 500)
  
  }

  console.log(validateString(['first', 'Second', 'thiRd', 4, false, 'true']))