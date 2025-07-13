
  const text = "Salaudeen Monsurdeen";
  const target = document.getElementById("typewriter");

  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      target.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 100); // speed of typing (100ms per character)
    }
  }

  // Start the typing effect after page loads
  window.onload = typeWriter;



  



// Initialize EmailJS when DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Replace with your actual public key from EmailJS
  emailjs.init("x6ktri8L2NmwlUOau");

  // Select the contact form
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Send the form using EmailJS
    emailjs.sendForm("service_2rzg33e", "template_opadbt", this)
      .then(function () {
        alert("✅ Message sent successfully!");
        form.reset(); // Clear the form
      }, function (error) {
        alert("❌ Failed to send message.\n" + JSON.stringify(error));
      });
  });
});
