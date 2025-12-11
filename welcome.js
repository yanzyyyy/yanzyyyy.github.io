document.addEventListener("DOMContentLoaded", () => {
  const nameSpan = document.getElementById("welcome-name");
  const storedName = localStorage.getItem("atracName");

  if (nameSpan) {
    if (storedName && storedName.trim() !== "") {
      nameSpan.textContent = storedName + "!";
    } else {
      nameSpan.textContent = "Student!"; 
    }
  }
});
