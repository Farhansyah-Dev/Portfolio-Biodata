emailjs.init("YOUR_PUBLIC_KEY");

  // Tangkap form
    document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Tombol berubah saat loading
    const btn = this.querySelector(".btn");
    btn.disabled = true;
    btn.textContent = "Mengirim...";

    // Kirim form via EmailJS
    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
        .then(() => {
        // Alert sukses
        Swal.fire({
            icon: "success",
            title: "Berhasil!",
            text: "Pesan kamu sudah terkirim, terima kasih 🙌",
            confirmButtonColor: "#007bff"
        });
        this.reset();
    })
        .catch(() => {
        // Alert gagal
        Swal.fire({
            icon: "error",
            title: "Gagal!",
            text: "Terjadi kesalahan saat mengirim pesan, coba lagi ya.",
            confirmButtonColor: "#d33"
        });
    })
        .finally(() => {
        // Balikkan tombol seperti semula
        btn.disabled = false;
        btn.textContent = "Kirim Pesan";
    });
});