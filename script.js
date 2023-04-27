const form = document.getElementById("registration-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  if (password !== confirmPassword) {
    alert("Passwords do not match");
  } else {
    // Here you can send the form data to the server using AJAX or fetch API
    alert(`Name: ${name}\nEmail: ${email}\nPassword: ${password}`);
  }
});