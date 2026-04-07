/* ---------------------------
   JavaScript basics section
---------------------------- */
var x = 5;
var y = 7;
var z = x + y;
console.log(z);

var A = "Hello ";
var B = "world!";
var C = A + B;
console.log(C);

function SumnPrint(x1, x2) {
    var result = x1 + x2;
    console.log(result);
}

SumnPrint(x, y);
SumnPrint(A, B);

if (C.length > z) {
    console.log(C);
} else if (C.length < z) {
    console.log(z);
} else {
    console.log("good job!");
}

var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "Banana") {
            alert("Banana found!");
        }
    }
}

function findTheBananaForEach(arr) {
    arr.forEach(function(item) {
        if (item === "Banana") {
            alert("Banana found!");
        }
    });
}

/* ---------------------------
   Pricing
---------------------------- */
var TICKET_PRICES = {
    General: 20,
    Student: 14,
    Member: 10
};

/* ---------------------------
   Global initialization
---------------------------- */
function initializePage() {
    addYear();
    greeting(new Date().getHours());
    ActiveNav();
    initializeMap();
    setupReadToggle();
    setupAccordion();
    setupCheckout();
    setMinDate();
    showSlide(currentSlideIndex);
    updateConfirmationNav();
}

/* ---------------------------
   Greeting
---------------------------- */
function greeting(h) {
    var greetingElement = document.getElementById("greeting");

    if (greetingElement) {
        if (h < 5 || h >= 20) {
            greetingElement.innerHTML = "Good evening, welcome to MonoMuse";
        } else if (h < 12) {
            greetingElement.innerHTML = "Good morning, welcome to MonoMuse";
        } else if (h < 18) {
            greetingElement.innerHTML = "Good afternoon, welcome to MonoMuse";
        } else {
            greetingElement.innerHTML = "Good evening, welcome to MonoMuse";
        }
    }
}

/* ---------------------------
   Footer year
---------------------------- */
function addYear() {
    var yearParagraph = document.getElementById("copyYear");
    if (yearParagraph) {
        var currentYear = new Date().getFullYear();
        yearParagraph.innerHTML = "&copy; " + currentYear + " MonoMuse. All rights reserved.";
    }
}

/* ---------------------------
   Active nav
---------------------------- */
function ActiveNav() {
    var navLinks = document.querySelectorAll(".nav_bar a");
    var currentPath = window.location.pathname.split("/").pop();

    if (currentPath === "") {
        currentPath = "index.html";
    }

    navLinks.forEach(function(link) {
        var linkPath = link.getAttribute("href");
        if (!linkPath || linkPath === "javascript:void(0);") return;

        var normalizedLink = linkPath.split("/").pop().split("#")[0];
        if (normalizedLink === currentPath) {
            link.classList.add("active");
        }
    });
}

/* ---------------------------
   Show confirmation nav only after purchase
---------------------------- */
function updateConfirmationNav() {
    var storedOrder = localStorage.getItem("monoMuseOrder");
    var confirmationLink = document.getElementById("confirmationNav");

    if (confirmationLink && storedOrder) {
        confirmationLink.classList.remove("hidden-nav-link");
    }
}

/* ---------------------------
   Mobile nav
---------------------------- */
function toggleNav() {
    var nav = document.getElementById("myTopnav");
    if (nav.className === "nav_bar") {
        nav.className += " responsive";
    } else {
        nav.className = "nav_bar";
    }
}

/* ---------------------------
   Read more / less
---------------------------- */
function setupReadToggle() {
    if (typeof $ !== "undefined" && $("#readMore").length) {
        $("#readMore").off("click").on("click", function() {
            $("#longIntro").slideDown();
            $("#readLess").show();
            $(this).hide();
        });

        $("#readLess").off("click").on("click", function() {
            $("#longIntro").slideUp();
            $("#readMore").show();
            $(this).hide();
        });
    }
}

