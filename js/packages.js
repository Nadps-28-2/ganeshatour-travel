/**
 * packages.js - Ganesha Tour & Travel Package Renderer & Catalog Engine
 * Mendukung filter kategori interaktif, modal detail, dan Book Now WhatsApp CTA.
 */

// Fallback jika SITE_CONFIG belum dimuat
const DEFAULT_PHONE = (typeof SITE_CONFIG !== "undefined" && SITE_CONFIG.phone) ? SITE_CONFIG.phone : "6281232266028";
const BRAND_NAME = (typeof SITE_CONFIG !== "undefined" && SITE_CONFIG.brand) ? SITE_CONFIG.brand : "Ganesha Tour & Travel";

const FALLBACK_PACKAGES = [
  {
    "id": "pkg-kulon-progo",
    "categoryTag": "domestik",
    "category": "Wisata Domestik • Open Trip",
    "title": "Open Trip Kulon Progo",
    "badge": "Open Trip",
    "badgeIcon": "fa-person-hiking",
    "image": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
    "imageFallback": "images/placeholder-travel.svg",
    "imageAlt": "Kebun Teh Nglinggo Kulon Progo - Open Trip Kulon Progo Ganesha Tour & Travel",
    "gallery": [
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Petualangan seru menjelajahi keelokan alam Kulon Progo: panorama perbukitan Kebun Teh Nglinggo, eksotisme Puncak Widosari, dan kesegaran Air Terjun Kedung Pedut.",
    "destinations": [
      "Kebun Teh Nglinggo",
      "Puncak Widosari",
      "Air Terjun Kedung Pedut"
    ],
    "features": [],
    "exclusions": [],
    "itinerary": [],
    "schedule": "",
    "price": "Mulai Rp250.000",
    "priceNote": "/ orang",
    "priceDisclaimer": "* Estimasi harga mulai dari Rp250.000/orang; tarif final dan ketersediaan jadwal dikonfirmasi via WhatsApp.",
    "targetPackage": "Open Trip Kulon Progo",
    "ctaText": "Book Now"
  },
  {
    "id": "pkg-jogja-a",
    "categoryTag": "domestik",
    "category": "Wisata Domestik • City Tour Jogja",
    "title": "Yogyakarta Paket A",
    "badge": "City Tour",
    "badgeIcon": "fa-landmark",
    "image": "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=1200&q=80",
    "imageFallback": "images/placeholder-travel.svg",
    "imageAlt": "Taman Sari Yogyakarta - Paket Wisata Yogyakarta Paket A Ganesha Tour & Travel",
    "gallery": [
      "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Perjalanan wisata sejarah dan budaya istimewa di Yogyakarta: keanggunan istana air Taman Sari, panorama sunset legendaris di Pantai Parangtritis, dan pertunjukan seni Ramayana Ballet Purawisata.",
    "destinations": [
      "Taman Sari",
      "Pantai Parangtritis",
      "Ramayana Ballet Purawisata"
    ],
    "features": [],
    "exclusions": [],
    "itinerary": [],
    "schedule": "",
    "price": "Mulai Rp250.000",
    "priceNote": "/ orang",
    "priceDisclaimer": "* Estimasi harga mulai dari Rp250.000/orang; rincian fasilitas dan ketersediaan dikonfirmasi via WhatsApp.",
    "targetPackage": "Yogyakarta Paket A",
    "ctaText": "Book Now"
  },
  {
    "id": "pkg-jogja-b",
    "categoryTag": "domestik",
    "category": "Wisata Domestik • Candi & Sunset View",
    "title": "Yogyakarta Paket B",
    "badge": "Candi & Sunset",
    "badgeIcon": "fa-gopuram",
    "image": "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=1200&q=80",
    "imageFallback": "images/placeholder-travel.svg",
    "imageAlt": "Candi Prambanan Yogyakarta - Paket Wisata Yogyakarta Paket B Ganesha Tour & Travel",
    "gallery": [
      "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578469550956-0e16b69c6a3d?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Kombinasi wisata cagar budaya megah dan spot panorama perbukitan: Candi Sambisari bawah tanah, kemegahan Candi Prambanan, tebing ukir Tebing Breksi, dan sunset spektakuler di Obelix Hills.",
    "destinations": [
      "Candi Sambisari",
      "Candi Prambanan",
      "Tebing Breksi",
      "Obelix Hills"
    ],
    "features": [],
    "exclusions": [],
    "itinerary": [],
    "schedule": "",
    "price": "Mulai Rp250.000",
    "priceNote": "/ orang",
    "priceDisclaimer": "* Estimasi harga mulai dari Rp250.000/orang; rincian fasilitas dan ketersediaan dikonfirmasi via WhatsApp.",
    "targetPackage": "Yogyakarta Paket B",
    "ctaText": "Book Now"
  },
  {
    "id": "pkg-jogja-c",
    "categoryTag": "domestik",
    "category": "Wisata Domestik • Alam Merapi",
    "title": "Yogyakarta Paket C",
    "badge": "Wisata Merapi",
    "badgeIcon": "fa-mountain",
    "image": "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?auto=format&fit=crop&w=1200&q=80",
    "imageFallback": "images/placeholder-travel.svg",
    "imageAlt": "Gunung Merapi dari Kaliurang - Paket Wisata Yogyakarta Paket C Ganesha Tour & Travel",
    "gallery": [
      "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Menikmati segarnya udara sejuk dan pemandangan Gunung Merapi dari dekat: kawasan asri Kaliurang, landmark miniatur dunia di Merapi Park, dan panorama memukau di Bukit Klangon.",
    "destinations": [
      "Kaliurang",
      "Merapi Park",
      "Bukit Klangon"
    ],
    "features": [],
    "exclusions": [],
    "itinerary": [],
    "schedule": "",
    "price": "Mulai Rp250.000",
    "priceNote": "/ orang",
    "priceDisclaimer": "* Estimasi harga mulai dari Rp250.000/orang; rincian fasilitas dan ketersediaan dikonfirmasi via WhatsApp.",
    "targetPackage": "Yogyakarta Paket C",
    "ctaText": "Book Now"
  },
  {
    "id": "pkg-pangandaran",
    "categoryTag": "domestik",
    "category": "Wisata Domestik • Adventure & Rafting",
    "title": "Pangandaran",
    "badge": "Body Rafting",
    "badgeIcon": "fa-water",
    "image": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80",
    "imageFallback": "images/placeholder-travel.svg",
    "imageAlt": "Green Canyon Pangandaran - Paket Wisata Pangandaran Ganesha Tour & Travel",
    "gallery": [
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Sensasi petualangan alam air menyusuri ngarai sungai jernih bertebing hijau di Green Canyon serta tantangan seru Citumang Body Rafting di Pangandaran.",
    "destinations": [
      "Green Canyon",
      "Citumang Body Rafting"
    ],
    "features": [],
    "exclusions": [],
    "itinerary": [],
    "schedule": "",
    "price": "Mulai Rp750.000",
    "priceNote": "/ orang",
    "priceDisclaimer": "* Estimasi harga mulai dari Rp750.000/orang; rincian fasilitas dan ketersediaan dikonfirmasi via WhatsApp.",
    "targetPackage": "Pangandaran",
    "ctaText": "Book Now"
  },
  {
    "id": "pkg-bangkok-pattaya",
    "categoryTag": "internasional",
    "category": "Wisata Internasional • Thailand",
    "title": "Bangkok–Pattaya",
    "duration": "4 Hari 3 Malam",
    "badge": "Internasional",
    "badgeIcon": "fa-earth-asia",
    "image": "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80",
    "imageFallback": "images/placeholder-travel.svg",
    "imageAlt": "Kuil Wat Arun Bangkok Thailand - Paket Bangkok-Pattaya Ganesha Tour & Travel",
    "gallery": [
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Paket liburan lengkap 4 hari 3 malam di Thailand: eksplorasi kuil Wat Arun & Grand Palace, keseruan Pattaya Beach & Floating Market, Nong Nooch Village, hingga belanja di ICONSIAM.",
    "destinations": [
      "Wat Arun",
      "Wat Pho",
      "Grand Palace",
      "Pattaya Beach",
      "Pattaya Floating Market",
      "Laser Buddha Hill",
      "Wat Phra Yai",
      "Pattaya Night Market",
      "Nong Nooch Village",
      "Sanctuary of Truth",
      "Chao Phraya River",
      "ICONSIAM"
    ],
    "features": [
      "Tour guide lokal berpengalaman",
      "Tiket objek wisata sesuai itinerary",
      "Hotel 3 malam",
      "Transportasi selama tur"
    ],
    "exclusions": [
      "Tiket pesawat pulang-pergi (PP)"
    ],
    "itinerary": [
      {
        "day": "Hari 1 — Bangkok Heritage Tour",
        "items": [
          "Wat Arun (Temple of Dawn)",
          "Wat Pho (Kuil Buddha Berbaring)",
          "Grand Palace Bangkok"
        ]
      },
      {
        "day": "Hari 2 — Eksplorasi Pesisir Pattaya",
        "items": [
          "Pattaya Beach & suasana pesisir",
          "Pattaya Floating Market",
          "Laser Buddha Hill & Wat Phra Yai",
          "Pattaya Night Market & kuliner malam"
        ]
      },
      {
        "day": "Hari 3–4 — Budaya, River Cruise & Belanja",
        "items": [
          "Nong Nooch Village & pertunjukan budaya",
          "Sanctuary of Truth",
          "Menyusuri Sungai Chao Phraya",
          "Belanja di ICONSIAM dan persiapan kepulangan"
        ]
      }
    ],
    "schedule": "",
    "price": "Rp2.900.000",
    "priceNote": "/ orang",
    "priceDisclaimer": "* Tarif Rp2.900.000/orang (belum termasuk tiket pesawat pulang-pergi). Silakan hubungi admin untuk jadwal keberangkatan.",
    "targetPackage": "Bangkok–Pattaya",
    "ctaText": "Book Now"
  },
  {
    "id": "pkg-bromo",
    "categoryTag": "domestik",
    "category": "Wisata Domestik • Bromo Adventure",
    "title": "Sunrise di Bromo",
    "badge": "Sunrise Jeep 4x4",
    "badgeIcon": "fa-sun",
    "image": "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1200&q=80",
    "imageFallback": "images/placeholder-travel.svg",
    "imageAlt": "Sunrise di Gunung Bromo - Paket Sunrise di Bromo Ganesha Tour & Travel",
    "gallery": [
      "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Menyaksikan matahari terbit spektakuler di atas lautan awan Gunung Bromo dengan Jeep 4x4, menjelajahi savana hijau dan Bukit Teletubbies yang memukau.",
    "highlight": "Sunrise, savana, Jeep 4x4",
    "destinations": [
      "Spot Sunrise Penanjakan Bromo",
      "Kawah Aktif Gunung Bromo",
      "Pasir Berbisik",
      "Savana Bromo & Bukit Teletubbies"
    ],
    "features": [
      "Jeep 4x4 ke lokasi sunrise",
      "Tiket masuk Gunung Bromo",
      "Pemandu lokal",
      "3 kali makan prasmanan",
      "Dokumentasi foto profesional"
    ],
    "exclusions": [],
    "itinerary": [],
    "schedule": "21–22 November dan 26–27 Desember (Tahun belum dikonfirmasi)",
    "price": "Mulai Rp685.000",
    "priceNote": "/ orang",
    "priceDisclaimer": "* Estimasi harga mulai Rp685.000/orang. Jadwal yang tercantum: 21–22 November dan 26–27 Desember (Tahun belum dikonfirmasi via WhatsApp).",
    "targetPackage": "Sunrise di Bromo",
    "ctaText": "Book Now"
  },
  {
    "id": "pkg-bali",
    "categoryTag": "domestik",
    "category": "Wisata Domestik • Rombongan Big Bus",
    "title": "Pulau Bali",
    "badge": "Min. 45 Orang",
    "badgeIcon": "fa-bus-simple",
    "image": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
    "imageFallback": "images/placeholder-travel.svg",
    "imageAlt": "Pura Ulun Danu Bedugul Bali - Paket Wisata Pulau Bali Ganesha Tour & Travel",
    "gallery": [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Eksplorasi lengkap Pulau Dewata Bali untuk rombongan (min. 45 orang) dengan Big Bus JB 5: Bedugul, Penglipuran, Tari Barong, Pantai Melasti, Uluwatu, dan seafood Jimbaran.",
    "minParticipants": "Minimal 45 orang",
    "destinations": [
      "Pura Ulun Danu Bedugul",
      "Desa Adat Penglipuran",
      "Tari Barong",
      "Pantai Melasti",
      "Pura Luhur Uluwatu",
      "Jimbaran",
      "Tanah Lot",
      "Joger",
      "Krisna"
    ],
    "features": [
      "Dokumentasi drone",
      "Transportasi Big Bus JB 5",
      "Tour leader & pemandu wisata Bali",
      "Tiket objek wisata",
      "11 kali makan termasuk sarapan hotel 2 kali dan makan seafood di Jimbaran 1 kali",
      "Hotel bintang 3"
    ],
    "exclusions": [],
    "itinerary": [],
    "schedule": "25–29 November dan 16–20 Desember (Tahun belum dikonfirmasi)",
    "price": "Rp1.600.000",
    "priceNote": "/ orang (min. 45 orang)",
    "priceDisclaimer": "* Tarif Rp1.600.000/orang (minimal 45 orang). Jadwal yang tercantum: 25–29 November dan 16–20 Desember (Tahun belum dikonfirmasi via WhatsApp).",
    "targetPackage": "Pulau Bali",
    "ctaText": "Book Now"
  }
];

let globalPackages = [];

/**
 * Membuat format URL WhatsApp dengan prefilled message ter-encode rapi sesuai format standar:
 * “Halo Ganesha Tour Travel, saya tertarik booking paket [Nama Paket] dengan harga [Harga]/orang. Mohon informasi lebih lanjut mengenai jadwal dan ketersediaan paket.”
 */
function createWaLink(pkg, phone = DEFAULT_PHONE) {
  let priceStr = pkg.price || "";
  if (priceStr.toLowerCase().startsWith("mulai ")) {
    priceStr = "mulai " + priceStr.substring(6);
  }
  const message = `Halo Ganesha Tour Travel, saya tertarik booking paket ${pkg.title} dengan harga ${priceStr}/orang. Mohon informasi lebih lanjut mengenai jadwal dan ketersediaan paket.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

// Fallback image helper
function handleImageError(img) {
  const fb = img.getAttribute("data-fallback") || "images/placeholder-travel.svg";
  img.onerror = null;
  img.src = fb;
}

// Card accent colors palet Ganesha: Hijau Tua (#0A4737), Hijau Sedang (#136B52), Kuning Mustard (#D7CC11)
const CARD_ACCENTS = [
  { tag: "#0A4737" },
  { tag: "#136B52" },
  { tag: "#0A4737" },
  { tag: "#136B52" }
];

function renderPackages(packages) {
  globalPackages = packages;
  const container = document.getElementById("packages-grid");
  if (!container) return;

  container.innerHTML = packages.map((pkg, idx) => {
    const accent = CARD_ACCENTS[idx % CARD_ACCENTS.length];
    const waUrl = createWaLink(pkg);

    // Destinasi tags (maks 4)
    const destinationTags = (pkg.destinations || []).slice(0, 4).map(d =>
      `<span class="pkg-dest-tag"><i class="fa-solid fa-location-dot"></i>${d}</span>`
    ).join("");

    // Highlights list: gunakan features jika ada, jika tidak gunakan highlight/destinasi
    let highlightsHtml = "";
    if (pkg.features && pkg.features.length) {
      highlightsHtml = pkg.features.slice(0, 3).map(f =>
        `<li><i class="fa-solid fa-circle-check"></i><span>${f}</span></li>`
      ).join("");
    } else if (pkg.highlight) {
      highlightsHtml = `<li><i class="fa-solid fa-star"></i><span>${pkg.highlight}</span></li>`;
    } else if (pkg.destinations && pkg.destinations.length) {
      highlightsHtml = pkg.destinations.slice(0, 2).map(d =>
        `<li><i class="fa-solid fa-check"></i><span>Wisata: ${d}</span></li>`
      ).join("");
    }

    // Schedule info badge if present
    const scheduleBadge = pkg.schedule ? `
      <div class="pkg-schedule-pill">
        <i class="fa-regular fa-calendar-days"></i>
        <span>${pkg.schedule}</span>
      </div>
    ` : "";

    return `
      <article class="pkg-pro-card fade-in" data-id="${pkg.id}" data-category="${pkg.categoryTag || 'domestik'}" style="--card-accent: ${accent.tag};">
        <div class="pkg-pro-img-wrap">
          <img id="pkg-img-${pkg.id}" 
               src="${pkg.image}" 
               alt="${pkg.imageAlt || pkg.title}" 
               loading="lazy" 
               width="900" 
               height="600" 
               class="pkg-pro-img" 
               data-fallback="${pkg.imageFallback || 'images/placeholder-travel.svg'}" 
               onerror="handleImageError(this)" />
          <div class="pkg-pro-img-overlay"></div>
          <span class="pkg-badge-main" id="pkg-badge-${pkg.id}">
            <i class="fa-solid ${pkg.badgeIcon || 'fa-tag'}"></i> ${pkg.badge}
          </span>
          ${pkg.duration ? `<span class="pkg-badge-duration"><i class="fa-regular fa-clock"></i> ${pkg.duration}</span>` : ''}
        </div>

        <div class="pkg-pro-body">
          <span class="pkg-pro-category">${pkg.category}</span>
          <h3 class="pkg-pro-title">${pkg.title}</h3>
          <p class="pkg-pro-desc">${pkg.description}</p>
          
          <div class="pkg-dest-tags">${destinationTags}</div>
          
          ${scheduleBadge}

          ${highlightsHtml ? `<ul class="pkg-highlights">${highlightsHtml}</ul>` : ''}

          <div class="pkg-pro-footer">
            <div class="pkg-pro-price-block">
              <span class="pkg-pro-price-label">Harga per Orang</span>
              <div class="pkg-pro-price" id="pkg-price-${pkg.id}">
                ${pkg.price}
                <span class="pkg-pro-price-sub">${pkg.priceNote || ''}</span>
              </div>
            </div>
            <div class="pkg-pro-actions">
              <button type="button" class="btn btn-outline-pkg pkg-detail-btn" data-id="${pkg.id}" aria-label="Lihat detail ${pkg.title}">
                <i class="fa-solid fa-circle-info"></i><span>Lihat Detail</span>
              </button>
              <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-wa-pkg" id="pkg-wa-btn-${pkg.id}" aria-label="Book Now ${pkg.title} via WhatsApp">
                <i class="fa-brands fa-whatsapp"></i><span>${pkg.ctaText || 'Book Now'}</span>
              </a>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join("");

  // Attach Detail Button Click Handlers
  container.querySelectorAll(".pkg-detail-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      const pkg = globalPackages.find(p => p.id === id);
      if (pkg) openPackageModal(pkg);
    });
  });

  if (window.initScrollAnimations) window.initScrollAnimations();
}

// ── INTERACTIVE CATEGORY FILTER ───────────────────────────────────────────────
function initCategoryFilter() {
  const filterButtons = document.querySelectorAll(".pkg-filter-btn");
  if (!filterButtons.length) return;

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");

      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const cards = document.querySelectorAll(".pkg-pro-card");
      cards.forEach(card => {
        const cat = card.getAttribute("data-category");
        if (filter === "all" || cat === filter) {
          card.classList.remove("is-hidden");
          card.style.display = "flex";
        } else {
          card.classList.add("is-hidden");
          card.style.display = "none";
        }
      });
    });
  });
}

// ── PACKAGE DETAIL MODAL ──────────────────────────────────────────────────────
function openPackageModal(pkg) {
  let modal = document.getElementById("pkg-detail-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "pkg-detail-modal";
    modal.className = "pkg-modal-overlay";
    modal.innerHTML = `
      <div class="pkg-modal-box" role="dialog" aria-modal="true" aria-labelledby="modal-pkg-title">
        <button class="pkg-modal-close" aria-label="Tutup Detail">&times;</button>
        <div class="pkg-modal-inner"></div>
      </div>`;
    document.body.appendChild(modal);

    modal.addEventListener("click", e => { if (e.target === modal) closePackageModal(); });
    modal.querySelector(".pkg-modal-close").addEventListener("click", closePackageModal);
    document.addEventListener("keydown", e => { if (e.key === "Escape") closePackageModal(); });
  }

  // Gallery thumbnails setup
  const galleryImages = (pkg.gallery && pkg.gallery.length) ? pkg.gallery : [pkg.image];
  let currentMainImage = galleryImages[0];

  const thumbsHtml = galleryImages.length > 1 ? `
    <div class="pkg-modal-thumbs" id="modal-thumbs">
      ${galleryImages.map((img, i) => `
        <div class="pkg-modal-thumb ${i === 0 ? 'active' : ''}">
          <img src="${img}" alt="${pkg.title} - foto ${i + 1}" loading="lazy" data-fallback="${pkg.imageFallback || 'images/placeholder-travel.svg'}" onerror="handleImageError(this)" />
        </div>
      `).join("")}
    </div>
  ` : '';

  const waUrl = createWaLink(pkg);

  // Destinasi list
  const destList = (pkg.destinations || []).map(d =>
    `<li><i class="fa-solid fa-location-dot"></i> <span>${d}</span></li>`
  ).join("");

  // Fasilitas list (hanya jika ada data pasti)
  let featuresSectionHtml = "";
  if (pkg.features && pkg.features.length) {
    const featuresList = pkg.features.map(f =>
      `<li><i class="fa-solid fa-circle-check"></i> <span>${f}</span></li>`
    ).join("");
    featuresSectionHtml = `
      <div>
        <h4><i class="fa-solid fa-shield-halved"></i> Fasilitas Termasuk</h4>
        <ul class="pkg-modal-list">${featuresList}</ul>
      </div>
    `;
  } else {
    featuresSectionHtml = `
      <div>
        <h4><i class="fa-solid fa-circle-info"></i> Fasilitas Paket</h4>
        <p class="pkg-modal-unconfirmed">
          <i class="fa-solid fa-circle-question"></i> Fasilitas resmi dan penawaran armada dikonfirmasi via WhatsApp.
        </p>
      </div>
    `;
  }

  // Exclusions (Tidak termasuk) jika ada
  let exclusionsHtml = "";
  if (pkg.exclusions && pkg.exclusions.length) {
    const exList = pkg.exclusions.map(ex =>
      `<li><i class="fa-solid fa-circle-xmark" style="color:var(--color-red, #E53E3E);"></i> <span>${ex}</span></li>`
    ).join("");
    exclusionsHtml = `
      <div style="margin-top: 14px;">
        <h4 style="color:var(--color-red, #E53E3E);"><i class="fa-solid fa-ban"></i> Tidak Termasuk</h4>
        <ul class="pkg-modal-list">${exList}</ul>
      </div>
    `;
  }

  // Itinerary (hanya jika ada data pasti)
  let itineraryHtml = "";
  if (pkg.itinerary && pkg.itinerary.length) {
    itineraryHtml = `
      <div class="pkg-modal-itinerary">
        <h4><i class="fa-solid fa-list-check"></i> Susunan Acara (Itinerary)</h4>
        ${pkg.itinerary.map(d => `
          <div class="itin-day">
            <div class="itin-day-title">${d.day}</div>
            <ul class="itin-items">${(d.items || []).map(it => `<li>${it}</li>`).join("")}</ul>
          </div>`).join("")}
      </div>`;
  }

  // Jadwal Keberangkatan jika ada
  let scheduleHtml = "";
  if (pkg.schedule) {
    scheduleHtml = `
      <div class="pkg-modal-schedule-block">
        <h4><i class="fa-regular fa-calendar-days"></i> Jadwal Keberangkatan</h4>
        <p class="pkg-schedule-text"><strong>${pkg.schedule}</strong></p>
      </div>
    `;
  }

  modal.querySelector(".pkg-modal-inner").innerHTML = `
    <div class="pkg-modal-img-wrap">
      <img id="modal-main-img" src="${currentMainImage}" alt="${pkg.imageAlt || pkg.title}" loading="lazy" data-fallback="${pkg.imageFallback || 'images/placeholder-travel.svg'}" onerror="handleImageError(this)" />
      <span class="pkg-modal-badge" id="modal-badge"><i class="fa-solid ${pkg.badgeIcon || 'fa-tag'}"></i> ${pkg.badge}</span>
    </div>
    ${thumbsHtml}
    <div class="pkg-modal-content">
      <span class="pkg-modal-category">${pkg.category}</span>
      <h2 class="pkg-modal-title" id="modal-pkg-title">${pkg.title}</h2>
      
      <div class="pkg-modal-meta">
        ${pkg.duration ? `<span><i class="fa-regular fa-clock"></i> ${pkg.duration}</span>` : ''}
        <span id="modal-price"><i class="fa-solid fa-tag"></i> ${pkg.price} ${pkg.priceNote || ''}</span>
      </div>

      <p class="pkg-modal-desc">${pkg.description}</p>

      ${scheduleHtml}

      <div class="pkg-modal-cols">
        <div>
          <h4><i class="fa-solid fa-map-location-dot"></i> Destinasi Unggulan</h4>
          <ul class="pkg-modal-list">${destList}</ul>
        </div>
        ${featuresSectionHtml}
      </div>

      ${exclusionsHtml}

      ${itineraryHtml}

      <p class="pkg-modal-disclaimer">${pkg.priceDisclaimer || "* Data demonstrasi, silakan hubungi kami untuk konfirmasi ketersediaan dan penawaran resmi."}</p>
      
      <a href="${waUrl}" id="modal-wa-btn" target="_blank" rel="noopener noreferrer" class="btn btn-accent pkg-modal-wa-btn">
        <i class="fa-brands fa-whatsapp"></i>
        <span>Book Now via WhatsApp</span>
      </a>
    </div>
  `;

  // Attach thumbnail clicks
  const mainImg = modal.querySelector("#modal-main-img");
  modal.querySelectorAll(".pkg-modal-thumb").forEach(thumb => {
    thumb.addEventListener("click", () => {
      modal.querySelectorAll(".pkg-modal-thumb").forEach(t => t.classList.remove("active"));
      thumb.classList.add("active");
      const tImg = thumb.querySelector("img");
      if (mainImg && tImg) mainImg.src = tImg.src;
    });
  });

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closePackageModal() {
  const modal = document.getElementById("pkg-detail-modal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// ── LOAD DATA AND INITIALIZE ──────────────────────────────────────────────────
async function loadPackages() {
  try {
    const response = await fetch("data/packages.json");
    if (!response.ok) throw new Error("HTTP " + response.status);
    const data = await response.json();
    renderPackages(data);
  } catch (err) {
    console.log("Using fallback package data:", err.message);
    renderPackages(FALLBACK_PACKAGES);
  }
  initCategoryFilter();
}

document.addEventListener("DOMContentLoaded", () => {
  loadPackages();
});