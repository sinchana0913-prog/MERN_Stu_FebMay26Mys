function initSaveContact() {
const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const clearBtn = document.getElementById("clearBtn");
const status = document.getElementById("status");

// 🔹 Save data
form.addEventListener("input", () => {
  const data = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value
  };

  localStorage.setItem("contactFormData", JSON.stringify(data));

  // Show saved message
  status.textContent = "Saved ✅";

  // Remove message after 2 seconds
  setTimeout(() => {
    status.textContent = "";
  }, 2000);
});

// 🔹 Load data
window.addEventListener("DOMContentLoaded", () => {
  const savedData = localStorage.getItem("contactFormData");

  if (savedData) {
    const data = JSON.parse(savedData);

    nameInput.value = data.name || "";
    emailInput.value = data.email || "";
    messageInput.value = data.message || "";
  }
});

// 🔹 Clear data
clearBtn.addEventListener("click", () => {
  // Remove from localStorage
  localStorage.removeItem("contactFormData");

  // Clear form fields
  form.reset();

  // Show message
  status.textContent = "Data cleared 🗑️";

  setTimeout(() => {
    status.textContent = "";
  }, 2000);
});
}