/* ---------------------------
   Accordion
---------------------------- */
function setupAccordion() {
    if (typeof $ !== "undefined" && $(".accordion").length) {
        $(".accordion").off("click").on("click", function() {
            $(this).next(".panel").slideToggle();
        });
    }
}

/* ---------------------------
   Donation / membership
---------------------------- */
function showDonationMessage() {
    var message = document.getElementById("donationMessage");
    if (message) {
        message.textContent = "For donations, contact giving@monomuse.org or ask at the museum front desk during open hours.";
    }
}

function submitMembership() {
    var name = document.getElementById("memberName");
    var email = document.getElementById("memberEmail");
    var level = document.getElementById("memberLevel");
    var message = document.getElementById("memberMessage");

    if (!name || !email || !level || !message) {
        return;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.value.trim() === "" || email.value.trim() === "") {
        message.textContent = "Please enter your name and email to sign up.";
        return;
    }

    if (!emailPattern.test(email.value.trim())) {
        message.textContent = "Please enter a valid email address.";
        return;
    }

    message.textContent = "Thank you, " + name.value.trim() + "! Your " + level.value + " membership interest was recorded.";
    name.value = "";
    email.value = "";
    level.value = "Individual";
}

/* ---------------------------
   Slideshow
---------------------------- */
var currentSlideIndex = 0;

function showSlide(index) {
    var slides = document.querySelectorAll(".slide");
    var dots = document.querySelectorAll(".dot");

    if (!slides.length) return;

    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = index;
    }

    slides.forEach(function(slide) {
        slide.classList.remove("active-slide");
    });

    dots.forEach(function(dot) {
        dot.classList.remove("active-dot");
    });

    slides[currentSlideIndex].classList.add("active-slide");
    if (dots[currentSlideIndex]) {
        dots[currentSlideIndex].classList.add("active-dot");
    }
}

function changeSlide(step) {
    showSlide(currentSlideIndex + step);
}

function goToSlide(index) {
    showSlide(index);
}

/* ---------------------------
   Leaflet map
---------------------------- */
function initializeMap() {
    var mapElement = document.getElementById("map");

    if (mapElement && typeof L !== "undefined" && !mapElement.dataset.loaded) {
        var museumLat = 40.4448;
        var museumLng = -79.9435;

        var map = L.map("map").setView([museumLat, museumLng], 14);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "&copy; OpenStreetMap contributors"
        }).addTo(map);

        L.marker([museumLat, museumLng]).addTo(map)
            .bindPopup("MonoMuse - Pittsburgh")
            .openPopup();

        mapElement.dataset.loaded = "true";
    }
}

/* ---------------------------
   Checkout logic
---------------------------- */
function setMinDate() {
    var visitDateInput = document.getElementById("visitDate");
    if (visitDateInput) {
        var today = new Date().toISOString().split("T")[0];
        visitDateInput.min = today;
    }
}

function getSelectedTicketPrice() {
    var ticketTypeInput = document.getElementById("ticketType");
    if (!ticketTypeInput) return 20;

    var selectedType = ticketTypeInput.value;
    if (TICKET_PRICES[selectedType] !== undefined) {
        return TICKET_PRICES[selectedType];
    }
    return 20;
}

function calculateTotal() {
    var quantityInput = document.getElementById("quantity");
    var totalPriceElement = document.getElementById("totalPrice");
    var selectedTicketPriceElement = document.getElementById("selectedTicketPrice");

    if (!quantityInput || !totalPriceElement) return 0;

    var quantity = parseInt(quantityInput.value, 10);

    if (isNaN(quantity) || quantity < 1) {
        quantity = 1;
    }

    if (quantity > 10) {
        quantity = 10;
        quantityInput.value = 10;
    }

    var ticketPrice = getSelectedTicketPrice();
    var total = quantity * ticketPrice;

    if (selectedTicketPriceElement) {
        selectedTicketPriceElement.textContent = "$" + ticketPrice;
    }

    totalPriceElement.textContent = "$" + total;
    return total;
}

