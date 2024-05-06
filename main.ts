#! /usr/bin/env node


import inquirer from "inquirer";
import chalk from "chalk";


const Currency:any  = {
      
      USD : 1,
      EUR : 0.91,
      GBP : 0.76,
      INR : 74.57,
      PKR : 280

};

let user_answer = await inquirer.prompt(

    [
            {
            
                name : "from",
                type : "list",
                message : chalk.green("\n \t Enter From Currency"),
                choices : ["USD", "EUR", "GBP", "INR", "PKR"]

            },
            {
            
                name : "to",
                type : "list",
                message : chalk.blue("\n \t Enter To Currency"),
                choices : ["USD", "EUR", "GBP", "INR", "PKR"]

            },
            {

                name : "amount",
                type : "number",
                message : chalk.blue("\n \tEnter Your Amount..."),

            }

    ]
);

let fromAmount = Currency[user_answer.from]
let toAmount = Currency[user_answer.to]
let amount = user_answer.amount

let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount);

                      
        
        