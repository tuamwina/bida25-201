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

if (contactMessage) {
    const contactForm = contactMessage.closest("form");

    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();

        contactMessage.style.display = "block";

        contactForm.reset();

        setTimeout(() => {
            contactMessage.style.display = "none";
        }, 2000);
    });
}

const buttons = document.querySelectorAll(".book-btn");

buttons.forEach(button => {
    button.addEventListener("click", function () {

        // find the message inside the same card
        const message = this.parentElement.querySelector(".bookingMessage");

        message.style.display = "block";

        setTimeout(() => {
            message.style.display = "none";
        }, 2000);
    });
});
