document.addEventListener("DOMContentLoaded", function () {
  // === Typewriter Effect ===
  const text = "Salaudeen Monsurdeen";
  const target = document.getElementById("typewriter");

  let index = 0;
  function typeWriter() {
    if (index < text.length) {
      target.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 100);
    }
  }
  typeWriter();

  // === EmailJS Initialization ===
  emailjs.init("x6ktri8L2NmwlUOau");

  const form = document.getElementById("contact-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    emailjs.sendForm("service_2rzg33e", "template_opadbt", this)
      .then(function () {
        alert("✅ Message sent successfully!");
        form.reset();
      }, function (error) {
        alert("❌ Failed to send message.\n" + JSON.stringify(error));
      });
  });

  // === Hamburger Menu Toggle ===
  const menuIcon = document.getElementById("menu-icon");
  const navigation = document.getElementById("navigation");

  menuIcon.addEventListener("click", function () {
    navigation.classList.toggle("active");
  });

  // Optional: close menu on link click (for mobile UX)
  document.querySelectorAll(".navigation a").forEach(link => {
    link.addEventListener("click", () => {
      navigation.classList.remove("active");
    });
  });
});
