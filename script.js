// Event listener untuk fungsi pencarian produk
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const productCards = document.querySelectorAll(".product-card");

    searchButton.addEventListener("click", () => {
        const query = searchInput.value.toLowerCase();
        productCards.forEach((card) => {
            const title = card.querySelector("h4").textContent.toLowerCase();
            if (title.includes(query)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});

// Fungsi untuk mendapatkan waktu target (jam 9 pagi)
function getTargetTime() {
    const now = new Date();
    const targetTime = new Date();

    targetTime.setHours(9, 0, 0, 0); // Set target ke jam 9 pagi

    // Jika waktu saat ini sudah lewat dari jam 9 pagi, set ke hari berikutnya
    if (now > targetTime) {
        targetTime.setDate(targetTime.getDate() + 1);
    }

    console.log(`Current Time: ${now}`);
    console.log(`Target Time: ${targetTime}`);
    return targetTime;
}

// Fungsi untuk memulai countdown
function startCountdown() {
    const targetTime = getTargetTime();

    function updateTimer() {
        const now = new Date();
        const timeRemaining = targetTime - now;

        if (timeRemaining > 0) {
            const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
                .toString()
                .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

            console.log(`Formatted Time: ${formattedTime}`);
            document.getElementById("timer").textContent = formattedTime;
        } else {
            document.getElementById("timer").textContent = "Promo Berakhir!";
            clearInterval(timerInterval);
        }
    }

    // Panggil fungsi `updateTimer` setiap detik
    updateTimer(); // Jalankan sekali di awal
    const timerInterval = setInterval(updateTimer, 1000);
}

// Mulai countdown saat DOM sudah siap
document.addEventListener("DOMContentLoaded", function () {
    startCountdown();
});
