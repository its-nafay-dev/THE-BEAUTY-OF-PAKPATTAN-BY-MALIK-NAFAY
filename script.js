/* ==========================================================
   THE BEAUTY OF PAKPATTAN - COMPREHENSIVE JAVASCRIPT ENGINE
   Developer: IT'S NAFAY DEV | Author: Malik Nafay
   ========================================================== */

// FULL DETAILED DATA STORE FOR 12 LANDMARKS
const LANDMARKS_DATA = {
    "baba-farid": {
        title: "Darbar Hazrat Baba Farid Ud Din Ganj E Shakar (R.A)",
        category: "Spiritual Site",
        image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1000&q=80",
        history: "Hazrat Baba Fariduddin Ganjshakar (1173–1266) was a prominent 12th-century Punjabi Muslim preacher, mystic, and poet belonging to the Chisti Sufi Order. His shrine established Pakpattan as a major spiritual ferry across medieval South Asia. His Punjabi verses are famously enshrined in the Guru Granth Sahib.",
        tourist: "Visitors can witness traditional evening Qawwali, experience the peaceful atmosphere of the inner courtyard, and observe the historic Bahisti Darwaza (Gate of Paradise) during the annual Urs festival.",
        location: "Central Old City, Pakpattan Sharif",
        timings: "Open 24/7 (Special gatherings during Thursday evenings)"
    },
    "sair-gah": {
        title: "Sair Gah Park Pakpattan",
        category: "Public Recreation",
        image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=1000&q=80",
        history: "Developed as part of Pakpattan's modern urban beautification initiative, Sair Gah Park serves as a critical environmental green lung for the city, preserving native flora and providing public health infrastructure.",
        tourist: "Features manicured green lawns, illuminated walking paths, children's play zones, and refreshment stalls. Ideal for morning walks and family picnics.",
        location: "Stadium Road, Pakpattan",
        timings: "06:00 AM - 10:00 PM Daily"
    },
    "town-hall": {
        title: "Town Hall Pakpattan",
        category: "Administrative Heritage",
        image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=1000&q=80",
        history: "Constructed during the late colonial period, the Town Hall has housed local governance offices for over a century. Its architectural framework showcases red brickwork, arched porticos, and classic Punjab administrative design.",
        tourist: "An excellent photo stop for architecture lovers. Situated close to civic centers and historic administrative offices.",
        location: "Civil Lines District, Pakpattan",
        timings: "09:00 AM - 05:00 PM (Official Working Hours)"
    },
    "masjid-waris": {
        title: "Masjid Waris Shah",
        category: "Religious Monument",
        image: "https://images.unsplash.com/photo-1590076175571-4b5459efb08c?auto=format&fit=crop&w=1000&q=80",
        history: "Associated with the legacy of Waris Shah, the legendary Punjabi Sufi poet who authored Heer Ranjha. This mosque represents spiritual devotion and classic Islamic brick architecture.",
        tourist: "Offers peaceful prayer halls, tiled courtyards, and a quiet atmosphere for spiritual reflection amidst the bustling old city.",
        location: "Old City District, Pakpattan",
        timings: "Open daily for all five Islamic prayer times"
    },
    "canal-park": {
        title: "Canal Park Pakpattan",
        category: "Waterfront Recreation",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80",
        history: "Built along the embankment of the historical Pakpattan Canal system developed to irrigate Punjab's agricultural belt. The area was transformed into a public recreational strip.",
        tourist: "Enjoy canal-side seating, shade under ancient banyan and eucalyptus trees, and boat-watching during high water flow seasons.",
        location: "Canal Bank Road, Pakpattan",
        timings: "Sunrise to Sunset"
    },
    "panipat-darbar": {
        title: "Panipat Darbar Sharif",
        category: "Historical Shrine",
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80",
        history: "Linked historically with regional Sufi saints originating from the Panipat lineage. The shrine represents intercultural Sufi connections across historical North India and Punjab.",
        tourist: "Features delicate floral woodwork, serene devotional quarters, and community food distributions (Langar).",
        location: "Eastern Suburbs, Pakpattan",
        timings: "05:00 AM - 10:00 PM Daily"
    },
    "railway-station": {
        title: "Pakpattan Railway Station",
        category: "Transport Heritage",
        image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1000&q=80",
        history: "Opened in the early 20th century under North Western Railway, this station played a central role in agricultural logistics, connecting local grain markets with major provincial hubs.",
        tourist: "Great spot for photography featuring vintage mechanical signaling equipment, historic station architecture, and active train passages.",
        location: "Station Road, Pakpattan",
        timings: "24 Hours Operational"
    },
    "aziz-makki": {
        title: "Darbar Hazrat Khawaja Aziz Makki (R.A)",
        category: "Sufi Shrine",
        image: "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=1000&q=80",
        history: "Dedicated to the esteemed Sufi scholar Hazrat Khawaja Aziz Makki (R.A), who traveled from the Arabian Peninsula to preach spiritual ethics in Punjab.",
        tourist: "A serene pilgrimage location popular for individual prayers, recitation, and peaceful architectural courtyards.",
        location: "Aziz Makki Road, Pakpattan",
        timings: "06:00 AM - 09:00 PM Daily"
    },
    "dargah-bazar": {
        title: "Dargah Bazar Pakpattan",
        category: "Commercial Market",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80",
        history: "Evolved over centuries around the central shrine to cater to pilgrims, traders, and local residents. It remains the commercial center of Pakpattan.",
        tourist: "Famous for traditional Punjabi sweets (Sohan Halwa), attar (natural perfumes), prayer rugs, traditional footwear (Khussa), and handicrafts.",
        location: "Perimeter of Baba Farid Shrine",
        timings: "09:00 AM - 11:00 PM Daily"
    },
    "baba-farid-park": {
        title: "Baba Farid Memorial Park",
        category: "Memorial Park",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
        history: "Established by municipal authorities to honor the saint's cultural contributions through a dedicated ecological space for civic gatherings.",
        tourist: "Includes paved jogging tracks, outdoor fitness gear, decorative fountains, and expansive grassy grounds.",
        location: "Bypass Road, Pakpattan",
        timings: "05:00 AM - 09:00 PM Daily"
    },
    "jamal-chok": {
        title: "Jamal Chok Multi-Color Tower",
        category: "Modern Landmark",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
        history: "Constructed as part of modern city beautification, Jamal Chok serves as a key traffic intersection and urban landmark symbol in modern Pakpattan.",
        tourist: "Features brilliant multi-colored LED illuminated tower structures best appreciated during night drives and evening city tours.",
        location: "Jamal Chowk Roundabout, Pakpattan",
        timings: "Accessible 24/7 (Night illuminations start at dusk)"
    },
    "kumhariwala": {
        title: "Kumhariwala Hydro Power Project Area",
        category: "Industrial / Ecological Site",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=80",
        history: "A modern renewable hydro energy project built along the local canal system to generate clean power for regional industrial grids.",
        tourist: "Offers technical visitors and tourists a view of modern canal water engineering set against scenic rural Punjab landscapes.",
        location: "Canal Headworks, Pakpattan Outskirts",
        timings: "Daytime Visits Only"
    }
};

