document.addEventListener("DOMContentLoaded", () => {
  // Fade-in saat halaman dimuat
  document.body.classList.add("fade-in");

  // Hamburger menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      navLinks.classList.toggle('show-menu');
    });

    document.addEventListener('click', function (e) {
      if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        navLinks.classList.remove('show-menu');
      }
    });
  }

  // Typing effect
  const text = "And I am a computer science student";
  const typedText = document.querySelector(".typed-text");

  let index = 0;
  let isDeleting = false;

  function type() {
    if (!typedText) return;

    if (isDeleting) {
      typedText.textContent = text.substring(0, index--);
    } else {
      typedText.textContent = text.substring(0, index++);
    }

    if (!isDeleting && index === text.length + 1) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }

    if (isDeleting && index === 0) {
      isDeleting = false;
      setTimeout(type, 1000);
      return;
    }

    setTimeout(type, isDeleting ? 100 : 150);
  }

  if (typedText) {
    type();
  }

  // Navbar scroll effect
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    window.addEventListener("scroll", () => {
      navbar.classList.toggle("scrolled", window.scrollY > 50);
    });
  }

  // Fade-out saat klik link internal
  document.querySelectorAll("a").forEach((link) => {
    const href = link.getAttribute("href");
    const isInternal = href &&
      !href.startsWith("http") &&
      !href.startsWith("mailto:") &&
      !href.startsWith("tel:") &&
      !href.startsWith("#");

    if (isInternal) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        document.body.classList.remove("fade-in");
        const destination = this.href;
        setTimeout(() => {
          window.location.href = destination;
        }, 300);
      });
    }
  });

  // Form kirim ke WhatsApp
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();

      const whatsappNumber = "6287720256409";
      const text = `Halo, saya ${name} (%0AEmail: ${email})%0A%0ASubject: ${subject}%0A%0A${message}`;
      const url = `https://wa.me/${whatsappNumber}?text=${text}`;

      window.open(url, "_blank");
    });
  }
});
