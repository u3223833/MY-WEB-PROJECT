// assets/js/dropdown.js
const projectsLink = document.getElementById('projectsLink');
const projectsDropdown = document.getElementById('projectsDropdown');

projectsLink.addEventListener('click', function(e) {
  e.preventDefault();
  projectsDropdown.classList.toggle('show');
});

window.addEventListener('click', function(e) {
  if (!e.target.matches('#projectsLink')) {
    if (projectsDropdown.classList.contains('show')) {
      projectsDropdown.classList.remove('show');
    }
  }
});
