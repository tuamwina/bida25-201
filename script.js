console.log("JavaScript is connected!"); 

function myFunction() {
  var x = document.getElementById("mylinks");
  if (window.innerWidth < 992) {
    // On mobile: toggle between flex and none
    if (x.style.display === "none" || x.style.display === "") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
  }
}

// Add responsive behavior - show menu by default on larger screens
window.addEventListener('resize', function() {
  var x = document.getElementById("mylinks");
  if (window.innerWidth >= 992) {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
});

// Initialize on load
window.addEventListener('load', function() {
  var x = document.getElementById("mylinks");
  if (window.innerWidth >= 992) {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
});

function openForm() {
  document.getElementById("booking-form").style.display = "block";
}

function closeForm() {
  document.getElementById("booking-form").style.display = "none";
}

const contactForm = document.querySelector("#contactMessage").closest("form");
const contactMessage = document.getElementById("contactMessage");

contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    // show message
    contactMessage.style.display = "block";

    // reset form
    accommodationcards.reset();

    // hide after 3 seconds
    setTimeout(() => {
        bookingMessageMessage.style.display = "none";
    }, 2000); // 3 seconds
});

const accommodationcards = document.querySelector("#bookingMessage").closest("cards");
const bookingMessage = document.getElementById("bookingMessage");

accommodationcards.addEventListener("Book Now", function(e) {
    e.preventDefault();

    // show message
    bookingMessage.style.display = "block";

    // reset form
    accommodationcards.reset();

    // hide after 3 seconds
    setTimeout(() => {
        bookingMessage.style.display = "none";
    }, 2000); // 3 seconds
});
