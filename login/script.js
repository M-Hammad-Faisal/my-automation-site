function rotateContainer() {
  const container = document.querySelector(".container");
  container.classList.add("rotate");

  setTimeout(() => {
    container.classList.remove("rotate");
  }, 500);
}

function readyLoginForm() {
  document.getElementById("login-error").style.display = "none";
  document.getElementById("login-username").innerText = "";
  document.getElementById("login-password").innerText = "";
}

function readySignupForm() {
  document.getElementById("signup-error").style.display = "none";
  document.getElementById("signup-username").innerText = "";
  document.getElementById("signup-password").innerText = "";
  document.getElementById("signup-confirm-password").innerText = "";
}

document.getElementById("show-signup").addEventListener("click", function () {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("signup-form").style.display = "flex";
  readyLoginForm();
  rotateContainer();
});

document.getElementById("show-login").addEventListener("click", function () {
  document.getElementById("signup-form").style.display = "none";
  document.getElementById("login-form").style.display = "flex";
  readySignupForm();
  rotateContainer();
});

document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
    if (username === "John" && password === "Doe") {
      document.getElementById("login-error").textContent = "";
      document.getElementById("login-error").style.display = "none";
      alert("Login successful!");
    } else {
      document.getElementById("login-error").style.display = "flex";
      document.getElementById("login-error").textContent =
        "Please fill in all fields.";
    }
  });

document
  .getElementById("signup-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;
    const confirmPassword = document.getElementById(
      "signup-confirm-password",
    ).value;

    if (username === "" || password === "" || confirmPassword === "") {
      document.getElementById("signup-error").textContent =
        "Please fill in all fields.";
      document.getElementById("signup-error").style.display = "flex";
    } else if (password !== confirmPassword) {
      document.getElementById("signup-error").textContent =
        "Passwords do not match.";
      document.getElementById("signup-error").style.display = "flex";
    } else {
      document.getElementById("signup-error").textContent = "";
      document.getElementById("signup-error").style.display = "none";
      alert("Signup successful!");
    }
  });
