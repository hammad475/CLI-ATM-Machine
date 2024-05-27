import inquirer from "inquirer";

let myBalance = 40000; //dollar
let myPin = 1234;

console.log("Welcome to the ATM machine");

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "enter your pin number",
    type: "number",
  },
]);

if (pinAnswer.pin === myPin) {
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
        message: "select your amount ",
        type: "list",
        choices: [5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000 , 50000]
      },
    ]);

    
    if (amountAnswer.amount > myBalance) {
      console.log("your balance is insufficient");
    } 
    
    
    else {
      myBalance -= amountAnswer.amount;
      console.log(amountAnswer.amount +" "+ "withdraw successfully");
      console.log(`your new balance is: ${myBalance} `);
    }
  } else {
    operationanswer.operation === "check balance";

    console.log("your balance is : " + myBalance);
  }
} else console.log("please enter your correct pin code!");
