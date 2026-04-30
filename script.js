console.log("JavaScript is connected!"); 
let formCompleted = localStorage.getItem("formCompleted") === "true";
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
window.addEventListener('resize', function() {
  var x = document.getElementById("mylinks");
  if (window.innerWidth >= 992) {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
});

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
        const messageDiv = card.querySelector(".bookingMessage");

        if (!formCompleted) {
            messageDiv.textContent = "Please fill in the booking form first before selecting a room.";

            messageDiv.style.display = "block";
            messageDiv.style.opacity = "1";

            setTimeout(() => {
                window.location.href = "index.html#booking-form";
            }, 1500);

            return;
        }
        const roomName = card.querySelector(".card-title").innerText;

        messageDiv.textContent = "Thank you for choosing Letsha Sanctuary Lodge. A confirmation email with your booking details and next steps will be sent to you shortly. We look forward to hosting you.";

        messageDiv.style.display = "block";

        setTimeout(() => {
            messageDiv.style.opacity = "1";
        }, 10);

        setTimeout(() => {
            messageDiv.style.opacity = "0";
            setTimeout(() => {
                messageDiv.style.display = "none";
            }, 500);
        }, 4000);
    });
});

const bookingForm = document.querySelector("#booking-form form");

if (bookingForm) {
    bookingForm.addEventListener("submit", function(e) {
        e.preventDefault();

        if (!bookingForm.checkValidity()) {
            alert("Please fill in all required fields.");
            return;
        }

        formCompleted = true;

        alert("Thank you! Your booking details have been submitted.");
        
        document.getElementById("booking-form").style.display = "none";
    });
}

