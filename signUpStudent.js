document.getElementById("signup-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();

  localStorage.removeItem("atracName");

  localStorage.setItem("atracName", firstName + " " + lastName);

  window.location.href = "welcome.html";
});

const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");
const icon = togglePassword.querySelector("i");

togglePassword.addEventListener("click", function () {
  const isHidden = passwordInput.getAttribute("type") === "password";
  passwordInput.setAttribute("type", isHidden ? "text" : "password");

  icon.className = isHidden ? "fi fi-ss-eye-crossed" : "fi fi-bs-eye";
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signup-form");
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();

    if (firstName !== "" && lastName !== "") {
    
      localStorage.setItem("atracName", `${firstName} ${lastName}`);
    }

    window.location.href = "welcome.html";
  });

  const togglePassword = document.getElementById("togglePassword");
  if (togglePassword) {
    const passwordInput = document.getElementById("password");
    const icon = togglePassword.querySelector("i");

    togglePassword.addEventListener("click", function () {
      const isHidden = passwordInput.getAttribute("type") === "password";
      passwordInput.setAttribute("type", isHidden ? "text" : "password");
      icon.className = isHidden ? "fi fi-ss-eye-crossed" : "fi fi-bs-eye";
    });
  }
});
