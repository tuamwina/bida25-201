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
    const contactForm = document.querySelector(".contact-form form") || contactMessage.closest("form");

    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();

            if (!contactForm.checkValidity()) {
                contactForm.reportValidity();
                return;
            }

            alert("Thank you for contacting Letsha Sanctuary Lodge. Your message has been received successfully. Our team will get back to you within 24 hours.");
            contactMessage.style.display = "block";

            contactForm.reset();
        });
    }
}
const buttons = document.querySelectorAll(".book-btn");

function detectAccommodationPage() {
  try {

    if (
      document.querySelector('.accommodation-section') ||
      document.querySelector('.accommodation-cards')
    ) return true;

  
    const href = window.location.href.toLowerCase();
    const path = window.location.pathname.toLowerCase();

    return (
      href.includes('accommodation.html') ||
      path.includes('accommodation.html')
    );

  } catch (err) {
    console.error("Error detecting accommodation page", err);
    return false;
  }
}

buttons.forEach(button => {
  button.addEventListener("click", function (e) {
    e.preventDefault();

    const isAccommodationPage = detectAccommodationPage();

    console.log("book-btn clicked");

    if (isAccommodationPage) {

      alert("Thank you for choosing Letsha Sanctuary Lodge. A confirmation email with your booking details and next steps will be sent to you shortly. We look forward to hosting you.");

    } else {

      openForm();

    }
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

        localStorage.setItem("bookingFormCompleted", "true");
        document.getElementById("booking-form").style.display = "none";
        window.location.href = "accommodation.html";
    });
}

