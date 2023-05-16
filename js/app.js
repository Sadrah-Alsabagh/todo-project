'use strict';

let userAge, userName, userGender, userAnswers = [];

function getName() {
    userName = prompt("Enter your name, please");
}


function getGender() {
    userGender = prompt("Enter your gender, please.(Male, Female)");
    if (userGender == "Male" || userGender == "Female") { userGender == true; }
    else { userGender = false; }
}

function getAge() {
    userAge = prompt("Enter your age, please");
    if (userAge <= 0) {
        alert("The age is wrong");
    }
}

function welcomeMessage() {
    let userAnswer = confirm(`Do you want to see welcoming message or skip it?`);
    if (userAnswer) {
        ShowWelcomeMessage();
    }
}

function ShowWelcomeMessage() {
    if (userGender == "Male") {
        alert("Hello Mr " + userName);
    }
    else if (userGender == "Female") {
        alert("Hello Ms " + userName);
    }
    else {
        alert("Hello  " + userName);
    }
}

function userQuestions() {
    userAnswers.push(prompt("Do you like to make a list of things to do?"));
    userAnswers.push(prompt("Do you like to learn time managment?"));
    userAnswers.push(prompt("Do you like coding?"));
}

function printConsole() {
    for (let index = 0; index < userAnswers.length; index++) {
        if (userAnswers[index] == "") { userAnswers[index] = "Invalid"; }
        console.log(userAnswers[index]);
    }
}


getName();
getGender();
getAge();
welcomeMessage();
userQuestions();
printConsole();

