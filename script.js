    document.addEventListener("DOMContentLoaded", function() {
        // Menangkap semua elemen anchor di navbar
        const links = document.querySelectorAll(".navbar a");

        // Loop melalui setiap link
        links.forEach(link => {
            // Mencegah default action (pindah ke anchor) ketika link diklik
            link.addEventListener("click", function(e) {
                e.preventDefault();

                // Mendapatkan id target (berdasarkan href attribute) dari link
                const targetId = this.getAttribute("href").substring(1);

                // Mendapatkan elemen target berdasarkan id
                const targetElement = document.getElementById(targetId);

                // Menggunakan fungsi scrollIntoView untuk melakukan smooth scroll ke elemen target
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            });
        });
    });

document.addEventListener("DOMContentLoaded", function() {
  // Tentukan waktu perpindahan gambar dalam milidetik
  const interval = 2500; // misalnya setiap 2.5 detik

  // Ambil semua gambar dari elemen dengan kelas 'about-image'
  const images = document.querySelectorAll('.about-image img');

  // Inisialisasi indeks gambar saat ini
  let currentImageIndex = 0;

  // Fungsi untuk mengubah gambar yang sedang ditampilkan
  function changeImage() {
      // Hilangkan kelas 'active' dari gambar saat ini
      images[currentImageIndex].classList.remove('active');

      // Tambahkan kelas 'active' ke gambar berikutnya
      currentImageIndex = (currentImageIndex + 1) % images.length;
      images[currentImageIndex].classList.add('active');
  }

  // Panggil fungsi changeImage setiap interval waktu
  setInterval(changeImage, interval);
});

    document.addEventListener('DOMContentLoaded', function() {
        // Ambil semua tautan navbar
        const navLinks = document.querySelectorAll('.navbar a');

        // Tambahkan event listener untuk setiap tautan navbar
        navLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                // Cegah perilaku default dari tautan
                event.preventDefault();
                
                // Ambil id dari bagian target yang diarahkan oleh tautan
                const targetId = link.getAttribute('href').substring(1);
                
                // Cari elemen dengan id yang sesuai
                const targetElement = document.getElementById(targetId);
                
                // Gulir halaman ke elemen target dengan efek smooth
                targetElement.scrollIntoView({ behavior: 'smooth' });
            });
        });
    });
