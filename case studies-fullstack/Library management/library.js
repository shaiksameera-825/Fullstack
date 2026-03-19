// Check login status
const loggedInUser = localStorage.getItem("loggedInUser");
const loginLink = document.getElementById("loginLink");
const signupLink = document.getElementById("signupLink");
const logoutBtn = document.getElementById("logoutBtn");

// If user is logged in
if (loggedInUser) {
  loginLink.style.display = "none";
  signupLink.style.display = "none";
  logoutBtn.style.display = "inline-block";
} 
// If user is NOT logged in
else {
  logoutBtn.style.display = "none";
}

// Logout function
function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
}
function checkLoginStatus() {
  let isLoggedIn = localStorage.getItem("loggedIn");

  let loginLink = document.getElementById("loginLink");
  let signupLink = document.getElementById("signupLink");
  let logoutBtn = document.getElementById("logoutBtn");

  if (isLoggedIn === "true") {
    if (loginLink) loginLink.style.display = "none";
    if (signupLink) signupLink.style.display = "none";
    if (logoutBtn) logoutBtn.style.display = "inline-block";
  } else {
    if (loginLink) loginLink.style.display = "inline-block";
    if (signupLink) signupLink.style.display = "inline-block";
    if (logoutBtn) logoutBtn.style.display = "none";
  }
}

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}
checkLoginStatus();
function setActiveNav() {
  let links = document.querySelectorAll(".nav-links a");
  let currentPage = window.location.pathname.split("/").pop();

  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
}
setActiveNav();

