function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("confirmPassword").value = "";
  document.getElementById("age").value = "";
  document.querySelectorAll(".error").forEach(function (error) {
    error.textContent = "";
  });
}

function showModal() {
  document.getElementById("successModal").style.display = "block";
  document.getElementById("modalOverlay").style.display = "block";
}

function hideModal() {
  document.getElementById("successModal").style.display = "none";
  document.getElementById("modalOverlay").style.display = "none";
  clearForm();
}

document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let valid = true;

    document.querySelectorAll(".error").forEach(function (error) {
      error.textContent = "";
    });
    document.getElementById("successMessage").textContent = "";

    const name = document.getElementById("name").value;
    if (name.length < 3) {
      valid = false;
      document.getElementById("nameError").textContent =
        "Name must be at least 3 characters.";
    }

    const email = document.getElementById("email").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      valid = false;
      document.getElementById("emailError").textContent =
        "Invalid email format.";
    }

    const password = document.getElementById("password").value;
    const passwordPattern =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
    if (!passwordPattern.test(password)) {
      valid = false;
      document.getElementById("passwordError").textContent =
        "Password must be at least 6 characters, contain a number and a special character.";
    }

    const confirmPassword = document.getElementById("confirmPassword").value;
    if (password !== confirmPassword) {
      valid = false;
      document.getElementById("confirmPasswordError").textContent =
        "Passwords do not match.";
    }

    const age = document.getElementById("age").value;
    if (age < 18 || age > 99) {
      valid = false;
      document.getElementById("ageError").textContent =
        "Age must be between 18 and 99.";
    }

    if (valid) {
      showModal();
    }
  });

document.getElementById("closeModal").addEventListener("click", hideModal);