function clearErrors() {
    var ids = [
        "visitDateError",
        "ticketTypeError",
        "quantityError",
        "emailError",
        "zipCodeError"
    ];

    ids.forEach(function(id) {
        var el = document.getElementById(id);
        if (el) {
            el.textContent = "";
        }
    });
}

function validateCheckoutForm() {
    clearErrors();

    var valid = true;

    var visitDate = document.getElementById("visitDate");
    var ticketType = document.getElementById("ticketType");
    var quantity = document.getElementById("quantity");
    var email = document.getElementById("email");
    var zipCode = document.getElementById("zipCode");

    if (!visitDate || !ticketType || !quantity || !email || !zipCode) return false;

    if (visitDate.value.trim() === "") {
        document.getElementById("visitDateError").textContent = "Please select a visit date.";
        valid = false;
    }

    if (ticketType.value.trim() === "") {
        document.getElementById("ticketTypeError").textContent = "Please choose a ticket type.";
        valid = false;
    }

    var quantityValue = parseInt(quantity.value, 10);
    if (isNaN(quantityValue) || quantityValue < 1 || quantityValue > 10) {
        document.getElementById("quantityError").textContent = "Enter a whole number from 1 to 10.";
        valid = false;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "") {
        document.getElementById("emailError").textContent = "Please enter your email.";
        valid = false;
    } else if (!emailPattern.test(email.value.trim())) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        valid = false;
    }

    var zipPattern = /^\d{5}$/;
    if (zipCode.value.trim() !== "" && !zipPattern.test(zipCode.value.trim())) {
        document.getElementById("zipCodeError").textContent = "Zip code must be exactly 5 digits.";
        valid = false;
    }

    return valid;
}

function setupCheckout() {
    var checkoutForm = document.getElementById("checkoutForm");
    var quantityInput = document.getElementById("quantity");
    var ticketTypeInput = document.getElementById("ticketType");

    if (quantityInput) {
        quantityInput.addEventListener("input", calculateTotal);
    }

    if (ticketTypeInput) {
        ticketTypeInput.addEventListener("change", calculateTotal);
    }

    if (checkoutForm) {
        calculateTotal();

        checkoutForm.addEventListener("submit", function(event) {
            event.preventDefault();

            if (validateCheckoutForm()) {
                var orderData = {
                    visitDate: document.getElementById("visitDate").value,
                    ticketType: document.getElementById("ticketType").value,
                    quantity: document.getElementById("quantity").value,
                    email: document.getElementById("email").value.trim(),
                    mailingList: document.getElementById("mailingList").checked ? "Yes" : "No",
                    total: calculateTotal()
                };

                localStorage.setItem("monoMuseOrder", JSON.stringify(orderData));
                window.location.href = "confirmation.html";
            }
        });
    }
}

/* ---------------------------
   Confirmation page
---------------------------- */
function loadConfirmation() {
    var storedOrder = localStorage.getItem("monoMuseOrder");
    if (!storedOrder) return;

    var order = JSON.parse(storedOrder);

    var confirmDate = document.getElementById("confirmDate");
    var confirmType = document.getElementById("confirmType");
    var confirmQuantity = document.getElementById("confirmQuantity");
    var confirmEmail = document.getElementById("confirmEmail");
    var confirmMailing = document.getElementById("confirmMailing");
    var confirmTotal = document.getElementById("confirmTotal");

    if (confirmDate) confirmDate.textContent = order.visitDate;
    if (confirmType) confirmType.textContent = order.ticketType;
    if (confirmQuantity) confirmQuantity.textContent = order.quantity;
    if (confirmEmail) confirmEmail.textContent = order.email;
    if (confirmMailing) confirmMailing.textContent = order.mailingList;
    if (confirmTotal) confirmTotal.textContent = "$" + order.total;
}