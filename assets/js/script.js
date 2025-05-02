document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".project-card");
    cards.forEach(card => {
      card.addEventListener("click", () => {
        card.classList.toggle("expanded");
      });
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".slide-in");
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          // Optional: Uncomment below if you only want the animation to happen once
          // observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2
    });
  
    sections.forEach(section => {
      observer.observe(section);
    });
  });

  // Scroll reveal for timeline
document.addEventListener("DOMContentLoaded", () => {
    const reveals = document.querySelectorAll(".reveal");
  
    const revealOnScroll = () => {
      const triggerBottom = window.innerHeight * 0.85;
  
      reveals.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
  
        if (elementTop < triggerBottom) {
          el.classList.add("active");
        }
      });
    };
  
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // trigger once on load
  });