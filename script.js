console.log("JavaScript is connected!"); 

function myFunction() {
  var x = document.getElementById("mylinks");
    if (window.getComputedStyle(x).display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}