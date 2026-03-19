function login() {
  const username = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (username === "sameera" && password === "1234") {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("app").style.display = "block";
    showPage("home");
  } else {
    alert("Invalid username or password");
  }
}

function showPage(pageId) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.add("hidden");
  });
  document.getElementById(pageId).classList.remove("hidden");
}
function expandImage(src) {
  document.getElementById("modal").classList.remove("hidden");
  document.getElementById("modalImg").src = src;
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}
