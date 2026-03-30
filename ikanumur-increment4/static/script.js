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
/* Part 4: Active Navigation Bar */
function ActiveNav() {
    // Select all navigation links inside the nav_bar
    const navLinks = document.querySelectorAll('.nav_bar a');

    // Iterate over each link
    navLinks.forEach(link => {
        // Check if the link's href matches the current window location
        if (window.location.href === link.href) {
            // Add the 'active' class to highlight the current page
            link.classList.add("active");
        }
    });
}

// Call the function immediately
ActiveNav();

/* Part 5: jQuery Read More / Read Less Toggle */
$(document).ready(function(){
    
    // When the "Read More" button is clicked
    $("#readMore").click(function(){
        $("#longIntro").show();  // Show the long text
        $("#readLess").show();   // Show the "Read Less" button
        $(this).hide();          // Hide the "Read More" button
    });

    // When the "Read Less" button is clicked
    $("#readLess").click(function(){
        $("#longIntro").hide();  // Hide the long text
        $("#readLess").hide();   // Hide the "Read Less" button
        $("#readMore").show();   // Show the "Read More" button
    });
    
});

/* Part 6 Functions */

// 1. Reveal the hidden purchase form
function showPurchaseForm() {
    var formSection = document.getElementById("ticketPurchaseSection");
    if (formSection) {
        formSection.style.display = "block"; // Shows the form
        formSection.scrollIntoView({ behavior: 'smooth' }); // Better UX
    }
}

// 2. Display the specific alert message upon submission
function submitPurchase() {
    alert("Redirecting to payment system.");
}