console.log("JavaScript is connected!"); 

function myFunction() {
  var x = document.getElementById("mylinks");
  if (window.innerWidth < 992) {
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
let bookings = [];

buttons.forEach(button => {
    button.addEventListener("click", function (e) {
        e.preventDefault(); 

        const card = this.closest(".card");

        // get room name
        const roomName = card.querySelector(".card-title").innerText;

        // store booking
        bookings.push({
            room: roomName,
            time: new Date().toLocaleString()
        });

        // show feedback message
        const messageDiv = card.querySelector(".bookingMessage");
        messageDiv.textContent = "✅ Thank you! Your booking request has been received.";
        messageDiv.style.display = "block";

        setTimeout(() => {
            messageDiv.style.display = "none";
        }, 4000);
    });
});

