import inquirer from "inquirer";

let myBalance = 90000; //dollar
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "enter your pin number",
    type: "number",
  },
]);

if (pinAnswer.pin === myPin) 
  {
  console.log("correct pin code!!!");
  let operationanswer = await inquirer.prompt([
    {
      name: "operation",
      message: "please select option",
      type: "list",
      choices: ["withdraw", "check balance"],
    },
  ]);
  if (operationanswer.operation === "withdraw") {
    let amountAnswer = await inquirer.prompt([
      {
        name: "amount",
        message: "enter your amount",
        type: "number",
      },
    ]);

    myBalance -= amountAnswer.amount;
    console.log("your remaining balance is:" + myBalance)

  }

  
} 



else console.log("please enter correct pin code");
