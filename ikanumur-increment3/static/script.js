// Part 2: JavaScript Basics

// Variable declarations and console output
var x = 5;
var y = 7;
var z = x + y;
console.log(z);

var A = "Hello ";
var B = "world!";
var C = A + B;
console.log(C);

// Basic function
function SumnPrint(x1, x2) {
    var result = x1 + x2;
    console.log(result);
}

SumnPrint(x, y);
SumnPrint(A, B);

// Conditional statement
if (C.length > z) {
    console.log(C);
} else if (C.length < z) {
    console.log(z);
} else {
    console.log("good job!");
}

// Arrays + loops
var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

// Function using a for loop
function findTheBanana(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "Banana") {
            alert("Banana found!");
        }
    }
}

// findTheBanana(L1);
// findTheBanana(L2);

// Function rewritten using forEach()
function findTheBananaForEach(arr) {
    arr.forEach(function(item) {
        if (item === "Banana") {
            alert("Banana found!");
        }
    });
}

//findTheBananaForEach(L1);
//findTheBananaForEach(L2);

// Part 3: Time-Based Greeting

var now = new Date();
var hour = now.getHours();

function greeting(h) {
    var greetingElement = document.getElementById("greeting");

    if (greetingElement) {
        if (h < 5 || h >= 20) {
            greetingElement.innerHTML = "Good night, welcome to the MonoMuse Museum";
        } else if (h < 12) {
            greetingElement.innerHTML = "Good morning, welcome to the MonoMuse Museum";
        } else if (h < 18) {
            greetingElement.innerHTML = "Good afternoon, welcome to the MonoMuse Museum";
        } else {
            greetingElement.innerHTML = "Good evening, welcome to the MonoMuse Museum";
        }
    }
}

greeting(hour);
// Part 4: Dynamic Footer Year

function addYear() {
    var yearParagraph = document.getElementById("copyYear");

    if (yearParagraph) {
        var currentYear = new Date().getFullYear();
        yearParagraph.innerHTML = "&copy; " + currentYear + " MonoMuse. All rights reserved.";
    }
}