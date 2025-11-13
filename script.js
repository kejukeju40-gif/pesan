let total = 0;
let pesanan = [];

// Tambah pesanan ke daftar
function tambah(namaMakanan, harga) {
  total += harga;
  pesanan.push({ nama: namaMakanan, harga: harga });
  document.getElementById("total").innerText =
    "Total Pesanan: Rp" + total.toLocaleString();
}

// Kirim ke WhatsApp admin
function kirimPesanan() {
  const nama = document.getElementById("nama").value.trim();
  const nohp = document.getElementById("nohp").value.trim();

  if (pesanan.length === 0) {
    alert("Anda belum memesan apa pun!");
    return;
  }
  if (!nama || !nohp) {
    alert("Mohon isi nama dan nomor HP Anda.");
    return;
  }

  // Nomor WhatsApp admin (ganti sesuai kebutuhan)
  const admin = "6285329341685";

  // Format isi pesan
  let teks = `📦 *PESANAN BARU KELOMPOK-1*\n\n👤 Nama: ${nama}\n📞 kelas: ${nohp}\n\n🍴 *Daftar Pesanan:*\n`;
  pesanan.forEach((item, i) => {
    teks += `${i + 1}. ${item.nama} - Rp${item.harga.toLocaleString()}\n`;
  });
  teks += `\n💰 *Total: Rp${total.toLocaleString()}*\n\nTerima kasih telah memesan di RasaNusantara 🙏`;

  // Encode dan buka WhatsApp
  const url = `https://wa.me/${admin}?text=${encodeURIComponent(teks)}`;
  window.open(url, "_blank");
}



