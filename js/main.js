/**
 * main.js - Ganesha Tour & Travel Vanilla JavaScript Engine
 * Features: Transparent-to-Solid Navbar, Dropdown Navigation, Instant Booking Form, Interactive Gallery Lightbox, Smooth Scroll & Animations.
 */

/**
 * KONFIGURASI BISNIS (sumber tunggal untuk nama brand, kontak, dan alamat).
 * Dibaca juga oleh js/packages.js.
 */
const SITE_CONFIG = {
  brand: "Ganesha Tour & Travel",
  company: "PT. Ganesha Tour Travel",
  tagline: "Murah, Asik, Terpercaya",
  city: "Yogyakarta",
  phone: "6281232266028",
  phoneDisplay: "0812-3226-6028 (+62 812-3226-6028)",
  instagram: "https://www.instagram.com/ganeshatourtravel/",
  instagramHandle: "@ganeshatourtravel",
  address: "Jl. Babarsari, Tambak Bayan, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281",
  hours: "Senin – Jumat (08.00 - 16.00 WIB) | Sabtu – Minggu (09.00 - 15.00 WIB)"
};

window.SITE_CONFIG = SITE_CONFIG;

document.addEventListener("DOMContentLoaded", () => {
  initHeaderScrollEffect();
  initMobileNav();
  initNavDropdown();
  initSmoothScroll();
  initScrollAnimations();
  initFaqAccordion();
  initBookingForm();
  initGalleryLightbox();
  initActiveNavigation();
});

/* 1. NAVBAR TRANSPARENT-TO-SOLID SCROLL BEHAVIOR */
function initHeaderScrollEffect() {
  const header = document.querySelector(".header");
  const hero = document.querySelector(".hero");
  if (!header) return;

  function updateNavbar() {
    const heroHeight = hero ? (hero.offsetHeight - 80) : 100;
    if (window.scrollY > heroHeight) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", updateNavbar, { passive: true });
  updateNavbar(); // Run initial check
}

/* 2. MOBILE NAVIGATION DRAWER */
function initMobileNav() {
  const toggleBtn = document.getElementById("mobile-toggle");
  const navDrawer = document.getElementById("mobile-nav-drawer");
  const navLinks = document.querySelectorAll(".mobile-nav-link");

  if (!toggleBtn || !navDrawer) return;

  function toggleMenu() {
    const isOpen = navDrawer.classList.contains("active");
    if (isOpen) {
      navDrawer.classList.remove("active");
      toggleBtn.setAttribute("aria-expanded", "false");
    } else {
      navDrawer.classList.add("active");
      toggleBtn.setAttribute("aria-expanded", "true");
    }
  }

  toggleBtn.addEventListener("click", toggleMenu);

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navDrawer.classList.remove("active");
      toggleBtn.setAttribute("aria-expanded", "false");
    });
  });
}

/* 2B. DESKTOP NAVBAR DROPDOWN TOGGLE */
function initNavDropdown() {
  const dropdown = document.querySelector(".nav-dropdown");
  const dropdownBtn = document.querySelector(".nav-dropdown-btn");
  const dropdownMenu = document.querySelector(".nav-dropdown-menu");

  if (!dropdown || !dropdownBtn || !dropdownMenu) return;

  dropdownBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isExpanded = dropdownBtn.getAttribute("aria-expanded") === "true";
    dropdownBtn.setAttribute("aria-expanded", !isExpanded);
    dropdownMenu.classList.toggle("show");
  });

  // Tutup dropdown saat klik di luar
  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      dropdownBtn.setAttribute("aria-expanded", "false");
      dropdownMenu.classList.remove("show");
    }
  });

  // Tutup dropdown saat link di dalamnya diklik
  dropdownMenu.querySelectorAll("a").forEach(item => {
    item.addEventListener("click", () => {
      dropdownBtn.setAttribute("aria-expanded", "false");
      dropdownMenu.classList.remove("show");
    });
  });
}

/* 3. SMOOTH SCROLL WITH HEADER OFFSET */
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  const headerHeight = 76;

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (targetId === "#" || !targetId) return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  });
}

