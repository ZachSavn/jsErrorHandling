//Error Handling Exercise
"use strict";

class InvalidNumberError extends Error {
    name = "InvalidNumberError"// added after going over with class to check for specific error
}

let input;

function getUserInput() {
    input = parseInt(prompt("Provide an even number."));
    try{
        //added or after going over in class. eval is num and is it even
        // % only gives 0,1. so if it's 1 then it's true and code executes
        if(isNaN(input) || input % 2){
            throw new InvalidNumberError("Please provide a valid even numerical value in the form of integer.");
        //}else if  (input % 2 == 1){
              //  throw new InvalidNumberError("Please give an even number.")
        }else{
                alert ("You passed the test");
            }
            
    }catch(error){
        if (error.name == "InvalidNumberError"){
            alert(error.message);
            //recursevly prompts for input while incorrect
            getUserInput();
        } else{
            alert ("Internal Error. Please try again later.");//for errors not predicted
        }
    }
}
getUserInput();