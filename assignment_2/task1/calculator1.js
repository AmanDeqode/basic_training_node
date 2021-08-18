const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const introQuestion = () =>{
    return new Promise((resolve,reject)=>{
        rl.question('Which action you would like to perform\n For addition press - 1\n For substraction press - 2 \n For multiplication press - 3 \n For division press - 4\n Enter 0 to exit \n',(result)=>{
            if(isNaN(+result))
            {
                reject("Invalid Input try again");
            }
            else
            {
                resolve(+result);
            }
        });
    });
}

const question1 = () => {
    return new Promise((resolve, reject) => {
      rl.question('Please enter the first number ', (nums1) => {
        rl.question('Please enter the second number ', (nums2) => {
            if(isNaN(+nums2) || isNaN(+nums1))
            {
              reject("You enter an invalid input ");
              return rl.close();
            }
            else
            {
                resolve([+nums2,+nums1]);
            }
        });
      });
    });
  }
  
  const main = async () => {
      try {

        console.log("Welcome to Calculator\n");

        const value = await introQuestion();
        
        if(value===0)
        {
            console.log("Thank you ");
            rl.close();
        }
        else
        {
            const fetchValue = await question1();
            const value1 = fetchValue[0];
            const value2 = fetchValue[1];

            switch(+value)
            {
                case 1:
                    const sum = value1 + value2;
                    console.log(`sum of ${value1} and ${value2} = ${sum}`);
                    break;
                case 2:
                    const subs = value1 - value2;
                    console.log(`substraction of ${value1} and ${value2} = ${subs}`);
                    break;
                case 3:
                    const multi = value1 * value2;
                    console.log(`multiplication of ${value1} and ${value2} = ${multi}`);
                    break;
                case 4:
                    const divide = value1/value2;
                    console.log(`division of ${value1} and ${value2} = ${divide}`);
                default:
                    console.log('Invalid Input');
                    break;
            }
            
            rl.close();
        }

      } catch (error) {
          console.log(error);
          rl.close();
      }
    
  }
  
  main()
