const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askQuestion = (msg) =>{

    return new Promise((resolve)=>{
        rl.question(msg,(result)=>{
            resolve(result);
        });
    });
}

  async function calculator(){
      try {

        console.log("Welcome to Calculator\n");

        const value = await askQuestion('Which action you would like to perform\n For addition press - 1\n For substraction press - 2 \n For multiplication press - 3 \n For division press - 4\n Enter 0 to exit \n');
        
        if(+value===0)
        {
            console.log("Thank you ");
            rl.close();
        }
        else
        {
            const value1 = await askQuestion('Please enter the first number ');
            const value2 = await askQuestion('Please enter the second number ');
            
            if(isNaN(+value1) || isNaN(+value2))
            {
                console.log("Invalid Input");
            }

            switch(+value)
            {
                case 1:
                    const sum = +value1 + +value2;
                    console.log(`sum of ${value1} and ${value2} = ${sum}`);
                    break;
                case 2:
                    const subs = +value1 - +value2;
                    console.log(`substraction of ${value1} and ${value2} = ${subs}`);
                    break;
                case 3:
                    const multi = +value1 * +value2;
                    console.log(`multiplication of ${value1} and ${value2} = ${multi}`);
                    break;
                case 4:
                    const divide = +value1/+value2;
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
  
  calculator()
