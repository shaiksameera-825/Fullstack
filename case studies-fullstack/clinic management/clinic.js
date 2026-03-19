function signup() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirm = document.getElementById("confirm").value;
  let phone = document.getElementById("phone").value;
  let msg = document.getElementById("msg");

  if (!name || !email || !password || !confirm || !phone) {
    msg.innerText = "All fields are required";
    return;
  }

  if (password !== confirm) {
    msg.innerText = "Passwords do not match";
    return;
  }

  localStorage.setItem(
    "patient",
    JSON.stringify({ name, email, password })
  );

  window.location.href = "login.html";
}
function login() {
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;
  let msg = document.getElementById("loginMsg");

  let patient = JSON.parse(localStorage.getItem("patient"));

  if (!patient || email !== patient.email || password !== patient.password) {
    msg.innerText = "Invalid credentials";
    return;
  }

  window.location.href = "home.html";
}

