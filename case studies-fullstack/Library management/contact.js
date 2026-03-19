function submitContact(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let msg = document.getElementById("msg");

  if (name === "" || email === "" || message === "") {
    msg.textContent = "All fields are required";
    msg.style.color = "red";
    return;
  }

  msg.textContent = "Message sent successfully!";
  msg.style.color = "green";

  document.querySelector("form").reset();
}
