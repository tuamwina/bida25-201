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