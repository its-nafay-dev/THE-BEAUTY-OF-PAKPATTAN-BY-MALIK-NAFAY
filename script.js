document.addEventListener("DOMContentLoaded", () => {
    initAudioController();
    initSpotFilterSystem();
});

// Sound Engine Controller
function initAudioController() {
    const soundBtn = document.getElementById("btn-sound-toggle");
    const soundStatus = document.getElementById("sound-status");
    const audioEl = document.getElementById("bg-audio");
    let isPlaying = false;

    soundBtn.addEventListener("click", () => {
        if (!isPlaying) {
            audioEl.play().then(() => {
                isPlaying = true;
                soundStatus.innerText = "Ambient Sound: ON";
                soundBtn.style.background = "var(--accent-gold)";
                soundBtn.style.color = "var(--text-dark)";
            }).catch(err => console.log("Audio permission pending"));
        } else {
            audioEl.pause();
            isPlaying = false;
            soundStatus.innerText = "Ambient Sound: OFF";
            soundBtn.style.background = "rgba(212, 175, 55, 0.15)";
            soundBtn.style.color = "var(--secondary-white)";
        }
    });
}

// Interactive Category Filter
function initSpotFilterSystem() {
    const filterBtns = document.querySelectorAll(".filter-btn");
    const spotCards = document.querySelectorAll(".spot-card");

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filterValue = btn.getAttribute("data-filter");

            spotCards.forEach(card => {
                if (filterValue === "all" || card.getAttribute("data-category") === filterValue) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
}
