function bookAppointment() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let doctor = document.getElementById("doctor").value;
    let date = document.getElementById("date").value;

    if (!name || !email || !phone || !doctor || !date) {
        alert("Please fill all the fields!");
        return;
    }

    alert(`Appointment booked successfully!\nDoctor: ${doctor}\nDate: ${date}`);
    
    document.querySelector("form").reset();
}
