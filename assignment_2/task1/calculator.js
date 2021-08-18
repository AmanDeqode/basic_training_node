const ps = require('prompt-sync');

const prompt0 = ps();

const finalPrompt = ps();

const finalValue = finalPrompt("Welcome to calculator press to enter any key to enter");

do{

    console.log("Which operation you want to perform\n For Add Press = 1\n For Substract Press= 2\n For Multiply Press = 3\n For Divide Press= 4\n For Exit = 0\n")

    const value0 = prompt0("Please select a valid input ");

    if(+value0===0)
{
    console.log("Thank you");
    break;
}
else
{
    const prompt1 = ps();
    const prompt2 = ps();

    let value1 = prompt1("Enter the first number = ");
    let value2 = prompt2("Enter the second number = ");

if(isNaN(+value1) || isNaN(+value2))
{
    console.log("Invalid input")
}

    switch(+value0)
    {
        case 1:
            let sum = +value1 + +value2;

            console.log(sum);
            break;
        case 2:
            let sub = +value1 - +value2;

            console.log(sub);
            break;
        case 3:
            let multi = +value1 * +value2;

            console.log(multi);
            break;
        case 4:
            let divide = +value1 / +value2;

            console.log(divide);
            break;
        default:
            console.log("You select invalid input ");
            break;
    }
}


}while(finalValue!=0);
