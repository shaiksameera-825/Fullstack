function signup() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const msg = document.getElementById("msg");

  if (!name || !email || !password || !confirmPassword) {
    msg.textContent = "All fields are required";
    msg.style.color = "red";
    return;
  }

  if (password !== confirmPassword) {
    msg.textContent = "Passwords do not match";
    msg.style.color = "red";
    return;
  }

  const user = { name, email, password };
  localStorage.setItem("user", JSON.stringify(user));

  msg.textContent = "Signup successful! Redirecting to login...";
  msg.style.color = "green";

  setTimeout(() => {
    window.location.href = "login.html";
  }, 1500);
}
function login() {
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;
  let msg = document.getElementById("loginMsg");

  let user = JSON.parse(localStorage.getItem("user"));

  if (!email || !password) {
    msg.textContent = "All fields are required";
    return;
  }

  if (!user || user.email !== email || user.password !== password) {
    msg.textContent = "Invalid email or password";
    return;
  }

  localStorage.setItem("loggedIn", "true");
  msg.textContent = "Login successful";
  window.location.href = "index.html";
}
