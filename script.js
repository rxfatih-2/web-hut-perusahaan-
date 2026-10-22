/* ===== Countdown ===== */
const targetDate = new Date('2027-06-20T08:00:00+07:00').getTime();
const cdEl = {
  days: document.getElementById('days'),
  hours: document.getElementById('hours'),
  minutes: document.getElementById('minutes'),
  seconds: document.getElementById('seconds')
};

function tick() {
  const now = Date.now();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById('countdown').innerHTML =
      '<p style="font-family:\'Cormorant Garamond\',serif;font-size:1.4rem;color:#f7a765;">Acara telah berlangsung</p>';
    clearInterval(timer);
    return;
  }

  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);

  cdEl.days.textContent = String(d).padStart(2, '0');
  cdEl.hours.textContent = String(h).padStart(2, '0');
  cdEl.minutes.textContent = String(m).padStart(2, '0');
  cdEl.seconds.textContent = String(s).padStart(2, '0');
}

tick();
const timer = setInterval(tick, 1000);

/* ===== Reveal on Scroll ===== */
const revealTargets = document.querySelectorAll(
  '.section .container, .event-head, .event-grid, .gallery-card'
);

revealTargets.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealTargets.forEach(el => observer.observe(el));

/* ===== Konfirmasi WhatsApp ===== */
document.getElementById('waBtn').addEventListener('click', e => {
  e.preventDefault();
  const nomor = '6281234567890'; // ganti dengan nomor panitia
  const pesan = encodeURIComponent(
    'Kepada Panitia HUT PT Maju Bersama,\n\nSaya menyatakan akan hadir pada Perayaan Hari Jadi Perusahaan tanggal 20 Juni 2027.\n\nTerima kasih.'
  );
  window.open(`https://wa.me/${nomor}?text=${pesan}`, '_blank', 'noopener');
});
/* ===== HAMBURGER DRAWER ===== */
const hamburger = document.getElementById('hamburger');
const drawer = document.getElementById('drawer');
const backdrop = document.getElementById('drawerBackdrop');

function openDrawer() {
  drawer.classList.add('open');
  backdrop.classList.add('show');
  hamburger.classList.add('active');
  hamburger.setAttribute('aria-expanded', 'true');
  drawer.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeDrawer() {
  drawer.classList.remove('open');
  backdrop.classList.remove('show');
  hamburger.classList.remove('active');
  hamburger.setAttribute('aria-expanded', 'false');
  drawer.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
  drawer.classList.contains('open') ? closeDrawer() : openDrawer();
});
backdrop.addEventListener('click', closeDrawer);

// Tutup drawer saat link diklik + smooth scroll
document.querySelectorAll('[data-nav]').forEach(link => {
  link.addEventListener('click', () => {
    closeDrawer();
  });
});

// Tutup dengan ESC
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && drawer.classList.contains('open')) closeDrawer();
});

/* ===== COUNTDOWN, REVEAL, WHATSAPP (sama seperti sebelumnya) ===== */
// ... (kode countdown, reveal, dan waBtn tetap dipertahankan)
