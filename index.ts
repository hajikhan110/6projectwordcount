#! /usr/bin/env nod
import inquirer from "inquirer";
//this module to get data from cmd

const answers: {
sentence: string;
} 

//let answers: any
//= await inquirer.prompt(


= await inquirer.prompt([
{
name: "sentence",
type: "input",
message: "enter a sentence:"


}
])

const words = answers.sentence.trim().split(" ")

//const array = ['a', 'b','c'];
console.log(words);


console.log(`your sentence word count is ${words.length}`);

