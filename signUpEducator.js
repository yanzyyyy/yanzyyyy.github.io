document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("educator-form");
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const title = document.getElementById("title").value.trim();
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();

    if (firstName !== "" && lastName !== "") {
      localStorage.setItem("atracName", `${title} ${firstName} ${lastName}`);
    }
    window.location.href = "welcomeEducator.html";
  });

  const togglePassword = document.getElementById("togglePassword");
  const passwordInput = document.getElementById("password");
  const icon = togglePassword.querySelector("i");

  togglePassword.addEventListener("click", function () {
    const isHidden = passwordInput.getAttribute("type") === "password";
    passwordInput.setAttribute("type", isHidden ? "text" : "password");
    icon.className = isHidden ? "fi fi-ss-eye-crossed" : "fi fi-bs-eye";
  });
});