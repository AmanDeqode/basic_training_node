function validateString(input, callback) {

    setTimeout(function () {
  
      // input is said to be valid if it is a lowercase string
  
      if (typeof input === "string" && input === input.toLowerCase()) {
          
  
        return callback(null, true)
  
      }
  
      return callback(new Error('Invalid string'), null)
  
    }, 500)
  
  }

  const inputArray = ['first', 'Second', 'thiRd', 4, false, 'true'];


  const obj = {};
  let arr1=[];
  const checkInput = (err,isValid) =>{
    let pickOut = arr1.pop();

    if(isValid)
    {
      obj[pickOut] = isValid;
  
    }
    else
    {
      obj[pickOut] = false;
    }
  }
  
  setTimeout(()=>{
    console.log(obj);
  },510);

 
  const arrayElement = () =>{
    if(inputArray.length!==0)
    {
      const value = inputArray.shift();
     
      arr1.push(value);

      validateString(value,checkInput);
      arrayElement();
     
      return value;
    }
  }
  
  arrayElement();


  