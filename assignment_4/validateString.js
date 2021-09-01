function validateString(input, callback) {

    setTimeout(function() {
  
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
    return obj;
  }
 
  const arrayElement = () =>{
    if(inputArray.length!==0)
    {
      const value = inputArray.shift();
      arr1.push(value);

      const resultData = new Promise((resolve,reject)=>{
        return validateString(value,function(err,isValid){
          let pickOut = arr1.pop();
          
          if(isValid)
          {
            obj[pickOut] = isValid;
          }
          if(isValid===null)
          {
            obj[pickOut] = false;
          }
          else if(arr1.length===0)
          {
            resolve(obj); 
          }
        })
      });
      resultData.then((obj)=> console.log('obj',obj));
     
      arrayElement();
    }
  }
  
  arrayElement();
