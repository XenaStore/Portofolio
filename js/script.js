document.addEventListener("DOMContentLoaded", () => {
  // Hamburger menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', function (e) {
    e.stopPropagation(); // Hindari penutupan langsung saat diklik
    navLinks.classList.toggle('show-menu');
  });

  document.addEventListener('click', function (e) {
    if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
      navLinks.classList.remove('show-menu');
    }
  });

  // Typing effect
  const text = "And I am a computer science student";
  const typedText = document.querySelector(".typed-text");
  const cursor = document.querySelector(".cursor");

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
      setTimeout(type, 1000); // Jeda sebelum menghapus
      return;
    }

    if (isDeleting && index === 0) {
      isDeleting = false;
      setTimeout(type, 500); // Jeda sebelum mengetik lagi
      return;
    }

    setTimeout(type, isDeleting ? 100 : 150);
  }

  // 🔥 Ini bagian penting yang harus ditambahkan
  if (typedText) {
    type();
  }

  // Navbar scroll effect
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  });
});
