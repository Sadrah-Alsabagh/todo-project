'use strict';
var userName = prompt("Enter your name, please");

var userGender = prompt("Enter your gender, please.(Male, Female)");
if(userGender == "Male" || userGender == "Female")
{userGender == true;}
    else{ userGender = false;}
    

var userAge = prompt("Enter your age, please");
if(userAge<= 0){
    alert("The age is wrong");
}

var userAnswer = confirm("Do you want to see (press ok) welcoming message or skip it (press cancle)?");

function welcome(name){ 
    if(userGender == "Male")
    {
    alert("Hello Mr " +name);
    } 
    else if(userGender == "Female")
    {
        alert("Hello Ms " +name);
    } 
    else
    {
        alert("Hello  " +name);
    }
}
if(userAnswer){
   welcome(userName);
    }
   
     let answers =[];
     answers.push(prompt("Do you like to make a list of things to do?"));
     answers.push(prompt("Do you like to learn time managment?"));
    answers.push(prompt("Do you like coding?"));

      for (let index = 0; index < answers.length; index++) {
        if(answers[index] == "")
        {answers[index] ="Invalid";}
        console.log(answers[index]);   
     } 
     
    
    
    
    