// INITIALIZATION ON DOM READY
document.addEventListener("DOMContentLoaded", () => {
    initPreloader();
    initNavbarScroll();
    initHeroSlideshow();
    initAudioPlayer();
    initLandmarkSearchAndFilter();
    initLandmarkModalSystem();
    initLightboxSystem();
    initAnimatedStatsCounter();
    initNewsletterForm();
    initMobileNavigation();
});

// 1. PRELOADER SYSTEM
function initPreloader() {
    const preloader = document.getElementById("preloader");
    const progressBar = document.getElementById("loader-progress");
    let progress = 0;

    const interval = setInterval(() => {
        progress += 15;
        if (progressBar) progressBar.style.width = progress + "%";
        
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                if (preloader) {
                    preloader.style.opacity = "0";
                    preloader.style.visibility = "hidden";
                }
            }, 300);
        }
    }, 100);
}

// 2. NAVBAR SCROLL EFFECT & ACTIVE STATE
function initNavbarScroll() {
    const navbar = document.getElementById("navbar");
    const navItems = document.querySelectorAll(".nav-item");
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

        let currentSection = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }
        });

        navItems.forEach(item => {
            item.classList.remove("active");
            if (item.getAttribute("href") === `#${currentSection}`) {
                item.classList.add("active");
            }
        });
    });
}

// 3. HERO SLIDESHOW AUTOMATION
function initHeroSlideshow() {
    const slides = document.querySelectorAll(".hero-bg-slideshow .slide");
    if (slides.length === 0) return;
    
    let currentSlide = 0;
    setInterval(() => {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("active");
    }, 5000);
}

// 4. AUDIO PLAYER ENGINE
function initAudioPlayer() {
    const soundBtn = document.getElementById("btn-sound-toggle");
    const soundStatus = document.getElementById("sound-status");
    const audio = document.getElementById("bg-audio");
    let isPlaying = false;

    if (!soundBtn || !audio) return;

    soundBtn.addEventListener("click", () => {
        if (!isPlaying) {
            audio.play().then(() => {
                isPlaying = true;
                soundStatus.innerText = "Ambient: ON";
                soundBtn.style.background = "var(--accent-gold)";
                soundBtn.style.color = "var(--text-dark)";
            }).catch(err => {
                console.log("Audio playback blocked by browser policy");
            });
        } else {
            audio.pause();
            isPlaying = false;
            soundStatus.innerText = "Ambient: OFF";
            soundBtn.style.background = "rgba(212, 175, 55, 0.15)";
            soundBtn.style.color = "var(--secondary-white)";
        }
    });
}

