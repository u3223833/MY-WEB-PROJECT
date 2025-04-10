// Toggle dropdown when clicking on the Projects button
document.getElementById("projectsButton").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent default action
  this.parentElement.classList.toggle("show");
});

// Close dropdown if clicking outside of the dropdown area
window.addEventListener("click", function(event) {
  if (!event.target.matches("#projectsButton")) {
    const dropdowns = document.getElementsByClassName("dropdown");
    for (let i = 0; i < dropdowns.length; i++) {
      if (dropdowns[i].classList.contains("show")) {
        dropdowns[i].classList.remove("show");
      }
    }
  }
});