/* 4. SCROLL FADE-IN ANIMATIONS (IntersectionObserver) */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll(".fade-in");
  if (!animatedElements.length) return;

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    });

    animatedElements.forEach(el => observer.observe(el));
  } else {
    animatedElements.forEach(el => el.classList.add("visible"));
  }
}

window.initScrollAnimations = initScrollAnimations;

/* 5. INSTANT BOOKING FORM SUBMISSION VIA WHATSAPP */
function initBookingForm() {
  const form = document.getElementById("instant-booking-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("booking-name")?.value.trim() || "";
    const phone = document.getElementById("booking-phone")?.value.trim() || "";
    const packageChoice = document.getElementById("booking-package")?.value || "";
    const date = document.getElementById("booking-date")?.value || "Belum ditentukan";
    const guests = document.getElementById("booking-guests")?.value || "1";
    const notes = document.getElementById("booking-notes")?.value.trim() || "-";

    const waText =
      `Halo ${SITE_CONFIG.brand}, saya ingin memesan perjalanan secara instan:
• Nama Lengkap: ${name}
• No. WhatsApp: ${phone}
• Paket Pilihan: ${packageChoice}
• Rencana Keberangkatan: ${date}
• Jumlah Peserta: ${guests} orang
• Catatan Tambahan: ${notes}`;

    const waUrl = `https://wa.me/${SITE_CONFIG.phone}?text=${encodeURIComponent(waText)}`;
    window.open(waUrl, "_blank");
  });
}

/* 6. GALLERY LIGHTBOX INTERACTIVE VIEWER */
function initGalleryLightbox() {
  const galleryItems = document.querySelectorAll(".gallery-item");
  const modal = document.getElementById("lightbox-modal");
  const modalImg = document.getElementById("lightbox-img");
  const modalCaption = document.getElementById("lightbox-caption");
  const closeBtn = document.getElementById("lightbox-close");
  const prevBtn = document.getElementById("lightbox-prev");
  const nextBtn = document.getElementById("lightbox-next");

  if (!galleryItems.length || !modal || !modalImg) return;

  let currentIndex = 0;

  function showImage(index) {
    if (index < 0) index = galleryItems.length - 1;
    if (index >= galleryItems.length) index = 0;
    currentIndex = index;

    const item = galleryItems[currentIndex];
    const img = item.querySelector("img");
    const title = item.querySelector(".gallery-title")?.textContent || "";

    if (img) {
      modalImg.src = img.src;
      modalImg.alt = img.alt || title;
      if (modalCaption) modalCaption.textContent = title;
    }
  }

  function openLightbox(index) {
    showImage(index);
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }

  galleryItems.forEach((item, idx) => {
    item.addEventListener("click", () => openLightbox(idx));
  });

  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  if (prevBtn) prevBtn.addEventListener("click", () => showImage(currentIndex - 1));
  if (nextBtn) nextBtn.addEventListener("click", () => showImage(currentIndex + 1));

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showImage(currentIndex - 1);
    if (e.key === "ArrowRight") showImage(currentIndex + 1);
  });
}

/* 7. FAQ ACCORDION TOGGLE */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const questionBtn = item.querySelector(".faq-question");
    if (!questionBtn) return;

    questionBtn.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");

      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove("open");
          const otherBtn = otherItem.querySelector(".faq-question");
          if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
        }
      });

      if (isOpen) {
        item.classList.remove("open");
        questionBtn.setAttribute("aria-expanded", "false");
      } else {
        item.classList.add("open");
        questionBtn.setAttribute("aria-expanded", "true");
      }
    });
  });
}

/* 8. ACTIVE NAVIGATION ON SCROLL */
function initActiveNavigation() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link, .nav-dropdown-link");

  if (!sections.length || !navLinks.length) return;

  function updateActiveNav() {
    let current = "";
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = sectionId;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      const href = link.getAttribute("href");
      if (href === `#${current}`) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", updateActiveNav, { passive: true });
  updateActiveNav();
}