
    const texts = [
        "Selamat Datang", // Indonesia
        "Welcome", // English
        "Bienvenido", // Spanish
        "Bienvenue", // French
        "Willkommen", // German
        "أهلاً وسهلاً", // Arabic
        "ようこそ", // Japanese
        "欢迎", // Chinese
        "환영합니다", // Korean
        "Добро пожаловать" // Russian
    ];

    const el = document.getElementById("hero__text");
        let textIndex = 0;
        let charIndex = 0;
        let deleting = false;
        

        // durasi jeda
        const typingSpeed = 120;       // kecepatan ketik
        const deletingSpeed = 70;      // kecepatan hapus
        const endDelay = 1000;         // jeda setelah teks selesai diketik
        const nextDelay = 500;         // jeda sebelum mulai teks berikutnya

        function updateDateTime() {
        const now = new Date();
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        };
        const formatted = now.toLocaleDateString('id-ID', options);
        document.getElementById("datetime").textContent = formatted;
    }

    // Panggil pertama kali
    updateDateTime();
    // Update setiap 1 detik
    setInterval(updateDateTime, 1000);

        function typeEffect() {
            const currentText = texts[textIndex];
            if (!deleting) {
                // Mengetik huruf satu per satu
                if (charIndex < currentText.length) {
                    el.textContent = currentText.slice(0, charIndex + 1);
                    charIndex++;
                    el.classList.remove("pause-cursor");
                    setTimeout(typeEffect, typingSpeed);
                } else {
                    // Teks selesai diketik → tahan sebentar sebelum hapus
                    el.classList.add("pause-cursor");
                    setTimeout(() => {
                    deleting = true;
                    typeEffect();
                    }, endDelay);
                }
            }else {
                // Menghapus huruf satu per satu
                if (charIndex > 0) {
                    charIndex--;
                    el.textContent = currentText.slice(0, charIndex);
                    el.classList.remove("pause-cursor");
                    setTimeout(typeEffect, deletingSpeed);
                } else {
                    // Setelah selesai dihapus → lanjut ke teks berikutnya
                    deleting = false;
                    textIndex = (textIndex + 1) % texts.length;
                    setTimeout(typeEffect, nextDelay);
                }
            }
        }
                    
        typeEffect();