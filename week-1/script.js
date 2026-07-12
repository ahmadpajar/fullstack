const form = document.querySelector(".contact-form");
const statusMessage = document.getElementById("status-message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const subjek = document.getElementById("subjek").value.trim();
    const pesan = document.getElementById("pesan").value.trim();

    if (!nama || !email || !subjek || !pesan) {
        statusMessage.textContent = "pesan tidak terkirim, Harap isi semua field!";
        statusMessage.style.color = "red";
        return;
    }

    statusMessage.textContent = "Pesan berhasil dikirim. Terima kasih, " + nama + "!";
    statusMessage.style.color = "green";

    form.reset();
});