// 5. LANDMARK SEARCH AND FILTER ENGINE
function initLandmarkSearchAndFilter() {
    const searchInput = document.getElementById("landmark-search");
    const filterBtns = document.querySelectorAll(".filter-btn");
    const landmarkCards = document.querySelectorAll(".landmark-card");

    function filterCards() {
        const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
        const activeFilter = document.querySelector(".filter-btn.active").getAttribute("data-filter");

        landmarkCards.forEach(card => {
            const title = card.querySelector("h3").innerText.toLowerCase();
            const desc = card.querySelector(".landmark-desc").innerText.toLowerCase();
            const category = card.getAttribute("data-category");

            const matchesSearch = title.includes(query) || desc.includes(query);
            const matchesCategory = (activeFilter === "all") || (category === activeFilter);

            if (matchesSearch && matchesCategory) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }
        });
    }

    if (searchInput) {
        searchInput.addEventListener("input", filterCards);
    }

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            filterCards();
        });
    });
}

// 6. LANDMARK DETAIL MODAL SYSTEM
function initLandmarkModalSystem() {
    const modal = document.getElementById("landmark-modal");
    const closeModal = document.getElementById("modal-close");
    const detailBtns = document.querySelectorAll(".btn-detail");

    if (!modal) return;

    detailBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-id");
            const data = LANDMARKS_DATA[id];

            if (data) {
                document.getElementById("modal-img").src = data.image;
                document.getElementById("modal-title").innerText = data.title;
                document.getElementById("modal-category").innerText = data.category;
                document.getElementById("modal-history").innerText = data.history;
                document.getElementById("modal-tourist").innerText = data.tourist;
                document.getElementById("modal-location").innerText = data.location;
                document.getElementById("modal-timings").innerText = data.timings;

                modal.classList.add("active");
            }
        });
    });

    if (closeModal) {
        closeModal.addEventListener("click", () => {
            modal.classList.remove("active");
        });
    }

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("active");
        }
    });
}

// 7. LIGHTBOX SYSTEM FOR GALLERY
function initLightboxSystem() {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxCaption = document.getElementById("lightbox-caption");
    const lightboxClose = document.getElementById("lightbox-close");
    const galleryItems = document.querySelectorAll(".gallery-item");

    if (!lightbox) return;

    galleryItems.forEach(item => {
        item.addEventListener("click", () => {
            const src = item.getAttribute("data-src");
            const caption = item.getAttribute("data-caption");

            lightboxImg.src = src;
            lightboxCaption.innerText = caption;
            lightbox.classList.add("active");
        });
    });

    if (lightboxClose) {
        lightboxClose.addEventListener("click", () => {
            lightbox.classList.remove("active");
        });
    }

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove("active");
        }
    });
}

// 8. ANIMATED STATS COUNTER ON SCROLL
function initAnimatedStatsCounter() {
    const statNumbers = document.querySelectorAll(".stat-number");
    let animated = false;

    window.addEventListener("scroll", () => {
        const statsSection = document.getElementById("stats");
        if (!statsSection) return;

        const sectionTop = statsSection.offsetTop - window.innerHeight + 100;

        if (window.scrollY >= sectionTop && !animated) {
            animated = true;
            statNumbers.forEach(counter => {
                const target = +counter.getAttribute("data-target");
                const speed = target / 50;

                const updateCount = () => {
                    const count = +counter.innerText;
                    if (count < target) {
                        counter.innerText = Math.ceil(count + speed);
                        setTimeout(updateCount, 30);
                    } else {
                        counter.innerText = target.toLocaleString() + (target === 100 ? "%" : "+");
                    }
                };
                updateCount();
            });
        }
    });
}

// 9. NEWSLETTER FORM HANDLING
function initNewsletterForm() {
    const form = document.getElementById("newsletter-form");
    const msg = document.getElementById("form-message");

    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("email-input").value;

        if (email) {
            msg.innerText = "Thank you for subscribing! Updates from IT'S NAFAY DEV will be sent to " + email;
            form.reset();
            setTimeout(() => {
                msg.innerText = "";
            }, 5000);
        }
    });
}

// 10. MOBILE MENU TOGGLE
function initMobileNavigation() {
    const menuBtn = document.getElementById("mobile-menu-btn");
    const navLinks = document.getElementById("nav-links");

    if (!menuBtn || !navLinks) return;

    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        const icon = menuBtn.querySelector("i");
        if (navLinks.classList.contains("active")) {
            icon.className = "fas fa-times";
        } else {
            icon.className = "fas fa-bars";
        }
    });

    document.querySelectorAll(".nav-item").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            const icon = menuBtn.querySelector("i");
            if (icon) icon.className = "fas fa-bars";
        });
    });
}ff
