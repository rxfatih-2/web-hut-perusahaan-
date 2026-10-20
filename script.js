// Countdown menuju hari perayaan
const targetDate = new Date('2027-06-20T08:00:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    document.getElementById('countdown').innerHTML =
      '<p style="color:#e65c00;font-weight:700;">Acara telah berlangsung!</p>';
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Tombol konfirmasi WhatsApp
document.getElementById('waBtn').addEventListener('click', function (e) {
  e.preventDefault();
  const nomor = '6281234567890'; // ganti dengan nomor panitia
  const pesan = encodeURIComponent('Halo, saya ingin konfirmasi kehadiran untuk HUT Perusahaan PT MAJU BERSAMA.');
  window.open(`https://wa.me/${nomor}?text=${pesan}`, '_blank');
});
